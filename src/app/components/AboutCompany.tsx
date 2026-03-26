export default function AboutCompany() {
  return (
    <section className="relative bg-[#f5fff5] py-20 px-6 md:px-24 text-gray-800 overflow-hidden">
      {/* Background */}
      <div className="absolute top-10 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-green-100/30 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
        {/* Image */}
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl border border-green-100 flex items-center justify-center">
          <img
            src="/Hero_1.jpg"
            alt="K.P. Plastic Company"
            className="object-cover w-full max-h-[480px] md:max-h-full rounded-xl"
            style={{ aspectRatio: "3 / 4" }}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 font-serif space-y-12">
          <div className="relative pl-6 border-l-4 border-green-500">
            <div className="absolute -left-[9px] top-[6px] w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-md"></div>

            <h2 className="text-4xl font-semibold tracking-tight mb-4 text-gray-800">
              เกี่ยวกับบริษัทของเรา
            </h2>

            <p className="text-base leading-relaxed text-gray-700 font-light text-justify pr-4 pb-6">
              บริษัท เค.พี.พลาสติก จำกัด (K.P. PLASTIC COMPANY LIMITED)
              ดำเนินธุรกิจด้านการรีไซเคิลพลาสติก โดยมุ่งเน้นการแปรรูปพลาสติกใช้แล้ว
              ให้กลับมาเป็นเม็ดพลาสติกคุณภาพ เพื่อรองรับการนำไปใช้ในกระบวนการผลิต
              ได้อย่างเหมาะสม คุ้มค่า และสอดคล้องกับความต้องการของลูกค้าในภาคอุตสาหกรรม
            </p>

            {/* Subtopics */}
            <div className="space-y-10">
              {[
                {
                  title: "ทำไมลูกค้าจึงเลือกเรา",
                  text: "เรามุ่งเน้นการคัดสรรวัตถุดิบ ควบคุมคุณภาพในทุกขั้นตอน และให้ความสำคัญกับการส่งมอบสินค้าที่สม่ำเสมอ เพื่อให้ลูกค้านำไปใช้งานต่อได้อย่างมั่นใจ",
                },
                {
                  title: "สินค้าและบริการของเรา",
                  text: "เราจัดจำหน่ายเม็ดพลาสติกรีไซเคิลสำหรับงานอุตสาหกรรม พร้อมให้คำแนะนำในการเลือกใช้วัสดุให้เหมาะสมกับลักษณะงาน เพื่อช่วยเพิ่มประสิทธิภาพในการผลิตและลดต้นทุนที่ไม่จำเป็น",
                },
                {
                  title: "ความมุ่งมั่นของเรา",
                  text: "เรามุ่งมั่นเป็นพันธมิตรทางธุรกิจที่ลูกค้าไว้วางใจ ด้วยการบริการที่รวดเร็ว ตรงเวลา และใส่ใจในทุกรายละเอียด ควบคู่ไปกับการสนับสนุนการใช้ทรัพยากรอย่างคุ้มค่าและเป็นมิตรต่อสิ่งแวดล้อม",
                },
              ].map(({ title, text }, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-2 border-green-400"
                >
                  <div className="absolute -left-[9px] top-[6px] w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-md"></div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 tracking-wide">
                    {title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light text-justify">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="pt-8">
              <a
                href="/services"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium tracking-wide text-white transition duration-300 ease-in-out rounded-lg shadow-md group bg-gradient-to-r from-green-500 to-green-500 hover:from-green-700 hover:to-green-700"
              >
                <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform translate-x-full bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-10">ดูสินค้าและบริการ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}