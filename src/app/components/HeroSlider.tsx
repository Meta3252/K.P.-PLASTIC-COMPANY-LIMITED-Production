'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSlider() {
    const slides = [
        {
            image: '/Hero_1.jpg',
            title: 'เริ่มต้นเว็บไซต์ของคุณวันนี้',
            subtitle: 'สร้างเว็บไซต์ที่ดูดีในไม่กี่นาที',
            button: 'เริ่มต้นเลย',
        },
        {
            image: '/Hero_2.jpg',
            title: 'ออกแบบให้สวยงาม',
            subtitle: 'รองรับทุกหน้าจอด้วย Tailwind CSS',
            button: 'เรียนรู้เพิ่มเติม',
        },
        {
            image: '/Hero_3.jpg',
            title: 'ใช้เทคโนโลยีทันสมัย',
            subtitle: 'Next.js + React + Swiper',
            button: 'ดูตัวอย่าง',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const getAnimationVariant = (index: number) => {
        switch (index) {
            case 0:
                return {
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, delay: 0.2 },
                    },
                };
            case 1:
                return {
                    hidden: { opacity: 0, x: -80 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.8, delay: 0.2 },
                    },
                };
            case 2:
                return {
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.8, delay: 0.2 },
                    },
                };
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
        }
    };

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                waitForTransition: true,
            }}
            speed={700}
            pagination={{ clickable: true }}
            loop={true}
            grabCursor={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-[90vh]"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-center text-center relative"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Soft overlay */}
                        <div className="absolute inset-0 bg-[#4B4237]/70 z-0" />

                        <motion.div
                            className="relative z-10 text-gray-100 max-w-xl mx-auto px-4 font-serif"
                            initial="hidden"
                            animate={activeIndex === index ? "visible" : "hidden"}
                            variants={getAnimationVariant(index)}
                        >
                            {/* Animated Heading */}
                            <motion.h2
                                key={`title-${activeIndex === index ? index : 'hidden'}`}
                                className="text-3xl md:text-5xl font-bold mb-4 flex flex-wrap justify-center tracking-tight text-amber-100"
                            >
                                {slide.title.split('').map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={
                                            activeIndex === index
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 0, y: 20 }
                                        }
                                        transition={{ delay: activeIndex === index ? i * 0.04 : 0 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>

                            {/* Subtitle */}
                            <motion.p
                                className="text-lg md:text-xl mb-6 text-gray-200"
                                animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {slide.subtitle}
                            </motion.p>

                            {/* Button */}
                            <motion.button
                                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-yellow-400 hover:to-amber-500 rounded-full text-white font-semibold transition shadow-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {slide.button}
                            </motion.button>
                        </motion.div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
