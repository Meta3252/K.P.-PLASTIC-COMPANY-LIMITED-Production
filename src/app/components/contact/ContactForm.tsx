"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ArrowRight, CheckCircle2, Loader2, PackageSearch, XCircle } from "lucide-react";

type FormValues = {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  productType: string;
  quantity: string;
  deliveryArea: string;
  message: string;
};

const schema = Yup.object({
  companyName: Yup.string().required("กรุณากรอกชื่อบริษัท"),
  contactName: Yup.string().required("กรุณากรอกชื่อผู้ติดต่อ"),
  phone: Yup.string().required("กรุณากรอกเบอร์โทรศัพท์"),
  email: Yup.string().required("กรุณากรอกอีเมล").email("รูปแบบอีเมลไม่ถูกต้อง"),
  productType: Yup.string().required("กรุณาระบุชนิดเม็ดพลาสติกที่สนใจ"),
  quantity: Yup.string().required("กรุณาระบุปริมาณที่ต้องการ"),
  deliveryArea: Yup.string().required("กรุณาระบุพื้นที่จัดส่ง"),
  message: Yup.string().required("กรุณาระบุรายละเอียดเพิ่มเติม"),
});

const fields: Array<{
  name: keyof FormValues;
  label: string;
  placeholder: string;
  type?: string;
}> = [
  {
    name: "companyName",
    label: "ชื่อบริษัท / ร้านค้า",
    placeholder: "บริษัท เค.พี. พลาสติก จำกัด",
  },
  {
    name: "contactName",
    label: "ชื่อผู้ติดต่อ",
    placeholder: "ชื่อ-นามสกุล",
  },
  {
    name: "phone",
    label: "เบอร์โทรศัพท์",
    placeholder: "034-446748 หรือ 0812345678",
  },
  {
    name: "email",
    label: "อีเมล",
    placeholder: "name@company.com",
    type: "email",
  },
  {
    name: "productType",
    label: "ชนิดเม็ดพลาสติกที่สนใจ",
    placeholder: "เช่น PP, PE, ABS, HIPS หรือระบุเกรด/สี",
  },
  {
    name: "quantity",
    label: "ปริมาณที่ต้องการ",
    placeholder: "เช่น 500 กก., 1 ตัน, ใช้ประจำทุกเดือน",
  },
  {
    name: "deliveryArea",
    label: "พื้นที่จัดส่ง",
    placeholder: "จังหวัด / เขตโรงงาน / นิคมอุตสาหกรรม",
  },
];

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [modal, setModal] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const showModal = (type: "success" | "error", message: string) => {
    setModal({ show: true, type, message });
    window.setTimeout(() => {
      setModal((prev) => ({ ...prev, show: false }));
    }, 3500);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          inquiryType: "plastic-resin-quotation",
        }),
      });

      if (res.ok) {
        showModal("success", "ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็ว");
        reset();
      } else {
        showModal("error", "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
      }
    } catch {
      showModal("error", "ไม่สามารถเชื่อมต่อระบบส่งข้อมูลได้ในขณะนี้");
    }
  };

  return (
    <>
      <AnimatePresence>
        {modal.show && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl ring-1 ring-slate-200"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-3 flex justify-center">
                {modal.type === "success" ? (
                  <CheckCircle2 className="h-11 w-11 text-emerald-600" />
                ) : (
                  <XCircle className="h-11 w-11 text-red-500" />
                )}
              </div>
              <p className="text-base font-semibold text-slate-800">{modal.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-[0_24px_80px_rgba(15,118,110,0.14)] sm:p-8"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="absolute right-0 top-0 h-36 w-36 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-200/50 blur-2xl" />
        <div className="absolute bottom-10 left-0 h-28 w-28 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-2xl" />

        <div className="relative mb-7">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-emerald-100">
            <PackageSearch className="h-4 w-4" />
            ขอใบเสนอราคา
          </div>
          <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            แจ้งความต้องการเม็ดพลาสติก
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            กรอกข้อมูลสินค้า ปริมาณ และพื้นที่จัดส่ง เพื่อให้ทีมงานแนะนำเกรดเม็ดพลาสติกและประเมินราคาได้ตรงงานมากขึ้น
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="relative grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={field.name === "deliveryArea" ? "sm:col-span-2" : undefined}
              >
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  {field.label} <span className="text-emerald-600">*</span>
                </label>
                <input
                  {...register(field.name)}
                  type={field.type || "text"}
                  className={`w-full rounded-xl border bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 ${
                    errors[field.name] ? "border-red-400" : "border-slate-200"
                  }`}
                  placeholder={field.placeholder}
                />
                {errors[field.name] && (
                  <p className="mt-1.5 text-sm text-red-500">{errors[field.name]?.message}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.28 }}
          >
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              รายละเอียดเพิ่มเติม <span className="text-emerald-600">*</span>
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className={`w-full resize-none rounded-xl border bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 ${
                errors.message ? "border-red-400" : "border-slate-200"
              }`}
              placeholder="ระบุสี เกรดงานผลิต ตัวอย่างสินค้า หรือเงื่อนไขการจัดส่งที่ต้องการ"
            />
            {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
          </motion.div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-700/25 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                กำลังส่งข้อมูล
              </>
            ) : (
              <>
                ส่งข้อมูลให้ฝ่ายขาย
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;
