"use client"
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ProductList = () => {
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
    <div ref={componentRef} className="min-h-screen from-white to-blue-100/80 dark:from-gray-900 dark:to-blue-900 py-6 sm:py-10">
      <div className={cn(
        "max-w-7xl mx-auto flex flex-col pt-[3rem] sm:pt-[5rem] px-4 sm:px-5",
        "transition-all duration-1000 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <div className="z-10 flex min-h-[6rem] sm:min-h-[8rem] items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-white text-sm sm:text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-3 sm:px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Product List</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-5 mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-500/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Product List
          </h1>
          <Link href={"/products"}>
            <Button
              variant="link"
              className="text-sm sm:text-md lg:text-lg text-muted-foreground"
            >
              See more <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-6 sm:gap-10">
          <ProductCard
            images="/Product1.jpg"
            name="Accelarator Cable"
            smallDescription="Links the gas pedal to the throttle body, controlling fuel input and engine speed in response to driver input."
            id="1"
          />
          <ProductCard
            images="/Product2.jpg"
            name="Clutch Cable"
            smallDescription="Connects the clutch pedal to the clutch fork, enabling smooth engagement and disengagement of the clutch in manual transmission vehicles."
            id="2"
          />
          <ProductCard
            images="/Product3.jpg"
            name="Speedometer Cable"
            smallDescription="Transmits vehicle speed from the transmission to the speedometer for accurate speed readings."
            id="3"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;