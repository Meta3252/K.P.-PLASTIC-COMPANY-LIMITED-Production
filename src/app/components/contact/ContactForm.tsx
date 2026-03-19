"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormValues = {
  company: string;
  contactName: string;
  phone: string;
  email: string;
  interestedSystem: string;
  employeeCount: string;
  currentSystem: string;
  message: string;
};

const schema = Yup.object().shape({
  company: Yup.string().required("กรุณากรอกที่อยู่ของบริษัท"),
  contactName: Yup.string().required("กรุณากรอกชื่อผู้ติดต่อ"),
  phone: Yup.string().required("กรุณากรอกเบอร์โทร"),
  email: Yup.string()
    .required("กรุณากรอกอีเมล")
    .email("รูปแบบอีเมลไม่ถูกต้อง"),
  interestedSystem: Yup.string().required("กรุณาระบุระบบที่สนใจ"),
  employeeCount: Yup.string().required("กรุณาระบุจำนวนพนักงาน"),
  currentSystem: Yup.string().required("กรุณาระบุระบบที่ใช้อยู่"),
  message: Yup.string().required("กรุณากรอกข้อความ"),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // สเตทจัดการ modal
  const [modal, setModal] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  // ฟังก์ชันแสดง modal แล้วซ่อนอัตโนมัติ
  const showModal = (type: "success" | "error", message: string) => {
    setModal({ show: true, type, message });
    setTimeout(() => {
      setModal((prev) => ({ ...prev, show: false }));
    }, 3500);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      // ส่งข้อมูลไป API /api/contact
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        showModal("success", "✅ ส่งข้อมูลเรียบร้อยแล้ว!");
        reset();
      } else {
        showModal("error", "❌ เกิดข้อผิดพลาดในการส่งข้อมูล");
      }
    } catch {
      showModal("error", "❌ เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  };

  return (
    <>
      {/* Modal Overlay */}
      {modal.show && (
        <div
          className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <div
            className={`bg-white bg-opacity-90 rounded-lg p-6 max-w-sm w-full text-center shadow-lg animate-fadeInDown`}
            style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
          >
            <p
              className={`text-lg font-semibold ${modal.type === "success" ? "text-green-600" : "text-red-600"
                }`}
            >
              {modal.message}
            </p>
          </div>
        </div>
      )}



      {/* Form */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl max-w-4xl w-full mx-auto animate-fadeIn transition-all duration-500">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">ติดต่อเรา</h2>
          <p className="text-sm text-gray-500">
            คำตอบและข้อมูลของคุณจะช่วยให้เราทราบความต้องการของคุณได้ชัดเจนยิ่งขึ้น
            <br />
            เจ้าหน้าที่ของเราจะตอบกลับภายใน 48 ชั่วโมง หากท่านยังไม่ได้รับการติดต่อ
            กรุณาติดต่อเราโดยตรงที่เบอร์
          </p>
          <p>
            <span className="font-semibold text-green-600">
              -
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {[
            {
              name: "company",
              label: "ที่อยู่ของบริษัท *",
              placeholder: "กรอกที่อยู่ของบริษัทคุณ",
            },
            {
              name: "contactName",
              label: "ชื่อผู้ติดต่อ *",
              placeholder: "ชื่อ-นามสกุล",
            },
            {
              name: "phone",
              label: "เบอร์โทรสำหรับติดต่อกลับ *",
              placeholder: "0812345678",
            },
            {
              name: "email",
              label: "Email *",
              placeholder: "example@email.com",
            },
            {
              name: "interestedSystem",
              label: "ระบบที่ท่านสนใจ *",
              placeholder: "ชื่อระบบที่สนใจ",
            },
            {
              name: "employeeCount",
              label: "จำนวนพนักงานของท่าน *",
              placeholder: "เช่น 50-100 คน",
            },
            {
              name: "currentSystem",
              label: "ระบบที่ทำอยู่ปัจจุบัน *",
              placeholder: "ระบุระบบเดิมที่ใช้อยู่",
            },
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                {...register(field.name as keyof FormValues)}
                className={`input-style border ${errors[field.name as keyof FormValues]
                  ? "border-red-500"
                  : "border-gray-300"
                  } rounded-md px-3 py-2 w-full`}
                placeholder={field.placeholder}
              />
              {errors[field.name as keyof FormValues] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name as keyof FormValues]?.message}
                </p>
              )}
            </div>
          ))}

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Comment or Message *
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className={`input-style border ${errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md px-3 py-2 w-full`}
              placeholder="เขียนข้อความของคุณที่นี่..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "กำลังส่งข้อมูล..." : "ส่งข้อมูล"}
          </button>
        </form>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease forwards;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
