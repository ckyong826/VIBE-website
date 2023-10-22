"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser,faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../public/Logo.png'

export default function Navbar(){
  const router = useRouter()
  return(
    <div className='h-[100px] fixed'>
      <nav className="w-screen h-[100%] flex text-t-white items-center justify-between">
        <div className='pl-[30px] w-[150px] h-auto '>
        <Image src={Logo} alt="VIBE-streetwear" className='object-scale-down items-center cursor-pointer' onClick={() => router.push('/')}/>
        </div>
        <ul className=' w-[600px] text-[30px] flex font-roboto-con font-medium items-center justify-center max-lg:hidden'>
          <Link href="/"     className='mx-5 hover:text-t-yellow transition duration-700 ease-in-out inline-block'>HOME</Link>
          <Link href="/shop" className='mx-5 hover:text-t-yellow transition duration-700 ease-in-out inline-block'>SHOP</Link>
          <Link href="/story"className='mx-5 hover:text-t-yellow transition duration-700 ease-in-out inline-block'>STORY</Link>
          <Link href="/faqs" className='mx-5 hover:text-t-yellow transition duration-700 ease-in-out inline-block'>FAQs</Link>
          <Link href="/about"className='mx-5 hover:text-t-yellow transition duration-700 ease-in-out inline-block'>ABOUT</Link>
        </ul>

        <ul className=' float-right pr-[2%] items-center block'>
          <button onClick={() => router.push('/account')} className='max-lg:hidden'>
            <FontAwesomeIcon icon={faUser} className=' mx-2 w-[20px] h-[20px] hover:text-t-yellow transition duration-700 ease-in-out' />
          </button>
          <button onClick={() => router.push('/cart')} className='max-lg:hidden'>
            <FontAwesomeIcon icon={faShoppingCart} className='mx-2 w-[20px] h-[20px] hover:text-t-yellow transition duration-700 ease-in-out' onClick={() => router.push('/cart')}/>
          </button>
        </ul>
        <div className='hidden max-lg:block'>
          <FontAwesomeIcon icon={faBars} className='mx-6 w-[20px] h-[20px] max-lg:w-[40px] max-lg:h-[40px] hover:text-t-yellow transition duration-700 ease-in-out' />
        </div>
     </nav>
    </div>
  )
}