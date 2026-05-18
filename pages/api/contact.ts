import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  companyName?: string;
  company?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  productType?: string;
  quantity?: string;
  deliveryArea?: string;
  message?: string;
  inquiryType?: string;
};

const requiredFields: Array<keyof ContactRequestBody> = [
  "contactName",
  "phone",
  "email",
  "message",
];

const escapeHtml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = req.body as ContactRequestBody;
  const missingField = requiredFields.find((field) => !body[field]);

  if (missingField) {
    return res.status(400).json({ message: `Missing required field: ${missingField}` });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({ message: "Email service is not configured" });
  }

  const companyName = body.companyName || body.company || "-";
  const recipient = process.env.CONTACT_TO_EMAIL || "k.p.plastic.co.ltd@gmail.com";
  const subjectPrefix =
    body.inquiryType === "plastic-resin-quotation" ? "ขอใบเสนอราคา" : "ติดต่อจากเว็บไซต์";

  const rows = [
    ["บริษัท / ร้านค้า", companyName],
    ["ชื่อผู้ติดต่อ", body.contactName],
    ["เบอร์โทรศัพท์", body.phone],
    ["อีเมล", body.email],
    ["ชนิดเม็ดพลาสติกที่สนใจ", body.productType || "-"],
    ["ปริมาณที่ต้องการ", body.quantity || "-"],
    ["พื้นที่จัดส่ง", body.deliveryArea || "-"],
    ["รายละเอียดเพิ่มเติม", body.message],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value || "-"}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#0f172a;width:220px;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;color:#334155;">${escapeHtml(value || "-").replace(/\n/g, "<br />")}</td>
        </tr>`
    )
    .join("");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"K.P. Plastic Website" <${process.env.SMTP_USER}>`,
      replyTo: body.email,
      to: recipient,
      subject: `${subjectPrefix} - ${body.contactName || "ลูกค้า"} (${companyName})`,
      text,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px;">
          <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">
            <div style="background:#059669;color:#ffffff;padding:22px 26px;">
              <h1 style="margin:0;font-size:22px;">${escapeHtml(subjectPrefix)}</h1>
              <p style="margin:6px 0 0;color:#d1fae5;">ข้อมูลจากแบบฟอร์มเว็บไซต์ K.P. Plastic</p>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              ${htmlRows}
            </table>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
