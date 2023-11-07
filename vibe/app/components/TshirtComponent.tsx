import Image from 'next/image'
import All_Poster from "../../public/AllProduct.jpg"
import { racing_sans_one } from "./font"


export default function Tshirt(){

  return(

  <div className="w-[250px] h-[375px] p-[10px] pt-[20px] block flex flex-col items-center justify-center
                  ">
    <Image src={All_Poster} alt="Chill Bro Tee" className="aspect-square object-cover"></Image>
    <div className="text-[18px] uppercase pt-[5px] max-md:text-[16px]">CHILL BRO TEE(black)</div>
    <div className={racing_sans_one.className}>
      <div className='flex flex-row items-center translate-y-[-5px]'>
        <div className="text-[16px] max-md:text-[14px] pt-1 uppercase p">RM 128.00 MYR</div>
      </div>
    </div>
  </div>
  )
  
}