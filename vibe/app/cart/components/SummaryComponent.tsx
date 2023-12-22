import {motion} from 'framer-motion'
import { archivo } from '@/app/components/useFont'

export default function Summary(){
  return(
    <motion.div className='flex fixed right-[5%] w-[25%] h-[76%] pt-[10px] justify-center items-start'>
      <div className='flex flex-col w-[100%] h-[100%] bg-t-white rounded-3xl justify-start items-center'>
        {/* Title */}
        <span className='text-[30px] h-[45px] pt-[10px] text-t-black'>Summary</span>
        {/* Divider */}
        <div className='w-[90%] h-[2px] bg-[#c1c1c1] mt-[10px]'></div>
        {/* Subtotal */}
        <div className='h-[45%] bg-t-black w-[85%] mt-[20px] '>

        </div>
        {/* Give Code */}
        <div className='justify-self-start  h-[25px] w-[80%]'>
          <div className={archivo.className}>
            <span className='text-[15px] text-t-black'>Give Code</span>
          </div>
        </div>
        {/* Input Code*/}
        <div className='w-[82%]'>
          <div className={archivo.className}>
            <input type='text' placeholder="Any Promo Code?"
                   className=' rounded-lg focus:ring-2 ring-1 ring-inset ring-gray-300
                               placeholder:text-t-grey focus:ring-1 focus:ring-inset focus:ring-gray-200
                                py-3 pl-3 pr-3 text-gray-500 w-[100%] h-[100%] text-[12px]'></input>
          </div>
        </div>
        {/* Divider */}
        <div className='w-[90%] h-[2px] bg-[#c1c1c1] mt-[10px]'></div>
        {/* Total */}
        <div className='justify-self-start pt-2 h-[25px] w-[80%] flex flex-row justify-between'>
         <span className='text-[18px] text-t-black'>Total</span>
         <div>
            <span className=' text-[18px] text-t-black'>RM</span>
            <span className=' text-[18px] text-t-black'>100</span>
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