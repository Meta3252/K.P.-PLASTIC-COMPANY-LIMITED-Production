import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function CategoryCard({ image, title, description, link }: CategoryCardProps) {
  return (
    <div className="flex flex-col h-full border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
      {/* รูปภาพ */}
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* ข้อความ + ปุ่ม */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-sm text-slate-600 mb-6">{description}</p>
        </div>

        {/* ลิงก์ "ข้อมูลเพิ่มเติม >" สี #0071AD */}
        <Link
          href={link}
          className="group inline-flex items-center text-[#0071AD] text-sm font-medium hover:underline hover:text-[#005f8f] transition-colors"
        >
          ข้อมูลเพิ่มเติม
          <svg
            className="ml-1 w-4 h-4 transform transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
