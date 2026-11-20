import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  isNew?: boolean;
  price?: number;
  hasTablewarePrices?: boolean;
}

export default function CategoryCard({ image, title, description, link, isNew, price, hasTablewarePrices }: CategoryCardProps) {
  return (
    <div className="flex flex-col h-full border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
      {/* รูปภาพ */}
      <div className={`relative w-full bg-white ${isNew ? 'aspect-square' : 'aspect-video'}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isNew && <span className="absolute left-3 top-3 rounded-full bg-emerald-700 px-3 py-1 text-sm font-bold text-white">สินค้าใหม่</span>}
      </div>

      {/* ข้อความ + ปุ่ม */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-sm text-slate-600 mb-6">{description}</p>
          {isNew && <p className="mb-5 text-lg font-bold text-emerald-700">{price ? `${price.toLocaleString('th-TH')} บาท / ตัว` : hasTablewarePrices ? 'ดูราคาตามรุ่นและขนาด' : 'สอบถามราคา'}</p>}
        </div>

        {/* ลิงก์ "ข้อมูลเพิ่มเติม >" สี #0071AD */}
        <Link
          href={link}
          className="group inline-flex items-center text-[#0071AD] text-sm font-medium hover:underline hover:text-[#005f8f] transition-colors"
        >
          ข้อมูลเพิ่มเติม
        </Link>
      </div>

    </div>
  );
}
