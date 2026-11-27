import nodemailer from "nodemailer";
import { careerPositions, MAX_APPLICATION_BYTES, MAX_RESUME_BYTES } from "../../../lib/careers";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; expires: number }>();
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]!));
const fail = (message: string, status = 400) => Response.json({ message }, { status });

async function readForm(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data") || !request.body) throw new Error("invalid");
  if (Number(request.headers.get("content-length")) > MAX_APPLICATION_BYTES) throw new Error("large");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_APPLICATION_BYTES) {
        await reader.cancel();
        throw new Error("large");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return new Response(bytes.buffer, { headers: { "content-type": request.headers.get("content-type")! } }).formData();
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return fail("ไม่สามารถส่งใบสมัครจากช่องทางนี้ได้", 403);

  let form: FormData;
  try {
    form = await readForm(request);
  } catch (error) {
    return error instanceof Error && error.message === "large"
      ? fail("ข้อมูลหรือไฟล์แนบมีขนาดใหญ่เกินไป กรุณาใช้เรซูเม่ PDF ไม่เกิน 5 MB", 413)
      : fail("รูปแบบใบสมัครไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
  }

  const text = (key: string) => typeof form.get(key) === "string" ? (form.get(key) as string).trim() : "";
  if (text("website")) return fail("ไม่สามารถส่งใบสมัครได้ กรุณาติดต่อบริษัทโดยตรง");
  const position = careerPositions.find(job => job.id === text("position"));
  const fullName = text("fullName");
  const phone = text("phone");
  const email = text("email");
  const education = text("education");
  const experience = text("experience");
  const message = text("message");

  if (!position) return fail("กรุณาเลือกตำแหน่งที่เปิดรับสมัคร");
  if (fullName.length < 2 || fullName.length > 120 || /[\r\n]/.test(fullName)) return fail("กรุณากรอกชื่อ–นามสกุลให้ถูกต้อง");
  if (!/^[+0-9() .-]{9,30}$/.test(phone) || phone.replace(/\D/g, "").length < 9) return fail("กรุณากรอกเบอร์โทรศัพท์ที่ติดต่อได้");
  if (!email) return fail("กรุณากรอกอีเมลที่ติดต่อได้");
  if (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) return fail("กรุณาตรวจสอบรูปแบบอีเมล");
  if (education.length > 250 || experience.length > 3000 || message.length > 2000) return fail("รายละเอียดเกินความยาวที่กำหนด กรุณาย่อข้อมูลแล้วลองใหม่");
  if (text("consent") !== "yes") return fail("กรุณาอ่านและยืนยันการใช้ข้อมูลเพื่อพิจารณาสมัครงาน");

  const resume = form.get("resume");
  if (!(resume instanceof File) || resume.size === 0) return fail("กรุณาแนบเรซูเม่เป็นไฟล์ PDF ก่อนส่งใบสมัคร");
  if (resume.size > MAX_RESUME_BYTES) return fail("ไฟล์เรซูเม่ต้องมีขนาดไม่เกิน 5 MB", 413);
  if (!resume.name.toLowerCase().endsWith(".pdf") || (resume.type && resume.type !== "application/pdf")) return fail("กรุณาแนบเรซูเม่เป็นไฟล์ PDF");
  const attachment = Buffer.from(await resume.arrayBuffer());
  if (attachment.subarray(0, 5).toString("ascii") !== "%PDF-") return fail("ไฟล์แนบไม่ใช่ PDF ที่ถูกต้อง กรุณาเลือกไฟล์ใหม่");

  const port = Number(process.env.SMTP_PORT);
  if (!process.env.SMTP_HOST || !port || !process.env.SMTP_USER || !process.env.SMTP_PASS) return fail("ระบบรับใบสมัครยังไม่พร้อม กรุณาติดต่อ 034-446748 หรือ Inbox ของบริษัท", 503);

  // Lightweight per-instance throttling; no applicant information is retained here.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (ip) {
    const now = Date.now();
    for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
    const attempt = attempts.get(ip);
    if ((attempt && attempt.count >= 5) || attempts.size >= 10000) return fail("ส่งใบสมัครหลายครั้งในช่วงเวลาสั้น ๆ กรุณารอประมาณ 15 นาที หรือติดต่อบริษัทโดยตรง", 429);
    attempts.set(ip, { count: (attempt?.count ?? 0) + 1, expires: attempt?.expires ?? now + 15 * 60 * 1000 });
  }

  const rows = [
    ["ตำแหน่งที่สมัคร", position.title], ["ชื่อ–นามสกุล", fullName],
    ["เบอร์โทรศัพท์", phone], ["อีเมล", email],
    ["การศึกษา / สาขา", education || "ไม่ได้ระบุ"],
    ["ประสบการณ์และทักษะ", experience || "ไม่ได้ระบุ"],
    ["ข้อมูลเพิ่มเติม", message || "ไม่ได้ระบุ"],
    ["เรซูเม่", "แนบไฟล์ PDF"],
    ["การยืนยันใช้ข้อมูล", "ผู้สมัครยืนยันให้ใช้ข้อมูลเพื่อพิจารณาสมัครงานและติดต่อกลับ"],
  ];
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 15000, greetingTimeout: 15000, socketTimeout: 30000,
  });

  try {
    const result = await transport.sendMail({
      from: { name: "K.P. Plastic Careers", address: process.env.SMTP_USER },
      to: process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "k.p.plastic.co.ltd@gmail.com",
      replyTo: { name: fullName, address: email },
      subject: `สมัครงาน: ${position.title} - ${fullName}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: `<div style="font-family:Arial,sans-serif;color:#0f172a;max-width:760px;margin:auto"><h1 style="color:#047857">ใบสมัครงานจากเว็บไซต์</h1><table style="width:100%;border-collapse:collapse">${rows.map(([label, value]) => `<tr><th style="padding:12px;text-align:left;border-bottom:1px solid #e2e8f0;vertical-align:top">${escapeHtml(label)}</th><td style="padding:12px;border-bottom:1px solid #e2e8f0">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table></div>`,
      attachments: [{ filename: "resume.pdf", content: attachment, contentType: "application/pdf" }],
      disableFileAccess: true, disableUrlAccess: true,
    });
    if (!result.accepted?.length) throw new Error("delivery rejected");
    return Response.json({ message: "ส่งใบสมัครเรียบร้อยแล้ว" });
  } catch {
    console.error("Careers application email delivery failed");
    return fail("ส่งใบสมัครไม่สำเร็จ กรุณาลองอีกครั้ง หรือติดต่อ 034-446748 ข้อมูลของคุณยังไม่ถูกยืนยันว่าถึงบริษัท", 502);
  } finally {
    transport.close();
  }
}
