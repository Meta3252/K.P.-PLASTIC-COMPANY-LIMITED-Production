'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import CategoryCard from '../components/CategoryCard';
import { categories, services } from '../components/categoryData';
import Breadcrumb from '../components/Breadcrumb';
import CustomCategorySelect from '../components/CustomCategorySelect';

// animation
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ServicePage() {
  const [selectedCategory, setSelectedCategory] = useState('Food Safety Standards System');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(
    (service) =>
      service.category === selectedCategory &&
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="px-0 py-0 bg-white">
      <Breadcrumb />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full text-gray-800 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/services/Bgservices.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-7xl mx-auto px-6 py-24 z-10 text-center"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">
            บริการของเรา
          </h1>
          <p className="text-lg text-white mt-4">
            ครอบคลุมทั้งมาตรฐาน ความปลอดภัย กฎหมาย และพัฒนาศักยภาพของบุคลากร
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 md:p-10">

          {/* FILTER */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10"
          >
            <motion.div variants={fadeUp}>
              <CustomCategorySelect
                categories={categories}
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </motion.div>

            <motion.input
              variants={fadeUp}
              type="text"
              placeholder="ค้นหาบริการ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              whileFocus={{ scale: 1.03 }}
              className="border border-green-400 rounded-md px-4 py-2 text-sm w-full sm:w-72 
              focus:outline-none focus:ring-2 focus:ring-green-500 
              bg-white text-[#149144] shadow-sm transition"
            />
          </motion.div>

          {/* SERVICES */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredServices.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <CategoryCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </main>
  );
}