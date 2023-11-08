import Image from "next/image"
import Home_photo from "../public/vibe-streetwear-model-homepage.jpg"
import All_Poster from "../public/AllProduct.jpg"
import { bad_script} from "./components/font"
import Slider from "./components/TshirtSlider"
import StoryBox from "./components/storyComponent";
import ShopPoster from "./components/ShopPosterComponent"

export default function Home() {
  return (
    <div className="scroll-smooth overflow-y-scroll snap-y snap-mandatory h-screen scrollbar-hide cursor-default select-none">
      {/* First Page */}
      <section className="snap-start block flex flex-col h-screen pt-[100px] w-screen">
        {/* New + Image */}
        <div className="flex h-[60%] max-lg:h-[100%] flex-row justify-center items-end max-md:flex-col">
          <div className="h-[100%] flex items-end inline-block justify-end pl-[5%] translate-y-[20%]
                          max-md:h-full max-lg:hidden">
            <h1 className="text-[220px] text-end bottom-[-100%] max-md:text-[50px] min-[1920px]:text-[300px]
                            max-xl:text-[200px] max-lg:text-[150px]">NEW</h1>
          </div>
          <div className="w-[2%] max-md:w-[0]"></div>
          <div className="w-[45%] h-[100%] grow truncate lg:rounded-[50px] flex items-end lg:pr-[5%]
                          max-md:w-full max-lg:rounded-0 ">
            <Image 
              src={Home_photo}
              alt='vibe-streetwear-model'
              className="aspect-square w-[100%] h-[100%] lg:rounded-[50px] object-cover"
              />
          </div>
        </div>
        {/* Arrival */}
        <div className="flex items-start inline-block justify-start pl-[5%] translate-y-[-20%]
                        max-md:h-full max-lg:hidden ">
            <h1 className="text-[240px] text-end  max-md:text-[50px] min-[1920px]:text-[300px]
                            max-xl:text-[200px] max-lg:text-[150px]">ARRIVAL</h1>
        </div>
      </section>

    {/* second page Shop*/}
      <section className="snap-start block flex flex-col h-screen w-screen ">
        {/* Poster */}
        <div className="flex flex-col h-[50%] pt-[110px] items-center">
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
          </div>
        {/* Tshirt Slider*/}
        <Slider/>
      </section>
      
      {/* Third Page Story */}
      <section className="snap-start block flex flex-col h-screen pt-[80px] w-screen justify-center items-center">
        {/* Top Column */}
          <div className="w-[95%] h-[50%]">
            <StoryBox BigText={"text-[30px]"} smallText={"text-[18px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </div>
        {/* Bottom Column */}
        <div className="w-[95%] h-[40%] flex flex-row justify-center items-center">
          <div className="w-[50%] h-[100%] pr-5">
            <StoryBox BigText={"text-[20px]"} smallText={"text-[15px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </div>
          <div className="w-[25%] h-[100%] pr-5">
            <StoryBox BigText={"text-[20px]"} smallText={"text-[15px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </div>
          <div className="w-[20%] h-[100%] pr-5">
            <StoryBox BigText={"text-[20px]"} smallText={"text-[15px]"} title={"The soft launch of our brand, VIBE !"} date={"SUN, 9 April 2023"}/>
          </div>
          <div className="text-t-black uppercase h-[90%] w-[4%] bg-t-white  rounded-l-2xl flex items-center justify-center
                          cursor-pointer hover:bg-t-yellow transition duration-700 ease-in-out">
            <span className="rotate-90 text-[30px]">more</span>
          </div>
        </div>
      </section>

      {/* Fourth Page FaQ*/}
    </div>
  )
}
