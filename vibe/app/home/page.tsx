"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const FirstPage = dynamic(() => import('./components/firstpage'))
const SecondPage = dynamic(() => import('./components/secondpage'))
const ThirdPage = dynamic(() => import('./components/thirdpage'))

export default function Home(){


  return(
    <AnimatePresence>
    <div className="relative scroll-smooth overflow-y-scroll snap-y snap-mandatory h-screen scrollbar-hide cursor-default select-none">
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
    </div>
    </AnimatePresence>
  )
}