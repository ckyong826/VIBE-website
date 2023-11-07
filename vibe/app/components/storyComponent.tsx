import Image from 'next/image'
import All_Poster from "../../public/AllProduct.jpg"
import { roboto_con } from "./font"

interface StoryBoxProps {
  title: String;
  date : String;
  BigText: String;
  smallText: String;
}

export default function StoryBox(props: StoryBoxProps){
  return(
    <div className='flex flex-col justify-center h-[100%] w-[100%]'>
          <Image
              src={All_Poster}
              alt='All-Product-Poster'
              className=" trunscate w-[100%] h-[80%] sm:rounded-[20px] object-cover"/>
            <div className="flex flex-row justify-between items-center pt-2">
              <div className={`text-[${props.BigText}] pl-2 truncate w-[60%]`}>{props.title}</div>
              <div className={roboto_con.className}>
                <div className={`text-[${props.smallText}] pr-2 truncate`}>{props.date}</div>
              </div>
            </div>   
   </div>
  )
}