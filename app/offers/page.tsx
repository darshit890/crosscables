import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import PageHero from '@/components/PageHero'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Offers = () => {
  return (
    <>
    <PageHero title='Offers' />
    <div className='min-h-screen p-4 sm:p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white'>
      {/* Gradient circles in corners */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>

      <div className="flex justify-center relative z-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScGCRZzx4x_a8LqrMzHLZUISEF8fiz06uh0quuWP45I6zt8lw/viewform?embedded=true&usp=embed_googleplus"
          allowFullScreen
          className="w-full max-w-[700px] h-[500px] sm:h-[700px] md:h-[1000px]"
        ></iframe>
      </div>

      <p className="text-sm sm:text-base md:text-xl text-center mt-6 md:mt-10 text-blue-800 relative z-10 px-4">
        *Note: By submitting in this form you will get a chance to become a VIP customer of our firm. Which will open the gate to many additional perks.
      </p>
    </div>
    </>
  )
}

export default Offers