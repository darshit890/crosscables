
import SignupFormDemo from '@/components/SignupForm'
import React from 'react'

const Offers = () => {
  return (
    <div className='min-h-screen p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white'>
      {/* Gradient circles in corners */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <h1 className="text-4xl font-bold text-center mb-8 bg-blue-900 text-white py-4 rounded-lg relative z-10">Contact Us</h1>
      
      <section className="flex flex-row max-w-7xl mx-auto  pb-20">
      <div className="flex flex-col justify-center">
        <span className="pointer-events-none max-w-xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 pb-4">
        Get in touch for any support and inquiries.
        </span>
        <p className="text-xl text-muted-foreground max-w-xl  pt-4 font-medium text-center mx-auto pb-20 ">
          The market-dominant information system, providing sophisticated
          instruments.
        </p>
      </div>
      <SignupFormDemo />
    </section>
    </div>
  )
}

export default Offers