import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div className="">
      <div className="border-t border w-full"></div>
      <section className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-around items-start py-10 md:py-20 px-4 sm:px-6 mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <ul>
              <Image src={'/logo.jpg'} alt="" width={130} height={60} className="mx-auto md:mx-0 mb-4" />
              <div className="flex gap-4 md:gap-6 pb-5 justify-center md:justify-center">
                <Link href={"https://wa.me/9898222345"}><FaWhatsapp className="text-xl md:text-2xl cursor-pointer hover:text-green-600" /></Link>
                <Link href={"https://x.com/TossCables"}><FaXTwitter className="text-xl md:text-2xl cursor-pointer hover:text-blue-600" /></Link>
              </div>
            </ul>
          </div>
          <div className="p-3 md:p-5 mb-6 md:mb-0 text-center md:text-left">
            <ul>
              <p className="font-bold text-xl md:text-2xl pb-2 md:pb-4">Quick Links</p>
              {["About", "Products", "Price List", "Offers", "Contact Us"].map((item) => (
                <li key={item} className="text-gray-500 text-sm md:text-md pb-1 md:pb-2 font-semibold hover:text-primary cursor-pointer">
                  {item}
                </li>
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
      </section>
      <div className="flex flex-col justify-center items-center text-center py-3 md:py-5 border-t border">
        <h1 className="text-gray-400 text-xs md:text-sm font-semibold">
          © 2024 Toss Cables, All rights reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;