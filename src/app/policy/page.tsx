import Breadcrumb from "../components/Breadcrumb";

const sections = [
  {
    title: "การเก็บรวบรวมข้อมูล",
    items: [
      "ข้อมูลที่ท่านกรอกผ่านแบบฟอร์มติดต่อหรือขอใบเสนอราคา",
      "ข้อมูลการติดต่อ เช่น ชื่อบริษัท ชื่อผู้ติดต่อ เบอร์โทรศัพท์ อีเมล และพื้นที่จัดส่ง",
      "ข้อมูลที่เกี่ยวข้องกับการสอบถามสินค้า การสั่งซื้อ และการให้บริการ",
    ],
  },
  {
    title: "วัตถุประสงค์ในการใช้ข้อมูล",
    items: [
      "ติดต่อกลับ ให้ข้อมูลสินค้า และจัดทำใบเสนอราคา",
      "ประสานงานการสั่งซื้อ การจัดส่ง และการบริการหลังการขาย",
      "ปรับปรุงสินค้า บริการ และประสบการณ์การใช้งานเว็บไซต์",
      "ปฏิบัติตามกฎหมายหรือข้อกำหนดที่เกี่ยวข้อง",
    ],
  },
  {
    title: "การเปิดเผยข้อมูล",
    items: [
      "บริษัทจะเปิดเผยข้อมูลเท่าที่จำเป็นต่อการดำเนินงาน เช่น การจัดส่งหรือการให้บริการ",
      "บริษัทจะไม่ขายข้อมูลส่วนบุคคลของท่านให้บุคคลภายนอก",
      "กรณีที่กฎหมายกำหนด บริษัทอาจต้องเปิดเผยข้อมูลต่อหน่วยงานที่มีอำนาจ",
    ],
  },
  {
    title: "สิทธิของเจ้าของข้อมูล",
    items: [
      "ขอเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคลตามเงื่อนไขของกฎหมาย",
      "ขอระงับหรือคัดค้านการใช้ข้อมูลในบางกรณี",
      "ติดต่อบริษัทเพื่อสอบถามหรือใช้สิทธิเกี่ยวกับข้อมูลส่วนบุคคล",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-slate-50">
      <Breadcrumb />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10">
            <span className="mb-4 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
              Privacy Policy
            </span>
            <h1 className="text-4xl font-black leading-tight text-slate-950">
              นโยบายความเป็นส่วนตัว
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600">
              บริษัท เค.พี. พลาสติก จำกัด ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของลูกค้า คู่ค้า ผู้มาติดต่อ และผู้ใช้บริการเว็บไซต์ นโยบายนี้อธิบายแนวทางการเก็บ ใช้ เปิดเผย และดูแลข้อมูลของท่าน
            </p>

            <div className="mt-10 grid gap-6">
              {sections.map((section) => (
                <section key={section.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <h2 className="text-xl font-black text-slate-950">{section.title}</h2>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white">
              <h2 className="text-xl font-black">ช่องทางติดต่อ</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                หากต้องการสอบถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อ บริษัท เค.พี. พลาสติก จำกัด โทร 034-446748 หรืออีเมล k.p.plastic.co.ltd@gmail.com
              </p>
            </div>

            <p className="mt-8 text-center text-xs text-slate-500">
              นโยบายนี้มีผลใช้บังคับตั้งแต่วันที่ 3 เมษายน 2567
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
