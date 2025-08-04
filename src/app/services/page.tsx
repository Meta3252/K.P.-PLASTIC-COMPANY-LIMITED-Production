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
        <main className="px-0 py-0">
            <Breadcrumb />
            <section className="w-full bg-indigo-50 py-12 mb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-indigo-800">Our Services</h1>
                </div>
            </section>

            <div className="px-6 py-16 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-slate-300 rounded-md px-4 py-2 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Search service..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-slate-300 rounded-md px-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </main>

    );
}
