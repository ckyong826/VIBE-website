"use client"

import React, { useRef, useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
                            pl-[20px] pr-[20px] ">
        {tshirts.map((tshirt,index) => (
          <SwiperSlide key={index}>
            <TshirtComponent alt={tshirt.alt} name={tshirt.name} src={tshirt.src} price={tshirt.price} />
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div> 
        <div className="swiper-button-prev"></div>
      </Swiper>
    </>
  );
}