import {motion} from 'framer-motion'
import { archivo,racing_sans_one } from '@/app/components/useFont'

export default function Summary(){
  const price=[
    {
      name:'Subtotal',
      price:100
    },
    {
      name:'Shipping',
      price:10
    },
    {
      name:'Tax',
      price:0
    }
  ]
  return(
    <motion.div className='flex fixed right-[5%] w-[25%] h-[76%] pt-[10px] justify-center items-start'>
      <div className='flex flex-col w-[100%] h-[100%] bg-t-white rounded-3xl justify-start items-center'>

        {/* Title */}
        <span className='text-[30px] h-[45px] pt-[10px] text-t-black'>Summary</span>

        {/* Divider */}
        <div className='w-[90%] h-[2px] bg-[#c1c1c1] mt-[10px]'></div>

        {/* Subtotal */}
        <div className='grow w-[85%] text-t-black mt-[20px] '>
          {price.map((item,index) => {
            return(
              <div key={index} className='flex flex-row justify-between w-[100%] h-[30px]'>
                <span className='text-[20px]'>{item.name}</span>
                <span className='text-[15px]'>RM {item.price}</span>
              </div>
            )
          })}
        </div>

        {/* Code */}
        <div className='w-[80%] mt-2 h-[70px]'>
            {/* Give Code */}
          <div className='justify-self-start pl-2 h-[25px] w-[80%]'>
            <div className={archivo.className}>
              <span className='text-[15px] text-t-black'>Give Code</span>
            </div>
          </div>
          {/* Input Code*/}
          <div className='w-[100%]'>
            <div className={archivo.className}>
              <input type='text' placeholder="Any Promo Code?"
                    className=' rounded-lg focus:ring-2 ring-1 ring-inset ring-gray-300
                                placeholder:text-t-grey focus:ring-1 focus:ring-inset focus:ring-gray-200
                                  py-3 pl-3 pr-3 text-gray-500 w-[100%] h-[100%] text-[12px]'></input>
            </div>
          </div>
        </div>
        
        {/* Total Column */}
        <div className='w-[90%] h-[135px] flex flex-col items-center'>
            {/* Divider */}
          <div className='w-[100%] h-[2px] bg-[#c1c1c1] mt-[10px]'></div>
          {/* Total */}
          <div className='justify-self-start pt-2 h-[25px] w-[90%] flex flex-row justify-between'>
          <span className='text-[18px] text-t-black'>Total</span>
            <div>
                <span className=' text-[18px] text-t-black'>RM</span>
                <span className=' text-[18px] text-t-black'>100</span>
            </div>
          </div>
        </div>
        
        {/* Button */}
        <div className='w-[95%] h-[60px] justify-self-end bottom-2 absolute'>
          <button className='w-[100%] h-[100%] rounded-2xl bg-t-black text-[20px] text-t-white uppercase'>Check Out</button>
        </div>
      </div>
    </motion.div>
  )
} 