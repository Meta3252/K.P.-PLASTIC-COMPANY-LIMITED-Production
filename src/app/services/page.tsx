"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Search } from "lucide-react";
import CategoryCard from "../components/CategoryCard";
import { categories, services } from "../components/categoryData";
import Breadcrumb from "../components/Breadcrumb";
import CustomCategorySelect from "../components/CustomCategorySelect";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function ServicePage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter(
    (service) =>
      service.category === selectedCategory &&
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-slate-50">
      <Breadcrumb />

      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/services/Bgservices.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-emerald-950/60" />
        <motion.div
          className="relative mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="mb-4 inline-flex rounded-full border border-emerald-300/25 bg-white/10 px-4 py-2 text-sm font-bold text-emerald-100 backdrop-blur">
            Product Catalog
          </span>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            เม็ดพลาสติกรีไซเคิลและบริการสำหรับงานผลิต
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
            เลือกดูรายการสินค้า ค้นหาเกรดที่ต้องการ หรือส่งรายละเอียดให้ทีมงานช่วยแนะนำวัตถุดิบที่เหมาะกับงานของคุณ
          </p>
        </motion.div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="-mt-24 mb-10 rounded-[2rem] border border-white/80 bg-white/92 p-5 shadow-2xl shadow-emerald-950/10 backdrop-blur sm:p-6"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
              <CustomCategorySelect
                categories={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="ค้นหาชื่อสินค้า เช่น ABS, P-001"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
              </div>
              <span className="rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-700">
                {filteredServices.length} รายการ
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredServices.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <CategoryCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="rounded-3xl bg-white p-10 text-center text-slate-600 shadow-sm">
              ไม่พบสินค้าที่ค้นหา กรุณาลองเปลี่ยนคำค้นหรือเลือกหมวดหมู่อื่น
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
