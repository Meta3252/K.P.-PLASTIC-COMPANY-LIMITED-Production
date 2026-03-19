export default function Services() {
  const services = [
    {
      image: '/services/High-qualityplastic.jpg',
      title: 'จำหน่ายเม็ดพลาสติกคุณภาพ',
      description: 'จัดจำหน่ายเม็ดพลาสติกหลากหลายประเภท รองรับงานอุตสาหกรรม เช่น บรรจุภัณฑ์ ชิ้นส่วน และงานขึ้นรูป พร้อมมาตรฐานที่เชื่อถือได้',
      link: '/services',
    },
    {
      image: '/services/Supply_plastic_pellets.jpg',
      title: 'จัดหาวัตถุดิบตามความต้องการ',
      description: 'สามารถจัดหาเม็ดพลาสติกตามสเปคที่ลูกค้าต้องการ เพื่อให้เหมาะกับกระบวนการผลิตเฉพาะทาง',
      link: '/services',
    },
    {
      image: '/services/Fast_delivery_service.jpg',
      title: 'บริการจัดส่งรวดเร็ว',
      description: 'มีระบบจัดส่งที่มีประสิทธิภาพ พร้อมรองรับออเดอร์เร่งด่วน ช่วยลดระยะเวลาและความเสี่ยงในการหยุดสายการผลิต',
      link: '/services',
    },
    {
      image: '/services/Consulting.jpg',
      title: 'ให้คำปรึกษาด้านวัสดุ',
      description: 'ทีมงานพร้อมให้คำแนะนำเกี่ยวกับการเลือกใช้เม็ดพลาสติกที่เหมาะสม เพื่อเพิ่มประสิทธิภาพและลดต้นทุนในการผลิต',
      link: '/services',
    },
    {
      image: '/services/Orders_of_all_sizes.jpg',
      title: 'รองรับออเดอร์ทุกขนาด',
      description: 'ไม่ว่าจะเป็นโรงงานขนาดเล็กหรือขนาดใหญ่ เราพร้อมให้บริการอย่างยืดหยุ่นและเป็นมืออาชีพ',
      link: '/services',
    },
    {
      image: '/services/Quality_control.jpg',
      title: 'ควบคุมคุณภาพสินค้า',
      description: 'มีการตรวจสอบคุณภาพก่อนส่งมอบ เพื่อให้ลูกค้ามั่นใจในมาตรฐานของสินค้า',
      link: '/services',
    },
  ];

  return (
    <section
      className="relative py-24 px-6 md:px-20 text-gray-800"
      style={{
        backgroundImage: "url('/services/serviceper1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* overlay มืดให้เนื้อหาอ่านง่าย */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* เนื้อหา */}
      <div className="relative max-w-7xl mx-auto text-center mb-16 z-10">
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
          บริการของเรา
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto font-light">
          เรามุ่งมั่นจัดจำหน่ายเม็ดพลาสติกคุณภาพ พร้อมบริการที่ตอบโจทย์ทุกความต้องการของภาคอุตสาหกรรม
        </p>
      </div>

      {/* การ์ดบริการ */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
        {services.map(({ image, title, description, link }, i) => (
          <div
            key={i}
            className={`relative h-80 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 
        ${i === 0 ? 'lg:col-start-2' : ''}`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-200">{description}</p>
                <a
                  href={link || '#'}
                  className="inline-block mt-2 px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-green-400 transition-colors duration-300"
                >
                  ดูรายละเอียด
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}
