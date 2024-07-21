"use client"
import React, { useState, useEffect, useRef } from "react";
import SignupFormDemo from "./SignupForm";
import { cn } from "@/lib/utils";

const SignupCompo = () => {
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
    <section 
      ref={componentRef}
      className="flex flex-col lg:flex-row max-w-7xl mx-auto pb-10 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div 
        className={cn(
          "flex flex-col justify-center lg:w-1/2 mb-8 lg:mb-0 transition-all duration-1000 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <span className="pointer-events-none max-w-xl whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-none text-transparent dark:from-white dark:to-slate-900/10 pb-2 sm:pb-4 mx-auto">
          Get in touch for any support and inquiries.
        </span>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl pt-2 sm:pt-4 font-medium text-center mx-auto pb-6 sm:pb-10 lg:pb-0">
          The market-dominant information system, providing sophisticated
          instruments.
        </p>
      </div>
      <div 
        className={cn(
          "lg:w-1/2 transition-all duration-1000 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          "delay-300"
        )}
      >
        <SignupFormDemo />
      </div>
    </section>
  );
};

export default SignupCompo;