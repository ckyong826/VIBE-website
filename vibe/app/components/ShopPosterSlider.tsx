"use client"
import Link from 'next/link'
import ShopPoster from './ShopPosterComponent';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import './style.css'
import All_Poster from "../../public/AllProduct.jpg"

export default function PosterSlider() {
  return(
    <>
    <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 5,
          slideShadows: false,
        }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        }}
        modules={[EffectCoverflow, Navigation]}
        className="h-[120%] flex flex-row items-center justify-center"
      >
        <SwiperSlide>
          <ShopPoster alt="All-Product-Poster" name="chill collection" src={All_Poster} />
        </SwiperSlide>
        <SwiperSlide>
          <ShopPoster alt="All-Product-Poster" name="chill collection" src={All_Poster} />
        </SwiperSlide>
        <SwiperSlide>
          <ShopPoster alt="All-Product-Poster" name="chill collection" src={All_Poster} />
        </SwiperSlide>
        <SwiperSlide>
          <ShopPoster alt="All-Product-Poster" name="chill collection" src={All_Poster} />
        </SwiperSlide>
        <SwiperSlide>
          <ShopPoster alt="All-Product-Poster" name="chill collection" src={All_Poster} />
        </SwiperSlide>
        <div className="swiper-button-next"></div> 
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  )
}
