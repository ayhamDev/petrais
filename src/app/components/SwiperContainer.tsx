"use client";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCube } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";

export default function SwiperContainer(props: { children: React.ReactNode }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, A11y]}
      pagination={{
        clickable: true,
      }}
    >
      {props.children}
    </Swiper>
  );
}
