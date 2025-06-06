import {
  UtensilsCrossed,
  Globe2,
  Handshake,
  Brain,
  Scale,
  Factory,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <UtensilsCrossed className="w-10 h-10 text-yellow-600" />,
      title: 'Food Safety Standards System',
      description: 'มาตรฐานความปลอดภัยด้านอาหาร เพื่อรับรองความปลอดภัยในการผลิตและจัดการอาหารตามระบบสากล',
    },
    {
      icon: <Globe2 className="w-10 h-10 text-yellow-700" />,
      title: 'International Organization For Standardization',
      description: 'ให้คำปรึกษาในการขอและรักษาระบบ ISO สำหรับองค์กรที่ต้องการมาตรฐานระดับสากล',
    },
    {
      icon: <Handshake className="w-10 h-10 text-amber-600" />,
      title: 'International Standards For Social Responsibility',
      description: 'มาตรฐานด้านความรับผิดชอบต่อสังคม เพื่อสร้างความเชื่อมั่นและภาพลักษณ์ที่ดีให้กับองค์กร',
    },
    {
      icon: <Brain className="w-10 h-10 text-yellow-500" />,
      title: 'Soft Skills',
      description: 'ฝึกอบรมด้านทักษะการสื่อสาร การทำงานเป็นทีม ความเป็นผู้นำ และการคิดเชิงกลยุทธ์',
    },
    {
      icon: <Scale className="w-10 h-10 text-yellow-800" />,
      title: 'Legal Services Related To Intellectual Property',
      description: 'บริการให้คำปรึกษาด้านกฎหมายที่เกี่ยวข้องกับทรัพย์สินทางปัญญา เช่น ลิขสิทธิ์ สิทธิบัตร และเครื่องหมายการค้า',
    },
    {
      icon: <Factory className="w-10 h-10 text-amber-700" />,
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
        {services.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-yellow-100 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
