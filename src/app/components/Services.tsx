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
      image: "/services/ABS_A-95005.png",
      title: "ABS / A-95005",
      description:
        "",
    },
    {
      image: "/services/ABS_A-95008.png",
      title: "ABS / A-95008",
      description: "",
    },
    {
      image: "/services/ABS_A-Gray.png",
      title: "ABS / A-Gray",
      description: "",
    },
    {
      image: "/services/ABS_A-200.png",
      title: "ABS / A-200",
      description: "",
    },
    {
      image: "/services/ABS_A-001.png",
      title: "ABS / A-001",
      description: "",
    },
    {
      image: "/services/GPPS-004-2.png",
      title: "GPPS / 004-2",
      description: "",
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
            whileHover={{ y: -12, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="relative h-80 rounded-3xl overflow-hidden group 
                 bg-white/5 backdrop-blur-xl 
                 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-full h-full object-cover 
                   group-hover:scale-110 
                   transition duration-700 ease-out"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 
        bg-gradient-to-t 
        from-black/70 via-black/20 to-transparent 
        opacity-80 group-hover:opacity-90 transition"
            />

            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-3xl 
        bg-gradient-to-r from-emerald-400/20 via-transparent to-emerald-400/20 
        blur-xl opacity-0 group-hover:opacity-100 transition duration-500"
            />

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-xl font-semibold mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Hover Layer */}
            <div className="absolute inset-0 flex items-center justify-center 
        bg-black/70 backdrop-blur-lg 
        text-white p-6 opacity-0 
        group-hover:opacity-100 
        transition duration-500 z-20"
            >
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href="/services"
                  className="inline-block px-6 py-2.5 
                       bg-emerald-400 text-black 
                       text-sm rounded-full font-semibold 
                       hover:bg-emerald-300 
                       transition shadow-md"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-3xl 
        border border-white/10 
        group-hover:border-emerald-400/40 
        transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}