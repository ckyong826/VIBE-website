"use client"

import {motion} from 'framer-motion'
import All_Poster from "../../../public/AllProduct.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle,faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { archivo, racing_sans_one } from '../../components/useFont'
import { useEffect, useState } from 'react'

interface CartItemProps {
  name:string,
  price:number,
  size:string,
  quantity:number,
  image:string,
}

export default function CartItem(props:CartItemProps) {
  const [quantity, setQuantity] = useState<number>(props.quantity)
  const [price, setPrice] = useState<number>(props.price)
  const decrementQty = () => {
    quantity > 1 ? setQuantity(quantity-1) : setQuantity(1)
  }
  const incrementQty = () => {
    setQuantity(quantity+1)
  }
  useEffect(() => {
    setPrice(props.price * quantity)
  }, [quantity])

  return (
    <motion.div className='block flex flex-row w-[100%] h-[100%] justify-center items-center'>
      <div className='w-[95%] mt-[20px] flex flex-row justify-start items-center bg-t-white 
                            rounded-2xl'>
          {/* Image */}
          <div className='w-[10%]'>
            <Image src={All_Poster} alt="All-Product-Poster" className="w-[100%] aspect-square pl-2"/>
          </div>
          {/* Item Details */}
          <div className='block flex flex-col pl-4 w-[34%]'>
            <span className='text-[30px] h-[30px] text-t-black'>{props.name}</span>
            <div className={archivo.className}>
              <div className='flex flex-col'>
               <span className='text-[20px] h-[18px] text-[#c1c1c1]'>RM {props.price}</span>
               <span className='text-[20px] text-[#c1c1c1]'>{props.size}</span>
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className='flex flex-row justify-center text-center items-center w-[28%]'>
            <button onClick={decrementQty} className=''>
              <FontAwesomeIcon icon={faMinusCircle} className='w-[30px] h-[30px] text-t-black' />
            </button>
            <div className={racing_sans_one.className}>
              <div className='w-[120px] text-center text-[80px] text-t-black'>{quantity}</div>
            </div>
            <button onClick={incrementQty} className=''>
              <FontAwesomeIcon icon={faPlusCircle} className='w-[30px] h-[30px] text-t-black' />
            </button>
          </div>
          {/* Price */}
          <div className='w-[28%]'>
            <div className={racing_sans_one.className}>
              <div className='flex flex-row h-[80px] justify-center items-center pl-[10%] '>
                <div className='text-center text-[30px] self-end text-t-black'>RM</div>
                <div className=' text-center text-[80px] text-t-black'>{price}</div>
              </div>
            </div>
          </div>
    </div>
      <button className='w-[30px] h-[30px] items-center justify-center mt-[20px] pl-5'>
        <FontAwesomeIcon icon={faCircleXmark} className='w-[30px] h-[30px] text-t-white hover:text-t-yellow transition duration-700 ease-in-out' />
      </button>
    </motion.div>
  )
}