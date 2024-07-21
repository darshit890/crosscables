"use client"
import React, { useEffect, useRef, useState } from 'react'
import AnimatedShinyText from './magicui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import SignupCompo from './SignupCompo'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <>
      <section 
        ref={contactRef}
        className={cn(
          "pt-10 body transition-all duration-1000 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="z-10 flex min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-xs sm:text-sm md:text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-2 sm:px-3 md:px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Get in Touch</span>
                <ArrowRightIcon className="ml-1 size-2 sm:size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-none text-transparent dark:from-white dark:to-slate-900/10 pb-2 sm:pb-4">
            Reach out to us
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl pt-2 sm:pt-4 font-medium text-center mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            We&apos;re all ears! Talk to us about your needs, and we&apos;ll provide the best possible solution. Our dominant information system provides sophisticated instruments.
          </p>
        </div>
      </section>
      <SignupCompo />
    </>
  )
}

export default Contact