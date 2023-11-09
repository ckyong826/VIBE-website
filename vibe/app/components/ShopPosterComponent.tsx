import Image, { StaticImageData } from 'next/image'

interface PosterProps {
  alt: string;
  name: String;
  src : StaticImageData;
}

export default function ShopPoster (props: PosterProps){
  return(

      <div className="block h-[70%] w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%] max-md:h-[80%]
                          max-sm:h-[90%]">
        <Image
            src={props.src}
              alt={props.alt}
              className="aspect-video trunscate w-[100%] h-[100%] sm:rounded-[20px] object-cover"/>
      </div>         
  )
}