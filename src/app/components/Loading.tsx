"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-white z-50 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-72 h-72 bg-emerald-300/30 rounded-full blur-3xl top-[-50px] left-[-50px]" />
      <div className="absolute w-72 h-72 bg-green-200/30 rounded-full blur-3xl bottom-[-50px] right-[-50px]" />
      
      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-[6px] border-emerald-100 border-t-emerald-500 border-b-emerald-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Loading Text */}
      <motion.p
        className="mt-6 text-emerald-700 font-medium text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        กำลังโหลด...
      </motion.p>

      {/* Animated Dots */}
      <div className="flex gap-2 mt-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-emerald-500 rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

    </div>
  );
}