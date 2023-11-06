"use client"

import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '.././globals.css'
import { Navigation} from 'swiper/modules';
import Tshirt from './Tshirt';

export default function Slider() {

  return (
    <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        }}
        modules={[Navigation]}
        className="truncate w-screen h-[45%] pt-[20px] flex flex-row items-center justify-center
                            pl-[20px] pr-[20px] "
      >
        
        <SwiperSlide><Tshirt/></SwiperSlide>
        <SwiperSlide><Tshirt/></SwiperSlide>
        <SwiperSlide><Tshirt/></SwiperSlide>
        <SwiperSlide><Tshirt/></SwiperSlide>
        <SwiperSlide><Tshirt/></SwiperSlide>
        <SwiperSlide><Tshirt/></SwiperSlide>
        <div className="swiper-button-next"></div> 
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  );
}