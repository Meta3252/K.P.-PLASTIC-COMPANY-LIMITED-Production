export default function Services() {
  const services = [
    {
      image: '/services/food-safety.png',
      title: 'Food Safety Standards System',
      description: 'มาตรฐานความปลอดภัยด้านอาหาร เพื่อรับรองความปลอดภัยในการผลิตและจัดการอาหารตามระบบสากล',
      link: '/services/food-safety',
    },
    {
      image: '/services/iso.png',
      title: 'International Organization For Standardization',
      description: 'ให้คำปรึกษาในการขอและรักษาระบบ ISO สำหรับองค์กรที่ต้องการมาตรฐานระดับสากล',
    },
    {
      image: '/services/social.png',
      title: 'International Standards For Social Responsibility',
      description: 'มาตรฐานด้านความรับผิดชอบต่อสังคม เพื่อสร้างความเชื่อมั่นและภาพลักษณ์ที่ดีให้กับองค์กร',
    },
    {
      image: '/services/softskills.png',
      title: 'Soft Skills',
      description: 'ฝึกอบรมด้านทักษะการสื่อสาร การทำงานเป็นทีม ความเป็นผู้นำ และการคิดเชิงกลยุทธ์',
    },
    {
      image: '/services/law.png',
      title: 'Legal Services Related To Intellectual Property',
      description: 'บริการให้คำปรึกษาด้านกฎหมายที่เกี่ยวข้องกับทรัพย์สินทางปัญญา เช่น ลิขสิทธิ์ สิทธิบัตร และเครื่องหมายการค้า',
    },
    {
      image: '/services/factory-license.png',
      title: 'Request a Factory License',
      description: 'บริการคำแนะนำและดำเนินการขอใบอนุญาตประกอบกิจการโรงงาน เพื่อให้สอดคล้องกับกฎหมายไทย',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-[#F9F5F0] text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
          บริการของเรา
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto font-light">
          ครอบคลุมทั้งมาตรฐาน ความปลอดภัย กฎหมาย และพัฒนาศักยภาพของบุคลากร
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(({ image, title, description, link }, i) => (
          <div
            key={i}
            className="relative h-80 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* เลเยอร์มืดพื้นหลัง */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

            {/* ข้อความหลัก */}
            <div className="absolute bottom-0 p-6 text-white z-10">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>

            {/* ข้อมูลเพิ่มเติม: ซ่อนอยู่ก่อน hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-200">{description}</p>
                <a
                  href={link}
                  className="inline-block mt-2 px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-300"
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
