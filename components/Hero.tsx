"use client";
import { motion } from "framer-motion";
import React from 'react'

import Link from "next/link";

import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const Hero = () => {
  return (
    <div>
      <div className="h-45">
        <HeroHighlight className="h-full w-full flex flex-col items-center justify-center gap-3">
          <h6 className="text-2xl font-semibold text-center">Need Best Two Wheeler Control Cables?</h6>
          <br />
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            We Are The {" "}
            <Highlight className="text-black dark:text-white">
            Manufacturer of High-End Two Wheeler Control
            Cables.
            </Highlight>
          </motion.h1>
          <br />
          <div className="flex gap-4">
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-primary/90 px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear">
              Our Products  
            </button>
          </div>
        </HeroHighlight>  
    </div>
  </div>
  )
}

export default Hero