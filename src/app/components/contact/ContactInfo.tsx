import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLine,
} from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">ข้อมูลเพิ่มเติม</h1>
        <p className="text-gray-600 leading-relaxed p-1 pb-5">
          หากคุณมีคำถาม ข้อเสนอแนะ หรือต้องการร่วมงานกับเรา เรายินดีรับฟังทุกความคิดเห็น
          <br />
          คำตอบและข้อมูลของคุณจะช่วยให้เราทราบความต้องการของคุณได้ชัดเจนยิ่งขึ้น
          <br />
          เจ้าหน้าที่ของเราจะตอบกลับภายใน 48 ชั่วโมง หากไม่ได้รับการติดต่อสามารถโทรหาเราได้ที่หมายเลขด้านล่าง
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
          <div>
            <p className="text-lg font-semibold">บริษัท บีซัสเทน จำกัด</p>
            <p>69/357 หมู่ 10 ต.บางเลน อ.บางใหญ่ จ.นนทบุรี 11140</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
          <div>
            <p className="text-lg font-semibold">โทรศัพท์</p>
            <p>02-125-2019 , 093-328-7455</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <FaEnvelope className="text-blue-600 text-xl mt-1" />
          <div>
            <p className="text-lg font-semibold">E-mail</p>
            <p>marketing@besustain.co.th</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <div className="text-blue-600 text-xl mt-1">
            <FaFacebookF />
          </div>
          <div>
            <p className="text-lg font-semibold">Facebook</p>
            <a
              href="https://www.facebook.com/BeSustainconsult/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Facebook Page
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <div className="text-green-600 text-xl mt-1">
            <FaLine />
          </div>
          <div>
            <p className="text-lg font-semibold">LINE Official Account</p>
            <a
              href="https://page.line.me/214qwlfq?openQrModal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              @besustain
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
