"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavbarAndHero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'PRICE LIST', href: '/priceList' },
    { label: 'OFFERS', href: '/offers' },
    { label: 'ABOUT US', href: '/aboutUs' },
    { label: 'CONTACT US', href: '/contactUs' },
  ];

  return (
    <div className="relative h-screen">
      <Image
        src="/motobike.jpg"
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Navbar */}
      <nav className="relative z-10 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className='flex items-center gap-2 sm:gap-3'>
              <Image src="/logo1.png" alt="logo" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
              <div>
                <h2 className='italic font-bold text-base sm:text-lg md:text-xl font-sans'>Toss Cables</h2>
                <p className='text-xs sm:text-sm text-yellow-100'>By Maruti Industries</p>
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium hover:font-semibold transition-all duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="hover:font-bold block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
        <div 
          className={`text-center text-white px-4 sm:px-6 lg:px-8 max-w-3xl glassmorphism p-5 sm:p-7 rounded-2xl backdrop-blur-sm bg-white/10 transition-all duration-1000 ease-in-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 text-yellow-100">
            Need Best Two Wheeler Control Cables?
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            We Are The Manufacturer of High-End Two Wheeler Control Cables.
          </h1>
          
          <Link href="/aboutUs" className="inline-block bg-primary hover:bg-primary/80 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition duration-300">
            LEARN MORE
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarAndHero;