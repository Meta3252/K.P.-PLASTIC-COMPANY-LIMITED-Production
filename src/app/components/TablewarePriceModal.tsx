"use client";

import { useState } from "react";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";
import Link from "next/link";
import TablewarePriceList from "./TablewarePriceList";

export default function TablewarePriceModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="my-6 flex flex-col items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-emerald-900">ราคาจาน ชาม และทัพพี</p>
          <p className="mt-1 text-base text-slate-600">เลือกดูแบบและขนาด · 1 โหล = 12 ชิ้น</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          className="shrink-0 rounded-full bg-emerald-700 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          ดูราคาต่อโหล
        </button>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-[1500]">
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-6">
          <DialogPanel className="flex h-[calc(100dvh-1rem)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-auto sm:max-h-[90dvh] sm:rounded-3xl">
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-emerald-100 bg-emerald-50 p-5 sm:px-7 sm:py-6">
              <div>
                <DialogTitle className="text-xl font-bold text-emerald-950 sm:text-2xl">ราคาจาน ชาม และทัพพี</DialogTitle>
                <Description className="mt-2 text-base leading-7 text-slate-700">ราคาต่อโหล · 1 โหล = 12 ชิ้น</Description>
                <p className="mt-1 text-sm text-slate-600">เลือกดูแบบและขนาดที่ต้องการด้านล่าง</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="ปิดหน้าต่างราคา"
                data-autofocus
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-emerald-900 transition hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <TablewarePriceList embedded />
              <p className="px-5 pb-5 text-base leading-7 text-slate-600 sm:px-7">แจ้งชื่อสินค้า ขนาด สี และจำนวนโหลที่ต้องการ ทีมงานจะช่วยเช็กสินค้าและแจ้งค่าจัดส่งก่อนสั่งซื้อ</p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 border-t border-slate-200 bg-white p-4 sm:flex-row sm:justify-end sm:px-7">
              <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-slate-300 px-6 py-3 text-base font-bold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">กลับไปดูสินค้า</button>
              <Link href="/contact" onClick={() => setOpen(false)} className="rounded-full bg-emerald-700 px-6 py-3 text-center text-base font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">สอบถาม / สั่งซื้อ</Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
