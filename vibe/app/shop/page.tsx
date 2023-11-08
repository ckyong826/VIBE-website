import PosterSlider from "../components/ShopPosterSlider"
import { bad_script} from "../components/font"

export default function Shop() {
  return (
    <section className="block flex flex-col h-screen w-screen select-none cursor-default">
      <div className="flex flex-col w-[screen] h-[50%] items-center pt-[70px]">
        <div className="h-[74%]">
        <PosterSlider/>
        </div>
        
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
        
    </section>
  )
}
