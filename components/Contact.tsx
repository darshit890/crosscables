import React from 'react'
import AnimatedShinyText from './magicui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import SignupCompo from './SignupCompo'

const Contact = () => {
  return (
    <>
    <section className="pt-40 body ">
    <div className="flex flex-col max-w-7xl mx-auto">
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
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 pb-4">
      Reach out to us
      </span>
      <p className="text-xl text-muted-foreground max-w-3xl  pt-4 font-medium text-center mx-auto pb-20">
      We&apos;re all ears! Talk to us about your needs, and we&apos;ll provide the best possible solution.inant information system, providing sophisticated
        instruments.
      </p>
    </div>
  </section>
  <SignupCompo />
    </>
  )
}

export default Contact