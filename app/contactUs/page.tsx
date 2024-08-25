"use client";

import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import PageHero from "@/components/PageHero";
import SignupFormDemo from "@/components/SignupForm";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EmailLink from "@/components/EmailLink";
import { Metadata } from "next";


const Offers = () => {
  return (
    <>
      <PageHero title="Contact Us" />
      <div className="min-h-screen p-4 sm:p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white">
        {/* Gradient circles in corners */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>

        <section className="flex flex-col md:flex-row max-w-7xl mx-auto pb-10 md:pb-20">
          <motion.div
            className="flex flex-col justify-center md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <motion.p
                className="text-base md:text-xl text-muted-foreground max-w-xl font-medium text-center mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              >
                <span className="font-bold">Email:</span>{" "}
                <EmailLink
                  email="marutiindustries2424@gmail.com"
                  subject="Hello!"
                  body="I'm interested in your services."
                  className="underline"
                >
                  marutiindustries2424@gmail.com
                </EmailLink>
              </motion.p>
              <motion.p
                className="text-base md:text-xl text-muted-foreground max-w-xl font-medium text-center mx-auto pb-10 md:pb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              >
                <span className="font-bold">Phone No & Whatsapp (Owner):</span>{" "}


                <Link href={"https://wa.me/7359937115"} className="underline">7359937115</Link>, <Link href={"https://wa.me/9898222345"} className="underline">9898222345</Link>

              </motion.p>
            </div>
            <div className="flex flex-col justify-center">
              <motion.span
                className="pointer-events-none max-w-xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight md:leading-none text-transparent dark:from-white dark:to-slate-900/10 pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              >
                Get in touch for any support and inquiries.
              </motion.span>
              <motion.p
                className="text-base md:text-xl text-muted-foreground max-w-xl pt-4 font-medium text-center mx-auto pb-10 md:pb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              >
                The market-dominant information system, providing sophisticated
                instruments.
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          >
            <SignupFormDemo />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Offers;
