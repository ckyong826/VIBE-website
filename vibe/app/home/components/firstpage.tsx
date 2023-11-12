import {motion} from 'framer-motion'
import Image from 'next/image'
import Home_photo from '../../../public/vibe-streetwear-model-homepage.jpg'
import { FadeLeftVariants,FadeRightVariants } from '@/app/components/useAnimation'


export default function FirstPage(){
  return(
    <section className="snap-start block flex flex-col h-screen pt-[100px] w-screen">
    {/* New + Image */}
    <div className="flex h-[60%] max-lg:h-[100%] flex-row justify-center items-end max-md:flex-col">
      <div className="h-[100%] flex items-end inline-block justify-end pl-[5%] translate-y-[20%]
                      max-md:h-full max-lg:hidden">
        {<motion.h1
          variants={FadeRightVariants}
          whileInView="visible"
          initial="hidden"
          exit="hidden"
          
          className="text-[220px] text-end bottom-[-100%] max-md:text-[50px] min-[1920px]:text-[300px]
                        max-xl:text-[200px] max-lg:text-[150px] ">NEW</motion.h1 >}
      </div>
      <div className="w-[2%] max-md:w-[0]"></div>
      {<motion.div
      variants={FadeLeftVariants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      className="w-[45%] h-[100%] grow truncate lg:rounded-[50px] flex items-end lg:pr-[5%]
                      max-md:w-full max-lg:rounded-0">
        <Image 
          src={Home_photo}
          alt='vibe-streetwear-model'
          className="aspect-square w-[100%] h-[100%] lg:rounded-[50px] object-cover"
          />
      </motion.div>}
    </div>
    {/* Arrival */}
    <div className="flex items-start inline-block justify-start pl-[5%] translate-y-[-20%]
                    max-md:h-full max-lg:hidden ">
        {<motion.div
        variants={FadeRightVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        className="text-[240px] text-end h-[20%]  max-md:text-[50px] min-[1920px]:text-[300px]
                        max-xl:text-[200px] max-lg:text-[150px]">ARRIVAL</motion.div>}
    </div>
  </section>
  )
}