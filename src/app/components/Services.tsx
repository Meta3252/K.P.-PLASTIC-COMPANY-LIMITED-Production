"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Services() {
  const services = [
    {
      image: "/services/High-qualityplastic.jpg",
      title: "จำหน่ายเม็ดพลาสติกคุณภาพ",
      description:
        "จัดจำหน่ายเม็ดพลาสติกหลากหลายประเภท รองรับงานอุตสาหกรรม",
    },
    {
      image: "/services/Supply_plastic_pellets.jpg",
      title: "จัดหาวัตถุดิบตามความต้องการ",
      description: "สามารถจัดหาเม็ดพลาสติกตามสเปคเฉพาะทาง",
    },
    {
      image: "/services/Fast_delivery_service.jpg",
      title: "บริการจัดส่งรวดเร็ว",
      description: "รองรับออเดอร์เร่งด่วน ลด downtime การผลิต",
    },
    {
      image: "/services/Consulting.jpg",
      title: "ให้คำปรึกษาด้านวัสดุ",
      description: "ช่วยเลือกวัสดุให้เหมาะ ลดต้นทุน",
    },
    {
      image: "/services/Orders_of_all_sizes.jpg",
      title: "รองรับออเดอร์ทุกขนาด",
      description: "ยืดหยุ่นทั้งโรงงานเล็กและใหญ่",
    },
    {
      image: "/services/Quality_control.jpg",
      title: "ควบคุมคุณภาพสินค้า",
      description: "ตรวจสอบก่อนส่งมอบทุกครั้ง",
    },
  ];

  return (
    <section
      className="relative py-28 px-6 md:px-20 text-gray-800 overflow-hidden"
      style={{
        backgroundImage: "url('/services/serviceper1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay เขียว */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/60 to-white/90"></div>

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/20 blur-3xl rounded-full"></div>

      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative max-w-7xl mx-auto text-center mb-20 z-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          บริการของเรา
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-300 mx-auto my-4 rounded-full"
        />

        <motion.p
          variants={fadeUp}
          className="text-lg text-emerald-100 max-w-xl mx-auto"
        >
          เรามุ่งมั่นส่งมอบเม็ดพลาสติกคุณภาพ พร้อมบริการที่ตอบโจทย์ทุกภาคอุตสาหกรรม
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10"
      >
        {services.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative h-80 rounded-2xl overflow-hidden group shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay เขียว */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/50 to-transparent group-hover:from-emerald-900/90 transition"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-emerald-100">
                {item.description}
              </p>
            </div>

            {/* Hover Layer */}
            <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/90 text-white p-6 opacity-0 group-hover:opacity-100 transition duration-500 z-20 backdrop-blur-md">
              <div className="text-center space-y-4">
                <p className="text-sm text-emerald-100">
                  {item.description}
                </p>

                <Link
                  href="/services"
                  className="inline-block px-5 py-2 bg-white text-emerald-700 text-sm rounded-full font-medium hover:bg-emerald-100 transition"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-emerald-300/50 transition"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}