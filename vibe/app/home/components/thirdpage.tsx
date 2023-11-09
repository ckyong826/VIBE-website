import StoryBox from "../../components/storyComponent";
import Link from "next/link"
import {motion} from "framer-motion"
import { FadeRightVariants,FadeLeftVariants } from "@/app/components/hooks/useAnimation";

export default function ThirdPage(){
  return(
    <section  className="snap-start block flex flex-col h-screen pt-[50px] w-screen justify-center items-center">
        {/* Top Column */}
          {<motion.div 
          variants={FadeRightVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          className="w-[95%] h-[50%]">
            <StoryBox BigText={"text-[30px]"} smallText={"text-[18px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </motion.div>}
        {/* Bottom Column */}
        {<motion.div
        variants={FadeLeftVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        className="w-[95%] h-[40%] flex flex-row justify-center items-center">
          <div className="w-[50%] h-[100%] pr-5">
            <StoryBox BigText={"text-[20px]"} smallText={"text-[15px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </div>
          <div className="w-[25%] h-[100%] pr-5">
            <StoryBox BigText={"text-[20px]"} smallText={"text-[15px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </div>
          <div className="w-[20%] h-[100%] pr-5">
            <StoryBox BigText={"text-[20px]"} smallText={"text-[15px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </div>
          <Link href={"/story"} className="text-t-black uppercase h-[90%] w-[4%] bg-t-white  rounded-l-2xl flex items-center justify-center
                          cursor-pointer hover:bg-t-yellow transition duration-700 ease-in-out">
            <span className="rotate-90 text-[30px]">more</span>
          </Link>
        </motion.div>}
      </section>
  )
}