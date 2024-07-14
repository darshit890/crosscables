import React from "react";
import { SignupFormDemo } from "./SignupForm";


const SignupCompo = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-7xl mx-auto  pb-20">
      <div className="flex flex-col justify-center">
        <span className="pointer-events-none max-w-xl whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 pb-4 mx-auto">
        Get in touch for any support and inquiries.
        </span>
        <p className="text-xl text-muted-foreground max-w-xl  pt-4 font-medium text-center mx-auto pb-20 ">
          The market-dominant information system, providing sophisticated
          instruments.
        </p>
      </div>
      <SignupFormDemo />
    </section>
  );
};

export default SignupCompo;
