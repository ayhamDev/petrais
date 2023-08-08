import SwiperContainer from "@/components/SwiperContainer";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { SwiperSlide } from "swiper/react";

export default function ClientsSection() {
  return (
    <Wrapper>
      <SwiperContainer
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
        <SwiperSlide className="pb-24">
          <div className="w-full h-[200px] bg-secondary"></div>
        </SwiperSlide>
      </SwiperContainer>
    </Wrapper>
  );
}
