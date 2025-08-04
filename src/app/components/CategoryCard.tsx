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
    <Link href={link} className="block h-full">
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

        {/* ข้อความ */}
        <div className="p-5 flex flex-col justify-between flex-1">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
