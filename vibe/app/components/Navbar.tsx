"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser,faBars,faClose } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../public/Logo.png'
import { useState} from 'react'

export default function Navbar(){
  const Links = [
    {name:"HOME",link:"/"},
    {name:"SHOP",link:"/shop"},
    {name:"STORY",link:"/story"},
    {name:"FAQs",link:"/faqs"},
    {name:"ABOUT",link:"/about"},
  ]

  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)

  const router = useRouter()
  return(
    <div className='fixed bg-t-black select-none z-[200]'>
      <nav className="w-screen h-[100px] flex text-t-white items-center justify-between top-0">
        <div className='w-[130px] h-auto block translate-x-[30%] max-md:translate-x-[20%]'>
        <Image src={Logo} alt="VIBE-streetwear" className='object-scale-down items-center cursor-pointer' onClick={() => router.push('/')}/>
        </div>
        <ul className={`w-[600px] text-[30px] flex font-roboto-con font-medium items-center justify-center 
                       transition-all duration-200 ease-in-out max-lg:w-screen max-lg:h-screen  max-lg:pt-[100px]
                       max-lg:block max-lg:absolute max-lg:justify-end max-lg:top-0 max-lg:z-[999]
                       max-lg:bg-t-black
                       ${isMenuOpen?'max-lg:right-0':'max-lg:right-[-100%] '}
                       `}>
          {Links.map((link,index) => {
            return(
              <Link href={link.link}
                    onClick={()=>setIsMenuOpen(false)}
                    key={index}  
                    className='mx-5 hover:text-t-yellow text-center transition duration-700 ease-in-out 
                                inline-block max-lg:w-[100%] max-lg:mx-0 truncate max-lg:hover:none'>
                                          {link.name}
                                          </Link>
                                          
                                          
            )
          })}
          <Link href="/account" onClick={()=>setIsMenuOpen(false)} className='mx-5 hover:text-t-yellow transition text-center  duration-700 ease-in-out 
                                        inline-block max-lg:w-[100%] lg:hidden max-lg:mx-0 '>
                                          ACCOUNT</Link>
        </ul>

        <ul className='flex w-[150px] justify-center items-center max-lg:justify-end max-lg:pr-[10px]'>
          <button onClick={() => router.push('/account')} className=' max-lg:hidden'>
            <FontAwesomeIcon icon={faUser} className=' mx-2 w-[20px] h-[20px] hover:text-t-yellow transition duration-700 ease-in-out' />
          </button>
          <button onClick={() => router.push('/cart')} className=''>
            <FontAwesomeIcon icon={faShoppingCart} className='mx-2 w-[20px] h-[20px] max-lg:w-[27px] max-lg:h-[27px] hover:text-t-yellow transition duration-700 ease-in-out'/>
          </button>
          <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className='hidden max-lg:block z-[999]' >
            <FontAwesomeIcon icon={isMenuOpen?faClose:faBars} className='mx-2 w-[30px] h-[30px] hover:text-t-yellow transition duration-700 ease-in-out' />
          </button>
        </ul>
        
     </nav>
    </div>
  )
}