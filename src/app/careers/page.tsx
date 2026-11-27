import type { Metadata } from "next";
import { MapPin, Phone, BriefcaseBusiness } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import CareersApplication from "../components/careers/CareersApplication";

export const metadata: Metadata = {
  title: "ร่วมงานกับเรา | K.P. Plastic",
  description: "เปิดรับเจ้าหน้าที่ QA ช่างซ่อมบำรุง และเจ้าหน้าที่ธุรการ ตำแหน่งละ 1 อัตรา สมัครงานกับบริษัท เค.พี. พลาสติก จำกัด ผ่านเว็บไซต์ได้เลย",
};

export default function CareersPage() {
  return (
    <main lang="th" className="bg-slate-50 text-slate-900">
      <Breadcrumb />
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 px-4 pb-8 pt-12 text-white sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-wide text-emerald-300">โอกาสร่วมงานกับ K.P. PLASTIC</p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">ร่วมงานกับเรา</h1>
              <p className="mt-4 text-xl font-semibold leading-8 text-emerald-100 sm:text-2xl">เป็นส่วนหนึ่งของทีม เค.พี. พลาสติก</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">เรากำลังเปิดรับเพื่อนร่วมทีมด้านประกันคุณภาพ ซ่อมบำรุง และธุรการ เลือกตำแหน่งที่ใช่ แล้วส่งใบสมัครถึงเราได้เลย</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="#open-positions" className="rounded-xl bg-emerald-400 px-6 py-3.5 text-center text-base font-bold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">ดูตำแหน่งที่เปิดรับ</a>
              <a href="#application" className="rounded-xl border border-slate-500 px-6 py-3.5 text-center text-base font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">กรอกใบสมัครออนไลน์</a>
            </div>
          </div>
          <div className="mt-10 grid gap-5 border-t border-white/15 pt-6 text-base sm:grid-cols-3 sm:gap-6">
            <div className="flex items-start gap-3"><BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" /><div><p className="font-bold">เปิดรับ 3 ตำแหน่ง</p><p className="mt-1 text-sm text-slate-300">ตำแหน่งละ 1 อัตรา</p></div></div>
            <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" /><div><p className="font-bold">สมุทรสาคร</p><p className="mt-1 text-sm leading-6 text-slate-300">ต.นาดี อ.เมืองสมุทรสาคร</p></div></div>
            <div className="flex items-start gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" /><div><p className="text-sm text-slate-300">สอบถามการสมัครงาน</p><a href="tel:034446748" className="mt-1 inline-block font-bold text-white underline-offset-4 hover:underline">034-446748</a></div></div>
          </div>
        </div>
      </section>
      <CareersApplication />
    </main>
  );
}
