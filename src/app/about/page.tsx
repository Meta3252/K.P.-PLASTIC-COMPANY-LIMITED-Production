"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Animation
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-gray-800 px-6 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-3xl"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto space-y-24 relative z-10"
      >

        {/* Header */}
        <motion.section variants={fadeUp} className="text-center space-y-5">
          <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm">
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            เกี่ยวกับเรา
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto rounded-full"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            K.P. PLASTIC COMPANY LIMITED คือผู้จัดจำหน่ายเม็ดพลาสติกคุณภาพ
            ที่มุ่งเน้นการส่งมอบวัตถุดิบที่ได้มาตรฐาน เพื่อสนับสนุนกระบวนการผลิตของลูกค้าอย่างมีประสิทธิภาพ
          </p>
        </motion.section>

        {/* Stats */}
        <motion.section
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "ลูกค้า", value: "100+" },
            { label: "ประสบการณ์", value: "10+ ปี" },
            { label: "สินค้า", value: "50+" },
            { label: "ความพึงพอใจ", value: "99%" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
            >
              <p className="text-3xl font-bold text-emerald-600">
                {item.value}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* About */}
        <motion.section
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl group">
            <img
              src="/images/about/1.jpg"
              className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">
              บริษัท เค.พี.พลาสติก จำกัด
            </h2>

            <p className="text-gray-600 leading-relaxed">
              เราเป็นผู้จำหน่ายเม็ดพลาสติกสำหรับอุตสาหกรรมการผลิต โดยเน้นคุณภาพ ความตรงเวลา และความเหมาะสมในการใช้งาน
            </p>

            <p className="text-gray-600 leading-relaxed">
              เราพร้อมให้คำแนะนำเพื่อช่วยลดต้นทุน เพิ่มประสิทธิภาพ และสร้างความมั่นใจในทุกกระบวนการผลิต
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              {[
                "เม็ดพลาสติกคุณภาพ",
                "ส่งไว ตรงเวลา",
                "ที่ปรึกษามืออาชีพ",
                "รองรับอุตสาหกรรม",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/70 backdrop-blur-md rounded-xl px-4 py-3 text-sm text-emerald-700 shadow hover:shadow-xl transition-all"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Glass Section */}
        <motion.section
          variants={fadeUp}
          className="relative rounded-3xl bg-white/60 backdrop-blur-xl border border-emerald-100 p-10 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-3xl"></div>

          <div className="relative z-10 text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              ทำไมต้องเลือกเรา
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              เราให้ความสำคัญทั้งคุณภาพสินค้า ความรวดเร็ว และความเข้าใจในธุรกิจของลูกค้า
            </p>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              {["คุณภาพสูง", "จัดส่งตรงเวลา", "บริการมืออาชีพ"].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl py-3 shadow text-emerald-700 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section variants={fadeUp} className="space-y-10">
          <h2 className="text-2xl font-semibold text-center text-gray-900">
            พันธกิจของเรา
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-400 mx-auto rounded-full"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "คุณภาพ", description: "คัดสรรสินค้ามาตรฐานสูง" },
              { title: "ความรวดเร็ว", description: "บริการรวดเร็ว ตรงเวลา" },
              { title: "ความยั่งยืน", description: "สร้างความสัมพันธ์ระยะยาว" },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -12, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-emerald-100"
              >
                <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section variants={fadeUp} className="text-center space-y-6 relative">
          <h2 className="text-2xl font-semibold text-gray-900">
            มาร่วมเป็นส่วนหนึ่งกับเรา
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            พร้อมให้บริการและเติบโตไปกับธุรกิจของคุณ
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full 
            bg-gradient-to-r from-emerald-600 to-green-500 
            text-white font-medium shadow-lg 
            transition-all duration-500 ease-out
            hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            ติดต่อเรา
          </Link>

          {/* Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-40 h-10 bg-emerald-400/30 blur-2xl rounded-full"></div>
        </motion.section>

      </motion.div>
    </div>
  );
}