"use client"

import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"

const PriceList = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <div className="z-10 flex min-h-[8rem] items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Price List</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 129.4118%; px-10">
          <iframe src="https://drive.google.com/file/d/1PmJX25tP7DV-xRy3jA_H4QyfpQRduCz0/preview?usp=embed_googleplus" className="top: 0; left: 0; position: absolute; border: 0;" allowFullScreen width={600} height={300}></iframe>
        </div>
          
          <div className="px-10">
            <h2 className="text-3xl font-semibold mb-4">PRICE LIST AS OF 2024</h2>
            <p className="text-lg mb-4">
              We understand that value for money is a top priority for our esteemed customers, and
              we&apos;re proud to offer an irresistible deal. With our product, you receive top-notch quality and
              enjoy substantial savings compared to similar options in the market.
            </p>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-primary/90 px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear">
              Our Products  
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceList