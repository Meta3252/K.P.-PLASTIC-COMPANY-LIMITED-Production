"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Listbox } from "@headlessui/react";
import { ClipboardCheck, Wrench, FileText, Loader2, CheckCircle2, Check, ChevronDown } from "lucide-react";
import { careerPositions, MAX_RESUME_BYTES } from "../../../lib/careers";

const icons = [ClipboardCheck, Wrench, FileText];
const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-100 disabled:bg-slate-100";

export default function CareersApplication() {
  const [position, setPosition] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const selectRef = useRef<HTMLButtonElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const submitting = useRef(false);

  const choosePosition = (id: string) => {
    setPosition(id);
    setSubmitted(false);
    requestAnimationFrame(() => {
      selectRef.current?.focus({ preventScroll: true });
      formRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    });
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    const data = new FormData(event.currentTarget);
    const resume = data.get("resume");
    setError("");
    if (!position) {
      setError("กรุณาเลือกตำแหน่งที่ต้องการสมัคร");
      selectRef.current?.focus();
      return;
    }
    if (!(resume instanceof File) || resume.size === 0) {
      setError("กรุณาแนบเรซูเม่เป็นไฟล์ PDF ก่อนส่งใบสมัคร");
      return;
    }
    if (resume.size > MAX_RESUME_BYTES || !resume.name.toLowerCase().endsWith(".pdf")) {
      setError("กรุณาแนบเรซูเม่เป็นไฟล์ PDF ขนาดไม่เกิน 5 MB");
      return;
    }
    submitting.current = true;
    setPending(true);
    try {
      const response = await fetch("/api/careers", { method: "POST", body: data });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.message || "ส่งใบสมัครไม่สำเร็จ กรุณาลองอีกครั้ง หรือติดต่อ 034-446748");
      setSubmitted(true);
      formRef.current?.reset();
      setPosition("");
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch (err) {
      setError(err instanceof Error ? err.message : "ไม่สามารถเชื่อมต่อได้ กรุณาลองอีกครั้ง");
    } finally {
      submitting.current = false;
      setPending(false);
    }
  };

  return (
    <>
      <section id="open-positions" className="scroll-mt-32 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black sm:text-3xl">ค้นหาตำแหน่งที่เหมาะกับคุณ</h2>
            <p className="mt-3 text-base leading-8 text-slate-600">เลือกตำแหน่งด้านล่างเพื่อเริ่มสมัคร หากต้องการทราบรายละเอียดงาน คุณสมบัติ หรือค่าตอบแทน สามารถสอบถามทีมงานได้เลย</p>
          </div>
          <div className="mt-7 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
            {careerPositions.map((job, index) => {
              const Icon = icons[index];
              return (
                <article key={job.id} className="flex flex-col gap-5 bg-white p-5 transition hover:bg-emerald-50/40 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 rounded-xl bg-emerald-50 p-3 text-emerald-700"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                    <div><h3 className="text-xl font-bold sm:text-2xl">{job.title}</h3><p className="mt-1 text-base text-slate-500">{job.subtitle}</p></div>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:gap-8">
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">รับ {job.openings} อัตรา</span>
                    <button type="button" disabled={pending} onClick={() => choosePosition(job.id)} className="rounded-xl bg-emerald-700 px-5 py-3 text-base font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:opacity-50" aria-label={`สมัครตำแหน่ง${job.title}`}>สมัครตำแหน่งนี้</button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="application" className="scroll-mt-32 border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black sm:text-3xl">สมัครงานออนไลน์</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">ส่งข้อมูลและประวัติของคุณถึงบริษัทโดยตรง ทีมงานจะพิจารณาใบสมัครและติดต่อกลับตามช่องทางที่แจ้งไว้</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start lg:gap-12">
          <aside className="order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold">ขั้นตอนการสมัคร</h3>
            <ol className="mt-5 space-y-5 text-base leading-7 text-slate-600">
              <li><strong className="block text-emerald-800">เลือกตำแหน่งที่สนใจ</strong>สมัครได้จาก 3 ตำแหน่งที่กำลังเปิดรับ</li>
              <li><strong className="block text-emerald-800">กรอกข้อมูลและแนบประวัติ</strong>ต้องแนบเรซูเม่ PDF ขนาดไม่เกิน 5 MB</li>
              <li><strong className="block text-emerald-800">รอการติดต่อจากทีมงาน</strong>ตรวจสอบเบอร์โทรและอีเมลให้ถูกต้องก่อนส่ง</li>
            </ol>
            </div>
            <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-base leading-7"><p className="font-bold text-emerald-900">ต้องการความช่วยเหลือ?</p><a href="tel:034446748" className="mt-2 inline-block font-bold text-emerald-800 underline underline-offset-4">โทร 034-446748</a><p className="mt-2 text-slate-600">หรือทัก Inbox ผ่าน <a href="https://www.facebook.com/people/%E0%B9%80%E0%B8%84%E0%B8%9E%E0%B8%B5%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/61577548353934/" target="_blank" rel="noreferrer" className="text-emerald-800 underline underline-offset-4">Facebook ของบริษัท</a></p></div>
          </aside>

          <div className="order-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:order-2">
            {submitted ? (
              <div ref={statusRef} role="status" tabIndex={-1} className="rounded-2xl bg-emerald-50 p-6 outline-none">
                <CheckCircle2 className="h-10 w-10 text-emerald-700" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-bold text-emerald-950">ส่งใบสมัครเรียบร้อยแล้ว</h3>
                <p className="mt-3 text-base leading-8 text-slate-700">ขอบคุณที่สนใจร่วมงานกับ K.P. Plastic ทีมงานจะพิจารณาข้อมูลและติดต่อกลับตามช่องทางที่คุณแจ้งไว้</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-5 rounded-full border border-emerald-700 px-5 py-3 text-base font-bold text-emerald-800 hover:bg-emerald-100">กลับไปที่แบบฟอร์ม</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={submit} aria-label="แบบฟอร์มสมัครงาน" aria-busy={pending} className="scroll-mt-32">
                <div className="mb-6 border-b border-slate-100 pb-5"><h3 className="text-xl font-bold">แบบฟอร์มสมัครงาน</h3><p className="mt-2 text-sm leading-7 text-slate-500">กรอกข้อมูลให้ครบถ้วนในช่องที่มีเครื่องหมาย *</p></div>
                <fieldset disabled={pending} className="grid min-w-0 gap-5 sm:grid-cols-2">
                  <legend className="sr-only">ข้อมูลผู้สมัคร</legend>
                  <h4 className="text-base font-bold text-emerald-800 sm:col-span-2">ตำแหน่งและข้อมูลติดต่อ</h4>
                  <div className="sm:col-span-2">
                    <Listbox value={position} onChange={setPosition} name="position" disabled={pending}>
                      <Listbox.Label className="block text-base font-bold">ตำแหน่งที่ต้องการสมัคร *</Listbox.Label>
                      <div className="relative mt-2">
                        <Listbox.Button ref={selectRef} id="career-position" className="flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-left text-base text-emerald-950 outline-none transition hover:border-emerald-400 hover:bg-emerald-50 focus-visible:border-emerald-600 focus-visible:ring-4 focus-visible:ring-emerald-100 disabled:opacity-60">
                          <span className={position ? "font-semibold" : "text-slate-500"}>{careerPositions.find(job => job.id === position)?.title || "เลือกตำแหน่งที่สนใจ"}</span>
                          <ChevronDown className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                        </Listbox.Button>
                        <Listbox.Options className="absolute left-0 right-0 z-20 mt-2 max-h-72 overflow-auto rounded-xl border border-emerald-100 bg-white p-1.5 shadow-xl shadow-emerald-950/10 focus:outline-none">
                          {careerPositions.map(job => (
                            <Listbox.Option key={job.id} value={job.id} className={({ active, selected }) => `flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-3 text-base transition ${active ? "bg-emerald-700 text-white" : selected ? "bg-emerald-50 text-emerald-900" : "text-slate-700"}`}>
                              {({ active, selected }) => <><span><span className="block font-semibold">{job.title}</span><span className={`mt-0.5 block text-sm ${active ? "text-emerald-100" : "text-slate-500"}`}>{job.subtitle} · รับ {job.openings} อัตรา</span></span>{selected && <Check className="h-5 w-5 shrink-0" aria-hidden="true" />}</>}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>
                  <label className="block text-base font-bold sm:col-span-2" htmlFor="career-name">ชื่อ–นามสกุล *<input id="career-name" name="fullName" autoComplete="name" required minLength={2} maxLength={120} className={inputClass} /></label>
                  <label className="block text-base font-bold" htmlFor="career-phone">เบอร์โทรศัพท์ *<input id="career-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required minLength={9} maxLength={30} title="กรอกเบอร์โทรศัพท์ที่ติดต่อได้ เช่น 0812345678" className={inputClass} /></label>
                  <label className="block text-base font-bold" htmlFor="career-email">อีเมล *<input id="career-email" name="email" type="email" autoComplete="email" required maxLength={254} className={inputClass} /></label>
                  <h4 className="mt-2 border-t border-slate-100 pt-6 text-base font-bold text-emerald-800 sm:col-span-2">ประวัติและประสบการณ์</h4>
                  <label className="block text-base font-bold sm:col-span-2" htmlFor="career-education">การศึกษา / สาขาที่เรียน<input id="career-education" name="education" maxLength={250} className={inputClass} placeholder="ระบุวุฒิการศึกษาและสาขา" /></label>
                  <label className="block text-base font-bold sm:col-span-2" htmlFor="career-experience">ประสบการณ์และทักษะ<textarea id="career-experience" name="experience" rows={4} maxLength={3000} className={inputClass} placeholder="เล่าประสบการณ์ทำงานหรือทักษะที่เกี่ยวข้อง หากยังไม่มีประสบการณ์ สามารถระบุได้ที่นี่" /></label>
                  <label className="block text-base font-bold sm:col-span-2" htmlFor="career-message">ข้อมูลเพิ่มเติม<textarea id="career-message" name="message" rows={3} maxLength={2000} className={inputClass} placeholder="เช่น วันที่สะดวกเริ่มงาน หรือช่วงเวลาที่สะดวกให้ติดต่อกลับ" /></label>
                  <div className="mt-2 border-t border-slate-100 pt-6 sm:col-span-2">
                    <label htmlFor="career-resume" className="block text-base font-bold">แนบเรซูเม่ *</label>
                    <input id="career-resume" name="resume" type="file" required accept="application/pdf,.pdf" aria-describedby="resume-help" className="mt-3 block w-full min-w-0 rounded-xl border border-dashed border-emerald-200 bg-emerald-50/40 p-4 text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-emerald-100 file:px-4 file:py-2 file:text-sm file:font-bold file:text-emerald-800" />
                    <p id="resume-help" className="mt-2 text-sm leading-7 text-slate-600">ไฟล์ PDF ขนาดไม่เกิน 5 MB แนบเฉพาะประวัติการศึกษาและการทำงาน</p>
                  </div>
                  <div className="hidden" aria-hidden="true"><label htmlFor="career-website">Website</label><input id="career-website" name="website" autoComplete="off" tabIndex={-1} /></div>
                  <label className="flex items-start gap-3 text-base leading-7 text-slate-700 sm:col-span-2"><input type="checkbox" name="consent" value="yes" required className="mt-1 h-5 w-5 shrink-0 accent-emerald-700" /><span>ฉันได้อ่าน<Link href="/policy" target="_blank" className="mx-1 font-bold text-emerald-800 underline">นโยบายความเป็นส่วนตัว</Link>และยินยอมให้บริษัทใช้ข้อมูลที่ส่งมาเพื่อพิจารณาสมัครงานและติดต่อกลับ *</span></label>
                </fieldset>
                {error && <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-base leading-7 text-red-800">{error}</p>}
                <button type="submit" disabled={pending} className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-700 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-wait disabled:opacity-60">{pending && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}{pending ? "กำลังส่งใบสมัคร…" : "ส่งใบสมัครงาน"}</button>
                <p className="mt-3 text-center text-sm leading-7 text-slate-500">ข้อมูลจะส่งถึงบริษัทเพื่อใช้ในการพิจารณาสมัครงาน</p>
              </form>
            )}
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
