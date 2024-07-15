import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import PaymentForm from './_component.tsx/PaymentForm'

const PayOnlinePage = () => {
  return (
    <div className='flex flex-col justify-center mx-auto max-w-7xl'>
        <div className="z-10 flex min-h-[5rem] items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Get in Touch</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>

      <h1 className='pointer-events-none mt-5 mb-10 whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>Pay Online</h1>
      <PaymentForm />
    </div>
  )
}

export default PayOnlinePage