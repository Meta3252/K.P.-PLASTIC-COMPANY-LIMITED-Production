import React from "react";
import Link from 'next/link';
const AboutUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Header */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">เกี่ยวกับเรา</h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        เราคือทีมที่เชี่ยวชาญด้านเทคโนโลยีและนวัตกรรม พร้อมส่งมอบโซลูชันที่มีคุณภาพ เพื่อขับเคลื่อนองค์กรให้เติบโตอย่างยั่งยืน
                    </p>
                </section>

                {/* Vision */}
                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="../images/about/1.jpg"
                            alt="ทีมของเรา"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800">บริษัท บีซัสเทน จำกัด</h2>
                        <p className="text-gray-600 leading-relaxed">
                            บริษัทที่ปรึกษาการจัดวางระบบมาตรฐานสากล รวมถึงให้บริการด้านการฝึกอบรมด้านต่างๆ โดยผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 14 ปี
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            เพื่อการพัฒนางานระบบให้ยกระดับมาตรฐานสู่สากลพร้อมทั้งพัฒนากำลังบุคลาการเพิ่มความรู้ความสามารถมีศักยภาพให้องค์กรเติบโตอย่างยั่งยืน
                        </p>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-10 items-center">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-800"> เราไม่เคยหยุดพัฒนา</h2>
                        <p className="text-gray-600 leading-relaxed">
                            เราพร้อมที่จะดูแลลูกค้าอย่างใกล้ชิดเปรียบดั่งคนในครอบครัวเพื่อให้ลูกค้ามีความมั่นใจ ช่วยให้ลูกค้าประหยัดเวลา ค่าใช้จ่าย ลดปัญหาความขัดแย้งภายใน  เพิ่มประสิทธิภาพในการสื่อสารขององค์กร
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            พัฒนาเพื่อลูกค้าที่จะได้รับการบริการที่ดีที่สุด หลักสูตรที่ถูกพัฒนาขึ้นเพื่อให้ทันต่อสถานการณ์ปัจจุบัน  ตอบโจทย์ได้ทันท่วงที และเรายังสามารถปรับหลักสูตรได้ตามความต้องการของลูกค้า เพราะเราทราบดีว่าปัญหาแต่ละองค์กรแตกต่างกัน บริษัท บีซัสเทน จำกัด  เรามุ่งมั่นพัฒนาความยั่งยืนจากองค์กรสู่สังคม
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-2xl">
                        <img
                            src="../images/about/2.png"
                            alt="ทีมของเรา"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Mission */}
                <section className="rounded-2xl py-12 px-6 md:px-12">
                    <h2 className="text-2xl font-semibold text-center mb-10 text-gray-800">
                        พันธกิจของเรา
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "นวัตกรรม",
                                description: "มุ่งสร้างสรรค์โซลูชันที่ตอบโจทย์การเปลี่ยนแปลงอย่างรวดเร็วของโลกธุรกิจ"
                            },
                            {
                                title: "คุณภาพ",
                                description: "ใส่ใจในทุกรายละเอียด เพื่อส่งมอบผลงานที่ดีที่สุดให้แก่ลูกค้า"
                            },
                            {
                                title: "ความยั่งยืน",
                                description: "วางรากฐานที่มั่นคง พร้อมสร้างคุณค่าให้กับสังคมและสิ่งแวดล้อม"
                            },
                        ].map(({ title, description }) => (
                            <div
                                key={title}
                                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                                <p className="text-gray-600">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        มาร่วมเป็นส่วนหนึ่งกับเรา
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        หากคุณมีเป้าหมายเดียวกันในการสร้างอนาคตที่มั่นคงและยั่งยืน เราพร้อมต้อนรับคุณเสมอ
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium"
                    >
                        ติดต่อเรา
                    </Link>

                </section>
            </div>
        </div>
    );
};

export default AboutUs;
