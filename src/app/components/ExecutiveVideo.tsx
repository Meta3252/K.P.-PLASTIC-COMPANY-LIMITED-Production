"use client";

import Link from "next/link";
import { Leaf, PlayCircle, Quote } from "lucide-react";

type ExecutiveVideoProps = {
  variant?: "home" | "about";
};

const videoUrl = "https://www.youtube.com/embed/jAL4IO1kcyQ";

export default function ExecutiveVideo({ variant = "about" }: ExecutiveVideoProps) {
  const isHome = variant === "home";

  return (
    <section
      className={[
        "relative overflow-hidden px-6",
        isHome ? "bg-white py-20 md:px-24" : "py-4",
      ].join(" ")}
    >
      <div
        className={[
          "relative mx-auto grid max-w-7xl items-center gap-10",
          isHome ? "lg:grid-cols-[0.85fr_1.15fr]" : "lg:grid-cols-[0.9fr_1.1fr]",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-lime-200/30 blur-3xl" />

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
            <Leaf className="h-4 w-4" aria-hidden="true" />
            K.P. Plastic Company Limited
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              แนะนำผู้บริหาร
            </h2>
            <p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              รับชมมุมมอง วิสัยทัศน์ และแนวทางการดำเนินงานของบริษัท
              เพื่อให้ลูกค้าและคู่ค้าเข้าใจตัวตนของ K.P. PLASTIC
              ได้ชัดเจนยิ่งขึ้น
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {["คุณภาพสม่ำเสมอ", "ใส่ใจทุกขั้นตอน"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-white/80 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.14)]" />
                {item}
              </div>
            ))}
          </div>

          {isHome ? (
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-700"
            >
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              ดูเรื่องราวของเรา
            </Link>
          ) : null}
        </div>

        <div className="relative z-10">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-200 via-green-100 to-lime-100 opacity-80 blur-sm" />
          <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-3 shadow-2xl shadow-emerald-900/10">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-emerald-950">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={videoUrl}
                title="Executive introduction video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="relative mx-auto -mt-6 max-w-[90%] rounded-xl border border-emerald-100 bg-white px-5 py-4 shadow-xl shadow-emerald-900/10">
            <div className="flex gap-3">
              <Quote className="mt-1 h-5 w-5 flex-none text-emerald-600" aria-hidden="true" />
              <p className="text-sm leading-6 text-gray-600">
                ถ่ายทอดวิสัยทัศน์และแนวทางการดำเนินงานจากผู้บริหาร
                เพื่อสร้างความเชื่อมั่นให้ลูกค้าและคู่ค้าก่อนตัดสินใจเลือกใช้สินค้าและบริการของบริษัท
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
