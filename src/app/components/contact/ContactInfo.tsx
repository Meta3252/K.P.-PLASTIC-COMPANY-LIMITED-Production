"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "บริษัท เค.พี. พลาสติก จำกัด",
    detail: "13/13 หมู่ที่ 9 ตำบลนาดี อำเภอเมืองสมุทรสาคร จังหวัดสมุทรสาคร 74000",
  },
  {
    icon: Phone,
    title: "โทรศัพท์",
    detail: "034-446748",
    href: "tel:034446748",
  },
  {
    icon: Mail,
    title: "อีเมล",
    detail: "k.p.plastic.co.ltd@gmail.com",
    href: "mailto:k.p.plastic.co.ltd@gmail.com",
  },
  {
    icon: Facebook,
    title: "Facebook",
    detail: "K.P. Plastic Company Limited",
    href: "https://www.facebook.com/people/%E0%B9%80%E0%B8%84%E0%B8%9E%E0%B8%B5%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/61577548353934/",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="relative">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-100">
          <Sparkles className="h-4 w-4" />
          ติดต่อทีมขาย
        </div>
        <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
          คุยกับเราเรื่องเม็ดพลาสติกที่ใช่สำหรับงานผลิตของคุณ
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
          แจ้งชนิดเม็ดพลาสติก ปริมาณ และพื้นที่จัดส่ง ทีมงานจะช่วยตรวจสอบสต็อก แนะนำเกรดที่เหมาะสม และติดต่อกลับพร้อมรายละเอียดที่นำไปใช้ตัดสินใจได้จริง
        </p>
      </motion.div>

      <div className="grid gap-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <motion.div
              className="group flex items-start gap-4 rounded-2xl border border-white/70 bg-white/85 p-5 shadow-sm shadow-emerald-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 transition group-hover:bg-emerald-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-base font-bold text-slate-900">{item.title}</span>
                <span className="mt-1 block text-sm leading-6 text-slate-600">{item.detail}</span>
              </span>
            </motion.div>
          );

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={item.title}>{content}</div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
