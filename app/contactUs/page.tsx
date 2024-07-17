import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import SignupFormDemo from '@/components/SignupForm'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Offers = () => {
  return (
    <div className='min-h-screen p-4 sm:p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white'>
      {/* Gradient circles in corners */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="z-10 flex min-h-[8rem] items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Contact Us</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto pb-10 md:pb-20">
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            <p className="text-base md:text-xl text-muted-foreground max-w-xl font-medium text-center mx-auto">
              <span className='font-bold'>Email:</span> sunit.sadhwani@gmail.com, marutispare@gmail.com
            </p>
            <p className="text-base md:text-xl text-muted-foreground max-w-xl font-medium text-center mx-auto pb-10 md:pb-20">
              <span className='font-bold'>Phone No & Whatsapp (Owner):</span> 7778017801, 9898222345
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <span className="pointer-events-none max-w-xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-3xl md:text-5xl font-semibold leading-tight md:leading-none text-transparent dark:from-white dark:to-slate-900/10 pb-4">
              Get in touch for any support and inquiries.
            </span>
            <p className="text-base md:text-xl text-muted-foreground max-w-xl pt-4 font-medium text-center mx-auto pb-10 md:pb-20">
              The market-dominant information system, providing sophisticated instruments.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <SignupFormDemo />
        </div>
      </section>
    </div>
  )
}

export default Offers