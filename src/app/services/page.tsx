'use client';

import { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories, services } from '../components/categoryData';
import Breadcrumb from '../components/Breadcrumb';

export default function ServicePage() {
    const [selectedCategory, setSelectedCategory] = useState("Food Safety Standards System");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredServices = services.filter(
        (service) =>
            service.category === selectedCategory &&
            service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="px-0 py-0 bg-white">
            <Breadcrumb />
            <section
                className="relative w-full text-gray-800 bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: "url('/images/services/Bgservices.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 z-10 text-center">
                    <h1 className="text-4xl font-bold text-white tracking-tight">
                        บริการของเรา
                    </h1>
                    <p className="text-lg text-white mt-4">
                        ครอบคลุมทั้งมาตรฐาน ความปลอดภัย กฎหมาย และพัฒนาศักยภาพของบุคลากร
                    </p>
                </div>
            </section>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-6 md:p-10 ">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-[#a37d58] bg-white text-gray-800 shadow-sm"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                        <input
                            type="text"
                            placeholder="ค้นหาบริการ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-[#a37d58] bg-white text-gray-800 shadow-sm"
                        />
                    </div>

                    {/* รายการบริการ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredServices.map((item) => (
                            <CategoryCard
                                key={item.title}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </main>

    );
}
