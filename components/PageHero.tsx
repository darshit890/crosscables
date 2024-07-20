"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PageHero = ({ title }: { title: string}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'OUR COMPANY', href: '/company' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'INDUSTRY', href: '/industry' },
    { label: 'QUALITY ASSURANCE', href: '/quality' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  return (
    <div className="relative h-[50vh]">
      <Image
        src="/motobike.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Navbar */}
      <nav className="relative z-10 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src="/logo.jpg" alt="Silco Logo" width={100} height={40} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                <Link key={item.label} href={item.href} className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-[calc(40vh)]">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8  glassmorphism p-7 rounded-2xl ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageHero;