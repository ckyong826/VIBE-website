"use client"

import React, { useRef, useState,useEffect,useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft,faCircleRight } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css';
import 'swiper/css/navigation';
import '.././globals.css'
import { Navigation} from 'swiper/modules';
import TshirtComponent from './TshirtComponent';
import All_Poster from "../../public/AllProduct.jpg"

export default function Slider() {
  const tshirts = [
    {alt:"CHILL BRO TEE",name:"Chill Bro Tee(black)",src:All_Poster,price:"RM 129.00 MYR"},
    {alt:"CHILL BRO TEE",name:"Chill Bro Tee(black)",src:All_Poster,price:"RM 129.00 MYR"},
    {alt:"CHILL BRO TEE",name:"Chill Bro Tee(black)",src:All_Poster,price:"RM 129.00 MYR"},
    {alt:"CHILL BRO TEE",name:"Chill Bro Tee(black)",src:All_Poster,price:"RM 129.00 MYR"},
    {alt:"CHILL BRO TEE",name:"Chill Bro Tee(black)",src:All_Poster,price:"RM 129.00 MYR"},
    {alt:"CHILL BRO TEE",name:"Chill Bro Tee(black)",src:All_Poster,price:"RM 129.00 MYR"},
  ]
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={0}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
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
                            pl-[20px] pr-[20px] ">
        {tshirts.map((tshirt,index) => (
          <SwiperSlide key={index}>
            <TshirtComponent alt={tshirt.alt} name={tshirt.name} src={tshirt.src} price={tshirt.price} />
          </SwiperSlide>
        ))}
      <div className='absolute flex items-center justify-center w-screen  z-[100]'>
        <div className='flex flex-row  justify-between w-[99%]'>
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
  );
}