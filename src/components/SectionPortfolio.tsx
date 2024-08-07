"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function SectionPortfolio() {
  return (
    <section id="portfolio" className="h-[80vh]">
      <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center text-center pb-4">
            <Image
              src="/images/Selphspace-App-Portfolio-Screens.webp"
              width={1352}
              height={828}
              alt="Selphspace Web App"
              className="w-2/4 h-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center text-center pb-4">
            <Image
              src="/images/IPOS-Portfolio-Screens.webp"
              width={1352}
              height={828}
              alt="Selphspace Web App"
              className="w-2/4 h-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center text-center pb-4">
            <Image
              src="/images/Selph-Tech-Portfolio-Screen.webp"
              width={1352}
              height={828}
              alt="Selphspace Web App"
              className="w-2/4 h-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
