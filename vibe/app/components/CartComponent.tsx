"use client"

import {motion} from 'framer-motion'
import All_Poster from "../../public/AllProduct.jpg"
import Image from 'next/image'
import { archivo } from './useFont'

export default function CartItem() {
  return (
    <motion.div className='w-[95%] h-[30%] mt-[20px] flex flex-row justify-between items-center bg-t-white 
                            rounded-xl'>
        <Image src={All_Poster} alt="All-Product-Poster" className="w-[20%] h-auto p-2"/>
        <div className='block flex flex-col'>
          <span className='text-[25px] h-[25px] text-t-black'>Chill Bro Tee</span>
          <div className={archivo.className}>
            <span className='text-[15px] text-[#c1c1c1]'>RM 129.00</span>
          </div>
        </div>
    </motion.div>
  )
}