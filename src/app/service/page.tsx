'use client';

import { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import { categories, services } from '../components/categoryData';

export default function ServicePage() {
    const [selectedCategory, setSelectedCategory] = useState("Food Safety Standards System");

    const filteredServices = services.filter(
        (service) => service.category === selectedCategory
    );

    return (
        <main className="px-6 py-16 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">Our Services</h1>

            {/* เมนูหมวดหมู่ */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-full border ${cat === selectedCategory
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                            } transition`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* รายการบริการของหมวดที่เลือก */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((item) => (
                    <CategoryCard
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </main>
    );
}
