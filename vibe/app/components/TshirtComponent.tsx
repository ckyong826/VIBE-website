import Image, { StaticImageData } from 'next/image'

import { racing_sans_one } from "./font"

interface TshirtProps {
  alt: string;
  name: String;
  src : StaticImageData;
  price: String;
}


export default function Tshirt(props: TshirtProps){

  return(

  <div className="w-[250px] h-[375px] p-[10px] pt-[20px] block flex flex-col items-center justify-center
                  max-md:h-[500px] max-sm:w-[325px]">
    <Image src={props.src} alt={props.alt} className="aspect-square object-cover"></Image>
    <div className="text-[18px] uppercase pt-[5px] max-md:text-[16px]">{props.name}</div>
    <div className={racing_sans_one.className}>
      <div className='flex flex-row items-center translate-y-[-5px]'>
        <div className="text-[16px] max-md:text-[14px] pt-1 uppercase p">{props.price}</div>
      </div>
    </div>
  </div>
  )
  
}