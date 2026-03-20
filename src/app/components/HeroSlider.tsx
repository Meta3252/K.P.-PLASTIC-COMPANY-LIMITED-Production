'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSlider() {
  const slides = [
    {
      image: '/Hero_1.jpg',
      title: 'ให้คำปรึกษาโดยผู้เชี่ยวชาญ',
      subtitle: 'คัดสรรวัตถุดิบพลาสติกคุณภาพ รองรับงานอุตสาหกรรมหลากหลาย เช่น บรรจุภัณฑ์ ชิ้นส่วน และงานขึ้นรูป',
      button: 'ติดต่อเรา',
      link: '/contact',
    },
    {
      image: '/Hero_2.jpg',
      title: 'ส่งไว ตรงเวลา',
      subtitle: 'มีสต็อกพร้อมจัดส่ง รองรับออเดอร์เร่งด่วน ลดเวลาหยุดไลน์ผลิตของคุณ',
      button: 'ดูบริการ',
      link: '/services',
    },
    {
      image: '/Hero_3.jpg',
      title: 'เม็ดพลาสติกคุณภาพสูง',
      subtitle:
        'คัดสรรวัตถุดิบพลาสติกคุณภาพ รองรับงานอุตสาหกรรมหลากหลาย เช่น บรรจุภัณฑ์ ชิ้นส่วน และงานขึ้นรูป',
      button: 'ดูเพิ่มเติม',
      link: '/about',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    setBgIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[60vh] md:h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background image layer */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-center bg-cover filter blur-xl brightness-50"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === bgIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        speed={700}
        slidesPerView={1}
        centeredSlides={false}
        effect="slide"
        breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: true,
            effect: 'slide',
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative w-[90vw] max-w-6xl h-[55vh] md:h-[75vh] lg:h-[85vh]"
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
             <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8 rounded-2xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 tracking-tight max-w-3xl mx-auto leading-snug">
                  {slide.title}
                </h2>

                <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>

                <Link href={slide.link}>
                  <button className="
                     px-5 py-2 sm:px-6 sm:py-3
                      bg-gradient-to-r from-green-500 via-green-500 to-green-500
                        hover:from-green-700 hover:via-green-700 hover:to-green-700
                        rounded-full text-white font-semibold
                        shadow-md hover:shadow-2xl
                        transform-gpu
                        transition-all duration-500 ease-out
                        hover:-translate-y-1 hover:scale-[1.03]
                        active:scale-[0.97]
                      ">
                    {slide.button}
                  </button>
                </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
