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
          <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
          <div>
            <p className="text-lg font-semibold">บริษัท เค.พี.พลาสติก จำกัด</p>
            <p>13/13 หมู่ที่ 9 ตำบลนาดี อำเภอเมืองสมุทรสาคร จ.สมุทรสาคร 74000</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <FaPhoneAlt className="text-green-600 text-xl mt-1" />
          <div>
            <p className="text-lg font-semibold">โทรศัพท์</p>
            <p>-</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <FaEnvelope className="text-green-600 text-xl mt-1" />
          <div>
            <p className="text-lg font-semibold">E-mail</p>
            <p>k.p.plastic.co.ltd@gmail.com</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
          <div className="text-green-600 text-xl mt-1">
            <FaFacebookF />
          </div>
          <div>
            <p className="text-lg font-semibold">Facebook</p>
            <a
              href="https://www.facebook.com/people/%E0%B9%80%E0%B8%84%E0%B8%9E%E0%B8%B5%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%B4%E0%B8%81-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/61577548353934/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Facebook Page
            </a>
          </div>
        </div>

        {/* <div className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4">
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
              @K.P. PLASTIC COMPANY LIMITED
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
