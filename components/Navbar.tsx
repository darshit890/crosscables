import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import MobileNav from './MobileNav'

const Navbar = () => {

  return (
    <nav className="flex justify-between px-10 py-5 items-center">
      <Link href="/" className='flex items-center gap-3'>
        <Image src="/logo.jpg" alt="logo" width={75} height={75}></Image>
        <h2 className='font-style: italic font-bold text-2xl font-sans text-blue-900'>Toss Automobiles</h2>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-600 flexCenter cursor-pointer pb-1.5 transition-all hover:text-blue-900 hover:font-bold">
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