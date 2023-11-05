import Image from 'next/image'
import All_Poster from "../../public/AllProduct.jpg"
import { racing_sans_one } from "./font"

export default function Tshirt(){
  return(
  <div className="w-[250px] h-[375px] p-[10px] flex flex-col items-center">
    <Image src={All_Poster} alt="Chill Bro Tee" className="aspect-square "></Image>
    <div className="text-[18px] uppercase pt-[10px]">CHILL BRO TEE(black)</div>
    <div className={racing_sans_one.className}>
      <div className='flex flex-row items-center'>
        <div className="text-[12px] uppercase">RM </div>
        <div className="text-[18px] pl-1 pr-1 uppercase p"> 128.00 </div>
        <div className="text-[12px] uppercase"> MYR</div>
      </div>
    </div>
  </div>
  )
  
}