export default function Bottombar() {
  const tagline = [
    "rm58 on 2nd item",
    "wear the true vibe",
    "chill bro",
    "be yourself",
    "free shipping over rm250",
    "style yourself",
    "premium collection",
    "VIBE",
  ]
  return (
    <div className="w-screen select-none h-[5%] text-[17px] cursor-default font-racing bg-[#BDF704] text-[#1D1D1F] flex justify-between truncate uppercase fixed bottom-0 items-center hover:paused">
      <div className="flex inline-block animate-infinite-marquee">
        {tagline.map((tag,index) => {
          return(
            <h1 className="mx-[40px]" key={index}>{tag}</h1>
          )
        })}
         {tagline.map((tag,index) => {
          return(
            <h1 className="mx-[40px]" key={index}>{tag}</h1>
          )
        })}
      </div>
      <div className=" flex inline-block animate-infinite-marquee">
      {tagline.map((tag,index) => {
          return(
            <h1 className="mx-[40px]" key={index}>{tag}</h1>
          )
        })}
         {tagline.map((tag,index) => {
          return(
            <h1 className="mx-[40px]" key={index}>{tag}</h1>
          )
        })}
      </div>
    </div>
  )
}


