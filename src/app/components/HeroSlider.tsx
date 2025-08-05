'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function HeroSlider() {
    const slides = [
        {
            image: '/Hero_1.jpg',
            title: 'เริ่มต้นการพัฒนาโรงงานของคุณวันนี้',
            subtitle: 'ที่ปรึกษามืออาชีพสำหรับระบบโรงงานครบวงจร',
            button: 'เริ่มต้นเลย',
        },
        {
            image: '/Hero_2.jpg',
            title: 'ปรึกษาการทำระบบ',
            subtitle: 'บริการให้คำปรึกษาเบื้องต้นสำหรับการจัดทำระบบ',
            button: 'ติดต่อเรา',
        },
        {
            image: '/Hero_3.jpg',
            title: 'บริษัทที่ปรึกษาการจัดวางระบบมาตรฐานสากล',
            subtitle: 'เราพร้อมที่จะดูแลลูกค้าอย่างใกล้ชิดเปรียบดั่งคนในครอบครัวเพื่อให้ลูกค้ามีความมั่นใจ',
            button: 'ดูเพิ่มเติม',
        },
    ];


    const [activeIndex, setActiveIndex] = useState(0);

    const getAnimationVariant = (index: number) => ({
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 },
        },
    });

    return (
        <div className="relative w-full h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* Background image layer */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    className="absolute inset-0 bg-center bg-cover filter blur-xl brightness-50"
                    style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Overlay เพื่อทำให้ข้อความอ่านง่าย */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Swiper */}
            <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                loop={true}
                freeMode={false}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                speed={700}
                slidesPerView={3}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="relative w-[90vw] max-w-6xl h-[85vh]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-xl"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center text-white p-6">
                            <motion.div
                                initial="hidden"
                                animate={activeIndex === index ? 'visible' : 'hidden'}
                                variants={getAnimationVariant(index)}
                                className="text-center"
                            >
                                <motion.h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight max-w-3xl mx-auto leading-snug">
                                    {slide.title.split('').map((char, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={
                                                activeIndex === index
                                                    ? { opacity: 1, y: 0 }
                                                    : { opacity: 0, y: 20 }
                                            }
                                            transition={{
                                                delay: activeIndex === index ? i * 0.03 : 0,
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.h2>

                                <motion.p
                                    className="text-base md:text-lg mb-6 text-gray-200 max-w-2xl mx-auto leading-relaxed"
                                    animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {slide.subtitle}
                                </motion.p>


                                <motion.button
                                    className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-400 rounded-full text-white font-semibold shadow-md transition-all"
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
        </div>
    );
}
