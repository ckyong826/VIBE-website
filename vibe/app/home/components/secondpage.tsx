import React from "react";
import All_Poster from "../../../public/AllProduct.jpg"
import { bad_script } from "../../components/font"
import Slider from "../../components/TshirtSlider"
import ShopPoster from "../../components/ShopPosterComponent"
import {motion} from "framer-motion"
import { FadeDownVariants,FadeUpVariants } from "@/app/components/hooks/useAnimation";


export default function SecondPage(){
  return(
    <section  className="snap-start block flex flex-col h-screen w-screen ">
        {/* Poster */}
        {<motion.div 
        variants={FadeDownVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        className="flex flex-col h-[35%] mt-[100px] items-center">
        <ShopPoster alt="All-Product-Poster" name="chill collection" src={All_Poster} />
        {/* Title */}
        <div className="uppercase pt-[10px] text-[30px] text-center max-md:text-[20px]">
        chill collection
        </div>
          {/* Description */}
          <div className={bad_script.className} >
            <div className="text-[15px] text-center max-md:text-[10px]">
            With us, you don't just wear your heart on your sleeve; you wear your convictions, your passions, your stories.
            </div>
          </div>
        </motion.div>}
        {/* Tshirt Slider*/}
        <motion.div 
        className="h-[45%]">
        <Slider/>
        </motion.div>
        
      </section>
  )
}