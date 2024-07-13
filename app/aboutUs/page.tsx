"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Welcome to Toss Automobiles",
    description:
      "Your premier destination for high-quality cables designed specifically for two-wheelers. With a commitment to excellence and a passion for empowering riders with reliable accessories, we strive to be your trusted partner on the road.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logo.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Safety and Performance",
    description:
      "At Toss Automobiles, we understand the importance of safety and performance when it comes to your two-wheeled adventures. That's why we offer a comprehensive range of cables meticulously crafted to meet the demanding needs of motorcycle and scooter enthusiasts.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/standard-quality-control-concept-m.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Superior Craftsmanship",
    description:
      "Our dedication to superior craftsmanship ensures that each cable is built to withstand the rigors of daily use, providing you with peace of mind and confidence on every ride. Whether you're a seasoned rider or just starting out, you can trust Toss Automobiles to deliver products that excel in both durability and functionality.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/electrical-shielded-cable-with-many-wires-generative-al.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Enthusiasts Ourselves",
    description:
      "But we're more than just a supplier of cables; we're enthusiasts ourselves. Our team is comprised of passionate riders who share your love for the open road. This firsthand experience allows us to understand the unique challenges riders face and enables us to develop cables that enhance your riding experience.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/image.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Customer Satisfaction",
    description:
      "Customer satisfaction is at the core of everything we do. From our easy-to-navigate online store to our dedicated customer support team, we're here to ensure that your experience with Toss Automobiles exceeds your expectations every step of the way.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/2149367139.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const AboutUs = () => {
  return (
    <div className="p-10 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <StickyScroll content={content} />
      <p className="text-xl text-center mt-4 text-gray-900">Thank you for choosing Toss Automobiles as your trusted source for premium cables for two-wheelers. Join us on the journey to elevate your riding experience to new heights.</p>
    </div>
  );
};

export default AboutUs;