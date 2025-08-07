import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 sm:px-8 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* ฝั่งซ้าย: ข้อมูลติดต่อ */}
        <div className="md:col-span-5 p-10 animate-fadeIn">
          <ContactInfo />
        </div>

        {/* ฝั่งขวา: ฟอร์มติดต่อ */}
        <div className="md:col-span-7 p-10 animate-fadeIn">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
