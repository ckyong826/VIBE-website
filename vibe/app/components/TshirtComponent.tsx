import Image, { StaticImageData } from 'next/image'
import { racing_sans_one } from "./useFont"
import {motion} from 'framer-motion'
import { useRouter } from 'next/navigation'

interface TshirtProps {
  alt: string;
  name: String;
  src : StaticImageData;
  price: String;
  durationCount: any;
}

export default function Tshirt(props: TshirtProps){
  const router = useRouter()
  return(

  <motion.li 
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 100 }}
  transition={{ duration: 0.5, ease: 'easeInOut' }}
  onClick={()=>router.push('/shop/[slug]')}
  className="w-[250px] h-[375px] p-[10px] pt-[20px] block flex flex-col items-center justify-center
             cursor-pointer">
    <Image src={props.src} alt={props.alt} className="aspect-square object-cover"></Image>
    <div className="text-[18px] uppercase pt-[5px] max-md:text-[16px]">{props.name}</div>
    <div className={racing_sans_one.className}>
      <div className='flex flex-row items-center translate-y-[-5px]'>
        <div className="text-[16px] max-md:text-[14px] pt-1 uppercase p">{props.price}</div>
      </div>
    </div>
  </motion.li>
  )
}