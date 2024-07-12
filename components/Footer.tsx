import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="border-t w-full"></div>
      <section className="max-w-7xl mx-auto">
        <div className=" h-1/2 w-full flex md:flex-row flex-col justify-around items-start py-20 px-6 mx-auto">
          <div className="py-5 ">
            <ul>
              <p className=" font-bold text-3xl pb-6">
                NEXA<span className="text-primary">DEVS</span>
              </p>
              <div className="flex gap-6 pb-5">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className=" font-bold text-2xl pb-4">Quick Links</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                About
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                Services
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                Portfolio
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className=" font-bold text-2xl pb-4">Legal</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer">
                Refund Policy
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center text-center  py-5 border-t">
        <h1 className=" text-gray-400 font-semibold">
          © 2024 NEXADEVS, All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
