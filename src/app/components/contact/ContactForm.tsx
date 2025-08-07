"use client";

import React from "react";
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
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    alert("✅ ส่งข้อมูลเรียบร้อยแล้ว!");
    console.log(data);
    reset(); // Clear form
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl max-w-4xl w-full mx-auto animate-fadeIn transition-all duration-500">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">ติดต่อเรา</h2>
        <p className="text-sm text-gray-500">
          คำตอบและข้อมูลของคุณจะช่วยให้เราทราบความต้องการของคุณได้ชัดเจนยิ่งขึ้น<br />
          เจ้าหน้าที่ของเราจะตอบกลับภายใน 48 ชั่วโมง หากท่านยังไม่ได้รับการติดต่อ
          กรุณาติดต่อเราโดยตรงที่เบอร์
        </p>
        <p><span className="font-semibold text-blue-600">02-125-2019,093-328-7455</span></p>
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
            <label className="block text-sm font-medium text-gray-700">{field.label}</label>
            <input
              {...register(field.name as keyof FormValues)}
              className="input-style"
              placeholder={field.placeholder}
            />
            {errors[field.name as keyof FormValues] && (
              <p className="error-msg">{errors[field.name as keyof FormValues]?.message}</p>
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
            className="input-style"
            placeholder="เขียนข้อความของคุณที่นี่..."
          />
          {errors.message && <p className="error-msg">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          ส่งข้อมูล
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
