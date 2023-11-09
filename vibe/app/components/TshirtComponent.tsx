import Image, { StaticImageData } from 'next/image'
import { racing_sans_one } from "./font"
import {motion} from 'framer-motion'
import { useState } from 'react';

interface TshirtProps {
  alt: string;
  name: String;
  src : StaticImageData;
  price: String;
  durationCount: any;
}


export default function Tshirt(props: TshirtProps){
  const durationCount = props.durationCount
  return(

  <motion.div 
  whileHover={{ scale: 1.1,transition: { duration: 0.3 ,ease: 'easeInOut' } }}
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 ,transition: { duration:  `${durationCount}`,ease: 'easeInOut' }}}
  exit={{ opacity: 0, y: 100 }}

  transition={{ duration: 0.3, ease: 'easeInOut' }}
  className="w-[250px] h-[375px] p-[10px] pt-[20px] block flex flex-col items-center justify-center
                  max-md:w-[300px] max-sm:w-[325px] max-[400px]:w-[200px]">
    <Image src={props.src} alt={props.alt} className="aspect-square object-cover"></Image>
    <div className="text-[18px] uppercase pt-[5px] max-md:text-[16px]">{props.name}</div>
    <div className={racing_sans_one.className}>
      <div className='flex flex-row items-center translate-y-[-5px]'>
        <div className="text-[16px] max-md:text-[14px] pt-1 uppercase p">{props.price}</div>
      </div>
    </div>
  </motion.div>
  )
}