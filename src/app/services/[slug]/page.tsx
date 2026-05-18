export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "../../components/categoryData";
import Breadcrumb from "../../components/Breadcrumb";

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
            <div className="relative aspect-[4/3] bg-slate-100">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <span className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
              {service.category}
            </span>
            <h1 className="text-4xl font-black leading-tight text-slate-950">{service.title}</h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{service.description}</p>

            <div className="mt-8 grid gap-3">
              {[
                "เหมาะสำหรับงานผลิตอุตสาหกรรม",
                "สามารถแจ้งสเปก สี และปริมาณที่ต้องการได้",
                "ทีมงานช่วยประสานข้อมูลสินค้าและการจัดส่ง",
              ].map((item) => (
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
                <ArrowRight className="h-5 w-5" />
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
