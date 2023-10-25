"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser,faBars,faClose } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../public/Logo.png'
import { useState,useEffect } from 'react'

export default function Navbar(){
  const Links = [
    {name:"HOME",link:"/"},
    {name:"SHOP",link:"/"},
    {name:"STORY",link:"/"},
    {name:"FAQs",link:"/"},
    {name:"ABOUT",link:"/"},
  ]

  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)

  const router = useRouter()
  return(
    <div className='fixed bg-[#1D1D1F]'>
      <nav className="w-screen h-[100px] flex text-t-white items-center justify-between top-0">
        <div className='pl-[50px] w-[150px] h-auto block '>
        <Image src={Logo} alt="VIBE-streetwear" className='object-scale-down items-center cursor-pointer' onClick={() => router.push('/')}/>
        </div>
        <ul className={`w-[600px] text-[30px] flex font-roboto-con font-medium items-center justify-center 
                       transition-all duration-200 ease-in-out max-lg:w-[50%] max-sm:w-screen max-lg:h-screen 
                       max-lg:block max-lg:absolute max-lg:justify-end max-lg:top-[100px] max-lg:z-[999]
                       max-lg:
                       ${isMenuOpen?'max-lg:right-0':'max-lg:right-[-100%] '}
                       `}>
          {Links.map((link,index) => {
            return(
              <Link href={link.link} key={index} className='mx-5 hover:text-t-yellow text-center transition duration-700 ease-in-out 
                                                            inline-block max-lg:w-[100%]  '>
                                          {link.name}</Link>
            )
          })}
          <Link href="/account"className='mx-5 hover:text-t-yellow transition text-center  duration-700 ease-in-out 
                                        inline-block max-lg:w-[100%] lg:hidden'>
                                          ACCOUNT</Link>
        </ul>

        <ul className='float-right pr-[2%] items-center block flex right-0'>
          <button onClick={() => router.push('/account')} className=' max-lg:hidden'>
            <FontAwesomeIcon icon={faUser} className=' mx-2 w-[20px] h-[20px] hover:text-t-yellow transition duration-700 ease-in-out' />
          </button>
          <button onClick={() => router.push('/cart')} className=''>
            <FontAwesomeIcon icon={faShoppingCart} className='mx-2 w-[20px] h-[20px] max-lg:w-[27px] max-lg:h-[27px] hover:text-t-yellow transition duration-700 ease-in-out'/>
          </button>
          <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='hidden max-lg:block'>
            <FontAwesomeIcon icon={isMenuOpen?faClose:faBars} className='mx-2 w-[30px] h-[30px] hover:text-t-yellow transition duration-700 ease-in-out' />
          </button>
        </ul>
        
     </nav>
    </div>
  )
}