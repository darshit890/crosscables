"use client"
import React, { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { cn } from "@/lib/utils"; // Assuming you have this utility function

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={footerRef}
      className={cn(
        "transition-all duration-1000 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <footer className="bg-gray-100 pt-20 pb-12 px-4 sm:px-6 lg:px-8  ">
      <div className="max-w-7xl bg-white mx-auto border p-10 rounded-3xl">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
        <div className="mb-8 md:mb-0 text-center md:text-left">
            <ul>
              <Image src={'/logo1.jpg'} alt="" width={130} height={60} className="mx-auto md:mx-0 mb-4" />
              <div className="flex gap-4 md:gap-6 pb-5 justify-center md:justify-center">
                <Link href={"https://wa.me/9898222345"}><FaWhatsapp className="text-xl md:text-2xl cursor-pointer hover:text-green-600" /></Link>
                <Link href={"https://x.com/TossCables"}><FaXTwitter className="text-xl md:text-2xl cursor-pointer hover:text-blue-600" /></Link>
              </div>
            </ul>
          </div>
          
          <div className="flex gap-16 mb-8 lg:mb-0">
            <div className="p-3 md:p-5 mb-6 md:mb-0 text-center md:text-left">
              <ul>
                <p className="font-bold text-xl md:text-2xl pb-2 md:pb-4">Quick Links</p>
                {NAV_LINKS.map((link) => (
                  <Link href={link.href} key={link.key} className="flex flex-col text-gray-500 text-sm md:text-md pb-1 md:pb-2 font-semibold hover:text-primary cursor-pointer">
                      {link.label}
                  </Link>
                ))}
              </ul> 
            </div>
            <div className="p-3 md:p-5 text-center md:text-left">
              <ul>
                <p className="font-bold text-xl md:text-2xl pb-2 md:pb-4">Legal</p>
                {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((item) => (
                  <li key={item} className="text-gray-500 text-sm md:text-md pb-1 md:pb-2 font-semibold hover:text-primary cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>  
          </div>    
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">Copyright © 2024 Toss Cables- All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default Footer;