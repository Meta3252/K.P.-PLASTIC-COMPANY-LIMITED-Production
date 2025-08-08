import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    company,
    contactName,
    phone,
    email,
    interestedSystem,
    employeeCount,
    currentSystem,
    message,
  } = req.body;

  // สร้าง transporter สำหรับ Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // smtp.gmail.com
    port: Number(process.env.SMTP_PORT), // 465
    secure: true, // ใช้ SSL สำหรับ port 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`, // ส่งจากอีเมลของคุณเอง
      replyTo: email, // ถ้ากดตอบกลับ จะไปที่อีเมลลูกค้า
      to: process.env.SMTP_USER, // รับเมลที่อีเมลของคุณเอง
      subject: `Contact Form Submission from ${contactName}`,
      text: `
Company: ${company}
Contact Name: ${contactName}
Phone: ${phone}
Email: ${email}
Interested System: ${interestedSystem}
Employee Count: ${employeeCount}
Current System: ${currentSystem}
Message: ${message}
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
