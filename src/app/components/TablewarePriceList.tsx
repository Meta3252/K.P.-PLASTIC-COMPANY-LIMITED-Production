import { tablewarePrices } from "./tablewarePrices";

export default function TablewarePriceList({ embedded = false }: { embedded?: boolean }) {
  const groups = [
    { title: "จาน", items: tablewarePrices.filter(item => item.name.startsWith("จาน")) },
    { title: "ชามและถ้วย", items: tablewarePrices.filter(item => item.name.startsWith("ชาม") || item.name.startsWith("ถ้วย")) },
    { title: "อุปกรณ์บนโต๊ะอาหาร", items: tablewarePrices.filter(item => item.name === "ทัพพี") },
  ];

  return (
    <section className={embedded ? "bg-white text-slate-800" : "my-8 overflow-hidden rounded-2xl border border-emerald-100 bg-white text-slate-800"} aria-label="ราคาจาน ชาม และทัพพี">
      {!embedded && <div className="bg-emerald-50 p-5 sm:p-6">
        <h2 className="text-2xl font-bold text-emerald-900">เลือกแบบที่ชอบ เช็กราคาได้เลย</h2>
        <p className="mt-2 text-base leading-7 text-slate-700">จาน ชาม ถ้วย และทัพพี เลือกดูราคาแยกตามแบบและขนาดด้านล่าง</p>
        <p className="mt-4 inline-block rounded-full bg-emerald-700 px-4 py-2 text-base font-bold text-white">ราคาต่อโหล · 1 โหล = 12 ชิ้น</p>
      </div>}
      <div className="space-y-6 p-4 sm:p-6">
        {groups.map(group => (
          <div key={group.title}>
            <h3 className="mb-3 text-lg font-bold text-emerald-900">{group.title}</h3>
            <table className="w-full table-fixed text-left text-base">
              <caption className="sr-only">ราคา{group.title}ต่อโหล</caption>
              <thead className="border-b border-slate-200 bg-slate-50 text-sm text-slate-600">
                <tr>
                  <th scope="col" className="w-[42%] rounded-tl-xl px-2 py-3 sm:px-4">สินค้า</th>
                  <th scope="col" className="w-[25%] px-2 py-3 sm:px-4">ขนาด</th>
                  <th scope="col" className="rounded-tr-xl px-2 py-3 text-right sm:px-4">ราคา / โหล</th>
                </tr>
              </thead>
              <tbody>
                {group.items.map(item => (
                  <tr key={`${item.name}-${item.size}`} className="border-b border-slate-100 last:border-0 even:bg-slate-50/50">
                    <th scope="row" className="px-2 py-3 font-medium sm:px-4">{item.name}</th>
                    <td className="px-2 py-3 text-slate-600 sm:px-4">{item.size || "—"}</td>
                    <td className="px-2 py-3 text-right font-bold tabular-nums text-emerald-800 sm:px-4">{item.pricePerDozen.toLocaleString("th-TH")} <span className="text-sm font-medium">บาท</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      {!embedded && <div className="border-t border-emerald-100 bg-emerald-50/50 p-5 sm:p-6">
        <p className="text-base font-bold text-emerald-900">สนใจสั่งซื้อหรือสอบถามเพิ่มเติม</p>
        <p className="mt-1 text-base leading-7 text-slate-600">แจ้งชื่อสินค้า ขนาด สี และจำนวนโหลที่ต้องการกับทีมงานได้เลย เรายินดีช่วยเช็กสินค้าและแจ้งค่าจัดส่งให้ก่อนสั่งซื้อ</p>
      </div>}
    </section>
  );
}
