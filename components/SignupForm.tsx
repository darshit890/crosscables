"use client";
import React, { FormEventHandler } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Swal from 'sweetalert2';


const SignupFormDemo =() => {

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    formData.append("access_key", "69438792-15e2-47e9-9651-6c72acb747a5");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
    
  return (
    <div className="w-full max-w-md mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border">
      <h2 className="font-bold text-lg sm:text-xl text-neutral-800 dark:text-neutral-200">
        Contact Us
      </h2>
      <p className="text-neutral-600 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill the form to contact us and we will reach out to you.
      </p>

      <form className="my-4 sm:my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
          <LabelInputContainer className="w-full sm:w-1/2">
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" name="firstname" />
          </LabelInputContainer>
          <LabelInputContainer className="w-full sm:w-1/2">
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" name="lastname"/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="abc@gmail.com" type="email" name="email"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="contactno">Contact Number</Label>
          <Input id="contactno" placeholder="1234567890" type="tel" name="contactno"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Any Product" type="text" name="subject"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input id="message" placeholder="Add something to ask" type="textarea" name="message"/>
        </LabelInputContainer>
        
        <button
          className="bg-gradient-to-br relative group/btn from-primary dark:from-primary/80 dark:to-zinc-900 to-primary/70 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-sm sm:text-base"
          type="submit"
        >
          Submit Form &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}
export default SignupFormDemo;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
