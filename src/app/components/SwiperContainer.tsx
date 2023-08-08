"use client";
// Import Swiper React components
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCube } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
import "swiper/css";
interface ISwiper extends SwiperProps {
  children: React.ReactNode;
}
export default function SwiperContainer(props: ISwiper) {
  return (
    <Swiper
      {...props}
      modules={[Pagination, A11y]}
      pagination={{
        clickable: true,
      }}
    >
      {props.children}
    </Swiper>
  );
}
