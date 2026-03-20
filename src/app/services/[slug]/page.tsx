export const dynamic = 'force-dynamic';

import { services } from '../../components/categoryData';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.link.endsWith(slug));

    if (!service) {
        return (
            <div className="max-w-3xl mx-auto py-20 text-center text-red-600">
                <h1 className="text-3xl font-bold">ไม่พบบริการที่ต้องการ</h1>
                <Link href="/services" className="text-blue-500 underline mt-4 inline-block">
                    กลับไปหน้ารายการบริการ
                </Link>
            </div>
        );
    }

    return (
        <main>
            <Breadcrumb/>
            <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6 text-[#149144]">{service.title}</h1>
            <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={400}
                className="rounded-md mb-8"
            />
            <p className="text-lg text-gray-700 pb-5 border-b border-gray-300 mb-6">
                {service.description}
            </p>
            <section
                className="prose prose-lg prose-h2:text-[#149144] prose-li:marker:text-[#d6b760] max-w-none"
                dangerouslySetInnerHTML={{ __html: service.content ?? '' }}
            />
            </div>


        </main>
    );
}
