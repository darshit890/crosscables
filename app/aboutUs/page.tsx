"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

const content = [
  {
    title: "Welcome to Toss Cables",
    description:
      "Your premier destination for high-quality cables designed specifically for two-wheelers. With a commitment to excellence and a passion for empowering riders with reliable accessories, we strive to be your trusted partner on the road.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logo2.jpg"
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
      "At Toss cables, we understand the importance of safety and performance when it comes to your two-wheeled adventures. That's why we offer a comprehensive range of cables meticulously crafted to meet the demanding needs of motorcycle and scooter enthusiasts.",
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
      "Our dedication to superior craftsmanship ensures that each cable is built to withstand the rigors of daily use, providing you with peace of mind and confidence on every ride. Whether you're a seasoned rider or just starting out, you can trust Toss Cables to deliver products that excel in both durability and functionality.",
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
      "Customer satisfaction is at the core of everything we do. From our easy-to-navigate online store to our dedicated customer support team, we're here to ensure that your experience with Toss Cables exceeds your expectations every step of the way.",
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
    <>
      <PageHero title="About Us" />
      <div className="p-4 md:p-10 bg-gradient-to-br from-blue-100 to-white text-gray-900">
        <div className="md:hidden space-y-12">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="mb-4">{item.description}</p>
              <div className="h-64 w-full rounded-lg overflow-hidden">
                {item.content}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:block">
          <StickyScroll content={content} />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="text-lg md:text-xl text-center mt-8 text-blue-800"
        >
          Thank you for choosing Toss Cables as your trusted source for premium cables for two-wheelers. Join us on the journey to elevate your riding experience to new heights.
        </motion.p>
      </div>
    </>
  );
};


export default AboutUs;