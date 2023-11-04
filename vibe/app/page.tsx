import Image from "next/image"
import Home_photo from "../public/vibe-streetwear-model-homepage.jpg"
import All_Poster from "../public/AllProduct.jpg"
import { Bad_Script } from "next/font/google"

const bad_script = Bad_Script({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

export default function Home() {
  return (
    <div className="scroll-smooth overflow-y-scroll snap-y snap-mandatory h-screen scrollbar-hide cursor-default select-none">
      {/* First Page */}
      <section className="snap-center block flex flex-col h-screen pt-[100px] w-screen">
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

    {/* second page */}
      <section className="snap-center block flex flex-col h-screen w-screen cursor-default select-none ">
        <div className="flex flex-col pt-[110px] items-center">
          {/* Poster */}
          <div className="block h-[40%] w-[40%]">
            <Image
              src={All_Poster}
              alt='All-Product-Poster'
              className="aspect-video w-[100%] h-[100%] lg:rounded-[20px] object-cover"></Image>
          </div>
          {/* Title */}
          <div className="uppercase pt-[10px] text-[30px]">
            chill collection
          </div>
          {/* Description */}
          <div className={bad_script.className} >
            <div className="text-[15px]">
            With us, you don't just wear your heart on your sleeve; you wear your convictions, your passions, your stories.
            </div>
          </div>
          {/* Tshirt */}
          <section className="truncate w-screen h-[100%] bg-black">
            
          </section>
        </div>
      </section>
      
    </div>
  )
}
