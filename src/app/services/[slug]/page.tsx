export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "../../components/categoryData";
import Breadcrumb from "../../components/Breadcrumb";
import TablewarePriceModal from "../../components/TablewarePriceModal";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.link.endsWith(slug));

  if (!service) {
    return (
      <main className="bg-slate-50">
        <Breadcrumb />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl font-black text-slate-950">ไม่พบสินค้าที่ต้องการ</h1>
          <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-emerald-700">
            <ArrowLeft className="h-4 w-4" />
            กลับไปหน้าสินค้าและบริการ
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      <Breadcrumb />
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-emerald-950/10">
            <div className={`relative bg-white ${service.isNew ? 'aspect-square' : 'aspect-[4/3]'}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {service.originalImage && (
              <div className="border-t border-slate-100 p-5">
                <p className="mb-3 text-sm text-slate-500">ภาพหลักจัดทำด้วย AI จากภาพสินค้าอ้างอิง สีและรายละเอียดอาจแตกต่างเล็กน้อย</p>
                <details>
                  <summary className="cursor-pointer text-base font-bold text-emerald-700">ดูภาพถ่ายสินค้าจริง</summary>
                  <a href={service.originalImage} target="_blank" rel="noreferrer" className="mt-4 block">
                    <Image src={service.originalImage} alt={`ภาพถ่ายจริงประกอบ ${service.title}`} width={1100} height={1000} className="h-auto w-full rounded-xl" />
                  </a>
                </details>
              </div>
            )}
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <span className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
              {service.category}
            </span>
            <h1 className="text-4xl font-black leading-tight text-slate-950">{service.title}</h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{service.description}</p>
            {service.isNew && (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
                <p className="text-3xl font-black text-emerald-800">{service.price ? `${service.price.toLocaleString('th-TH')} บาท / ตัว` : service.hasTablewarePrices ? 'ราคาตามรุ่นและขนาด' : 'สอบถามราคา'}</p>
                <p className="mt-2 text-base text-slate-600">สี{service.color} · สอบถามขนาด จำนวน และค่าจัดส่งกับทีมงาน</p>
              </div>
            )}

            {service.hasTablewarePrices && <TablewarePriceModal />}

            <div className="mt-8 grid gap-3">
              {(service.details ?? [
                "เหมาะสำหรับงานผลิตอุตสาหกรรม",
                "สามารถแจ้งสเปก สี และปริมาณที่ต้องการได้",
                "ทีมงานช่วยประสานข้อมูลสินค้าและการจัดส่ง",
              ]).map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>

            {service.content && (
              <div className="mt-8 rounded-2xl border border-slate-100 bg-emerald-50/60 p-5 text-sm leading-7 text-slate-700">
                {service.content}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                สอบถาม / ขอใบเสนอราคา
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <ArrowLeft className="h-5 w-5" />
                กลับไปหน้าสินค้า
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
