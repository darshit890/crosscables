"use client"

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
const MobileNav = () => {

   const pathname = usePathname(); 

  return (
    <div className='lg:hidden'>
    <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-black'/>
            </SheetTrigger>
            <SheetContent>
                <Link href="/" className='flex items-center gap-3'>
                    <Image src="/logo.jpg" alt="logo" width={50} height={50}></Image>
                    <div>
                        <h2 className='font-style: italic font-bold text-2xl font-sans'>Toss Cables</h2>
                        <p className='text-xs sm:text-sm text-gray-500'>By Maruti Industries</p>
                    </div>
                </Link>
                
                <nav className='flex flex-col justify-center items-center gap-8 mt-11'>
                    {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-600 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                    ))}
                </nav>
            </SheetContent>
    </Sheet>
   </div>
  )
}

export default MobileNav