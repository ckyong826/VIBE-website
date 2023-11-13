"use client";

import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { racing_sans_one } from '../components/useFont';
import { FadeDownVariants } from '../components/useAnimation';
import CartItem from '../components/CartComponent';

export default function Cart(){
  return (
    <section className='block w-screen truncate flex flex-row select-none pt-[110px] cursor-default'>
      {/* Cart */}
      <motion.div className='flex flex-col ml-[5%] w-[60%] h-[100%] pt-[20px] justify-start items-start'>
        {/* TopBar */}
        <motion.div 
        variants={FadeDownVariants}
        initial="hidden"
        animate="visible"
        className='flex flex-row w-[100%] h-[10%] justify-between items-center'>
          <div>
            <FontAwesomeIcon icon={faReply} className='w-[40px] h-[40px]'/>
          </div>
          <div className='text-[45px]'>
            Cart
          </div>
          <div className={racing_sans_one.className}>
            <div className='flex flex-row items-center'>
              <h2 className='text-[40px]'>8</h2>
              <p className='text-[20px] translate-y-[8px]'>&nbsp; Items</p>
            </div>
          </div>
        </motion.div>
        {/* Cart Item */}
        <CartItem/>
      </motion.div>
      {/* Check Out */}
    </section>
  )
}

