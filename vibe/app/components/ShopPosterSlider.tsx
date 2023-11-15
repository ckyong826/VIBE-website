"use client"
import Link from 'next/link'
import ShopPoster from './ShopPosterComponent';
import React, { useRef, useState,useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import '.././globals.css'
import { EffectCoverflow, Navigation } from 'swiper/modules';
import All_Poster from "../../public/AllProduct.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft,faCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function PosterSlider() {
  const swiperRef = useRef<SwiperType>();
  return(
    < >
    <Swiper
        effect={'coverflow'}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
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
        className="h-[120%] relative flex justify-center items-center z-[10]"
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
        <div className='absolute flex items-center justify-center w-screen z-[100]'>
        <div className='flex flex-row items-center justify-between w-[60%]'>
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className='block  w-[70px] h-[70px] bg-t-black rounded-[50%] flex items-center justify-center'>
                          <FontAwesomeIcon icon={faCircleLeft} className='text-t-white text-center hover:text-t-yellow transition duration-700 ease-in-out text-[75px] ' />
                        </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className='block  w-[70px] h-[70px] bg-t-black rounded-[50%] flex items-center justify-center'>
              <FontAwesomeIcon icon={faCircleRight} className='text-t-white text-center hover:text-t-yellow transition duration-700 ease-in-out text-[75px] ' />
            </button>
        </div>
      </div>
      </Swiper>
      

    </>
  )
}
