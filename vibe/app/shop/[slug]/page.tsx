"use client";

import Image from 'next/image';
import { motion } from 'framer-motion'
import All_Poster from "../../../public/AllProduct.jpg"
import Model_Poster from "../../../public/vibe-streetwear-model-homepage.jpg"
import { useState } from 'react';
import { racing_sans_one, roboto_con_bold,roboto_con } from '@/app/components/useFont';
import { DelayVariants,  itemFadeInVariants } from '@/app/components/useAnimation';


interface ProductProps {
  id: String;
  name: String;
  price: String;
  color: Array<String>;
  size: Array<String>;
  quantity: Number;
  description: String;
}

export default function Product(props: ProductProps){
  const Gallery =[
    {src:All_Poster,alt:"All-Product-Poster"},
    {src:Model_Poster,alt:"All-Product-Poster"},
    {src:All_Poster,alt:"All-Product-Poster"},
    {src:Model_Poster,alt:"All-Product-Poster"},
    {src:All_Poster,alt:"All-Product-Poster"},
    {src:Model_Poster,alt:"All-Product-Poster"},
  ]

  const colors=[
    {color:"black"},
    {color:"t-white"},
    {color:"red-500"},
    {color:"t-yellow"},
  ]

  const sizes=[
    {size:"S"},
    {size:"M"},
    {size:"L"},
    {size:"XL"},
  ]

  const [photo,setPhoto] = useState(Gallery[0]);
  const [selectColor,setSelectColor] = useState("");
  const [selectSize,setSelectSize] = useState("");

  return(
    <section className='scrollbar-hide truncate flex flex-row w-screen pt-[120px] select-none cursor-default'>
      {/* Gallery */}
      <motion.div
       className='flex flex-col inline-block w-[12%] h-auto cursor-pointer'>
        {Gallery.map((photo,index) => (
          <motion.div key={index} className='w-[100%] h-auto mb-3'>
            <Image onClick={() => setPhoto(photo)}
              src={photo.src}
              alt={photo.alt}
              className="aspect-square truncate w-[100%] h-[100%] object-cover"/>
          </motion.div>
        ))}
      </motion.div>

      {/* Photo */}
      <motion.div 
      variants={DelayVariants}
      className='w-[70%] h-screen ml-3'>
        <Image 
          src={photo.src}
          alt={photo.alt}
          className="aspect-video w-[100%] h-[100%] object-cover"/>
      </motion.div>

      {/* Description row */}
      <motion.ul 
      variants={DelayVariants}
      initial="hidden"
      animate="visible"
      className='flex flex-col w-[35%] items-center'>

        {/* Name */}
        <motion.div 
        variants={itemFadeInVariants}
        initial="hidden"
        animate="visible"
        className='w-[80%] h-[8%] flex flex-col uppercase text-[30px] text-start mb-2'>
          <span className='h-[40%]'>CHILL BRO TEE</span>
          <span className='h-[40%]'>(BLACK)</span>
        </motion.div>

        {/* Price */}
        <motion.div 
        variants={itemFadeInVariants}
        initial="hidden"
        animate="visible"
        className='flex w-[80%] h-[5%] uppercase justify-start items-start'>
          <div className={racing_sans_one.className}>
            <span className='text-[20px] '>RM 128.00 MYR</span>
          </div>
        </motion.div>

        {/* Color */}
        <motion.div 
        variants={itemFadeInVariants}
        initial="hidden"
        animate="visible"
        className='flex flex-col w-[80%] h-[10%] uppercase justify-start items-start'>
          <div className={roboto_con_bold.className}>
            <span className='text-[20px] mb-1 flex'>Color -&nbsp;<div className='text-t-yellow'>{selectColor===""?"SELECT COLOR":selectColor}</div></span>
            </div>
            <div className='flex flex-row w-[100%] h-[100%] mt-1'>
              {colors.map((color,index) => (
                <motion.button 
                onClick={() => {setSelectColor(color.color);console.log(selectColor)}}
                initial={{outline: "none"}}
                animate={{outline:selectColor === color.color? "3px solid #BDF704" : "none",transition: { duration: 0.2 ,ease: "easeInOut"}}}
                key={index} 
                className={`w-[30px] h-[30px] mr-2 bg-${color.color} cursor-pointer `}>
                </motion.button >
              ))}
            </div>
        </motion.div>

        {/* Size */}
        <motion.div 
        variants={itemFadeInVariants}
        initial="hidden"
        animate="visible"
        className='flex flex-col w-[80%] h-[10%] uppercase justify-start items-start'>
          <div className={roboto_con_bold.className}>
            <span className='text-[20px] mb-1 flex'>Size -&nbsp;<div className='text-t-yellow'>{selectSize===""?"SELECT SIZE":selectSize}</div></span>
            </div>
            <div className='flex flex-row w-[100%] h-[100%] mt-1'>
              {sizes.map((size,index) => (
                <motion.button 
                initial={{background: "white"}}
                onClick={() => {setSelectSize(size.size);console.log(selectSize)}}
                animate={{background:selectSize === size.size? "#BDF704" : "#F3F3F3",transition: { duration: 0.1 ,ease: "easeInOut"}}}
                key={index} 
                className={`w-[30px] h-[30px] mr-2 cursor-pointer text-t-black
                            transition duration-500 ease-in-out`}>
                             {size.size}
                </motion.button >
              ))}
            </div>
        </motion.div>

        {/* Button */}
        <motion.div 
        variants={itemFadeInVariants}
        initial="hidden"
        animate="visible"
        className='w-[80%] h-[5%] mt-2 flex justify-center items-start mb-8'>
          <motion.button 
          disabled={selectColor === "" || selectSize === "" }
          initial={{background: "#F3F3F3"}}
          whileTap={{background: "#BDF704",transition: { duration: 0.1 ,ease: "easeInOut"}}}
          className='w-[100%] h-[100%] text-t-black uppercase rounded-xl flex justify-center items-center'>
            <span className='text-[18px] text-t-black'>ADD TO CART</span>
          </motion.button>
        </motion.div>

        {/* Detail */}
        <motion.div 
        variants={itemFadeInVariants}
        initial="hidden"
        animate="visible"
        className='flex flex-col w-[80%] h-auto items-start justify-center'>
          <div className={roboto_con_bold.className}>
            <span className='text-[20px] uppercase'>DETAIL</span>
          </div>
          <div className={roboto_con.className}>
            <span className='text-[15px]'>
                100% cotton<br/>
                265GSM <br/>
            </span>
          </div>
        </motion.div>
      </motion.ul>
    </section>
  )
}