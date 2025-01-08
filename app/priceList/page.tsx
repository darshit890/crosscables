ki"use client"

import React from "react"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import PageHero from "@/components/PageHero"
import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"


const PriceList = () => {
  return (
    <>
      <PageHero title="Price List" />
      <motion.div 
        className="bg-gradient-to-br from-blue-100 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="px-4 sm:px-10 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            >
              <iframe src="https://drive.google.com/file/d/1J-SnLJ4GOUjGX3wV4TzX16pjTSk7SqR5/preview"  allowfullscreen
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] lg:w-[400px] rounded-lg shadow-lg"
              
              ></iframe>
            </motion.div>
            
            <motion.div 
              className="px-4 sm:px-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">PRICE LIST AS OF 2025</h2>
              <p className="text-base sm:text-lg mb-4">
                We understand that value for money is a top priority for our esteemed customers, and
                we&apos;re proud to offer an irresistible deal. With our product, you receive top-notch quality and
                enjoy substantial savings compared to similar options in the market.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              >
                <Link href={"/products"}>
                  <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-primary/90 px-6 sm:px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear w-full sm:w-auto">
                    Our Products
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default PriceList