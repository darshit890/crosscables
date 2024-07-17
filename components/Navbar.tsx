import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-5 items-center">
      <Link href="/" className='flex items-center gap-2 sm:gap-3'>
        <Image src="/logo.jpg" alt="logo" width={50} height={50} className="w-12 h-12 sm:w-16 sm:h-16 md:w-[75px] md:h-[75px]" />
        <div>
          <h2 className='font-style: italic font-bold text-lg sm:text-xl md:text-2xl font-sans text-blue-900'>Toss Cables</h2>
          <p className='text-xs sm:text-sm text-gray-500'>By Maruti Industries</p>
        </div>
      </Link>
      
      <ul className="hidden h-full gap-6 md:gap-8 lg:gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="text-sm md:text-base text-gray-600 flexCenter cursor-pointer pb-1.5 transition-all hover:text-blue-900 hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      
      <div className='lg:hidden'>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar