"use client"
import React, { useState, useEffect, useRef } from "react";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="min-h-max bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col pt-[2rem] sm:pt-[3rem] px-4 sm:px-5 pb-[3rem] sm:pb-[5rem]">
        <div className="z-10 flex min-h-[6rem] sm:min-h-[8rem] items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-white text-sm sm:text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-3 sm:px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ About us</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-6 sm:mt-10 justify-between gap-10">
          <div 
            className={cn(
              "flex flex-row items-center gap-x-2 sm:gap-x-4 justify-center mb-4 lg:mb-0 transition-all duration-1000 ease-in-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
            )}
          >
            <Image src={"/logo1.jpg"} alt="" width={50} height={50} className="w-12 h-12 sm:w-[75px] sm:h-[75px]" />
            <span className="pointer-events-none max-w-xl whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-2xl sm:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              How it works
            </span>
          </div>
          <div 
            className={cn(
              "flex flex-col max-w-2xl lg:items-start items-center mx-auto transition-all duration-1000 ease-in-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            )}
          >
            <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold pt-1 lg:text-left text-center">
              Enhance productivity and build stronger customer relationship
            </h4>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl pt-2 sm:pt-4 font-medium text-center lg:text-left">
              Boost teamwork with shared task
            </p>
            <div className="flex flex-row gap-x-5 pt-4 sm:pt-5">
              <Link href={"/aboutUs"}>
                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-primary/90 px-6 sm:px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear text-sm sm:text-base">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;