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
      <div className="border-t border w-full"></div>
      <section className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-around items-start py-8 md:py-16 lg:py-20 px-4 sm:px-6 mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <ul>
              <Image src={'/logo1.jpg'} alt="" width={130} height={60} className="mx-auto md:mx-0 mb-4" />
              <div className="flex gap-4 md:gap-6 pb-5 justify-center md:justify-start">
                <Link href={"https://wa.me/9898222345"}><FaWhatsapp className="text-xl md:text-2xl cursor-pointer hover:text-green-600 transition-colors duration-300" /></Link>
                <Link href={"https://x.com/TossCables"}><FaXTwitter className="text-xl md:text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-300" /></Link>
              </div>
            </ul>
          </div>
          <div className="p-3 md:p-5 mb-6 md:mb-0 text-center md:text-left">
            <ul>
              <p className="font-bold text-lg md:text-xl lg:text-2xl pb-2 md:pb-4">Quick Links</p>
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="flex flex-col text-gray-500 text-xs md:text-sm lg:text-md pb-1 md:pb-2 font-semibold hover:text-primary cursor-pointer transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="p-3 md:p-5 text-center md:text-left">
            <ul>
              <p className="font-bold text-lg md:text-xl lg:text-2xl pb-2 md:pb-4">Legal</p>
              {["Privacy Policy", "Terms & Conditions", "Refund Policy"].map((item) => (
                <li key={item} className="text-gray-500 text-xs md:text-sm lg:text-md pb-1 md:pb-2 font-semibold hover:text-primary cursor-pointer transition-colors duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center text-center py-3 md:py-4 lg:py-5 border-t border">
        <h1 className="text-gray-400 text-xs md:text-sm font-semibold">
          © 2024 Toss Cables, All rights reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;