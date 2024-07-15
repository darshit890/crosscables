import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Offers = () => {
  return (
    <div className='min-h-screen p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white'>
      {/* Gradient circles in corners */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="z-10 flex min-h-[8rem] items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Offers</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
      <div className="flex justify-center relative z-10">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScGCRZzx4x_a8LqrMzHLZUISEF8fiz06uh0quuWP45I6zt8lw/viewform?embedded=true&usp=embed_googleplus" 
          allowFullScreen 
          width={700} 
          height={1000}
        ></iframe>
      </div>
      <p className="text-xl text-center mt-10 text-blue-800 relative z-10">
        *Note: By submitting in this form you will get a chance to become a VIP customer of our firm. Which will open the gate to many additional perks.
      </p>
    </div>
  )
}

export default Offers