import React from "react";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-max bg-gradient-to-br from-white to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col pt-[5rem] px-5 pb-[5rem]">
        <div className="z-10 flex min-h-[8rem] items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ About us</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <div className="flex flex-row mt-10 justify-between">
          <div className="flex flex-row items-center gap-x-4">
            <Image src={"/vercel.svg"} alt="" width={75} height={75} />
            <span className="pointer-events-none max-w-xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              How it works
            </span>
          </div>
          <div className="flex flex-col max-w-2xl">
            <h4 className="text-5xl font-bold pt-1">
              Enhance productivity and build stronger customer relationship
            </h4>
            <p className="text-xl text-muted-foreground max-w-4xl pt-4 font-medium">
              Boost teamwork with shared task
            </p>
            <div className="flex flex-row gap-x-5 pt-5 ">
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-primary/90 px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;