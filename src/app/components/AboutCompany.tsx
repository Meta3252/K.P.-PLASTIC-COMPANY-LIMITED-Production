export default function AboutCompany() {
  return (
    <section className="relative bg-[#f5fff5] py-20 px-6 md:px-24 text-gray-800 overflow-hidden">
      {/* Background golden glow */}
      <div className="absolute top-10 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-green-100/30 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
        {/* Image */}
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl border border-green-100 flex items-center justify-center">
          <img
            src="/Hero_1.jpg"
            alt="About Company"
            className="object-cover w-full max-h-[480px] md:max-h-full rounded-xl"
            style={{ aspectRatio: '3 / 4' }}
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 font-serif space-y-12">
          <div className="relative pl-6 border-l-4 border-green-500">
            <div className="absolute -left-[9px] top-[6px] w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-md"></div>

            <h2 className="text-4xl font-semibold tracking-tight mb-4 text-gray-800">
              เกี่ยวกับบริษัทของเรา
            </h2>

            <p className="text-base leading-relaxed text-gray-700 font-light text-justify pr-4 pb-6" style={{ textJustify: 'inter-word' }}>
              บริษัท บีซัสเทน จำกัด เป็นบริษัทที่ปรึกษาการจัดวางระบบมาตรฐานสากล รวมถึงให้บริการด้านการฝึกอบรมด้านต่าง ๆ โดยผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 14 ปี เพื่อการพัฒนางานระบบให้ยกระดับมาตรฐานสู่สากล พร้อมทั้งพัฒนากำลังบุคลากร เพิ่มความรู้ความสามารถ มีศักยภาพให้องค์กรเติบโตอย่างยั่งยืน
            </p>

            {/* Subtopics */}
            <div className="space-y-10">
              {[
                {
                  title: 'Why Us?',
                  text: 'เราคือองค์กรที่ให้คำปรึกษาด้านระบบคุณภาพที่มีประสบการณ์ตรวจประเมินเพื่อให้การรับรองระบบคุณภาพมากกว่า 800 บริษัท ด้วยผลงานที่ผ่านมาทำให้องค์กรของคุณได้รับคำปรึกษาและการรับรองมาตรฐานสากลจากทีมผู้เชี่ยวชาญตัวจริง',
                },
                {
                  title: 'ทำไม ISO จึงสำคัญ?',
                  text: 'ISO คือใบเบิกทางสำคัญสำหรับการสร้างแบรนด์ระดับประเทศและระดับโลก เป็นมาตรฐานที่นานาประเทศยอมรับ เปรียบเสมือนการมีมาตรฐานในการสร้างภาพลักษณ์ที่ดีขององค์กร',
                },
                {
                  title: 'ทำความเข้าใจเกี่ยวกับ ISO',
                  text: 'นอกจากรู้ว่า ISO สำคัญ เรายังต้องเข้าใจรายละเอียดและประเภทของ ISO เพื่อให้เลือกใช้ให้เหมาะสมกับองค์กรของเรา',
                },
              ].map(({ title, text }, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-green-400">
                  <div className="absolute -left-[9px] top-[6px] w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-md"></div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 tracking-wide">{title}</h3>
                  <p className="text-gray-700 leading-relaxed font-light text-justify">{text}</p>
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
                <span className="relative z-10">ดูข้อมูลเพิ่มเติม</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
