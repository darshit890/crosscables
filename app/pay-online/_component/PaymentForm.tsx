"use client";

import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { loadRazorpay } from "@/lib/razorpay";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    loadRazorpay();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: parseInt(amount) * 100, // Razorpay expects amount in paise
      currency: "INR",
      name: "Your Company Name",
      description: "Payment for Your Product/Service",
      handler: function(response: any) {
        alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
        // Handle successful payment here (e.g., call your backend to verify payment)
      },
      prefill: {
        name: name,
        email: email,
        contact: contactno
      },
      theme: {
        color: "#3399cc"
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border mb-10">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Enter the details
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill the details for payment
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className='mb-4'>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Tyler" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="abc@gmail.com" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="contactno">Contact Number</Label>
          <Input id="contactno" placeholder="1234567890" type="tel" name="contactno" value={contactno} onChange={(e) => setContactno(e.target.value)} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" placeholder="******" type="number" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </LabelInputContainer>
        
        <button
          className="bg-gradient-to-br relative group/btn from-primary dark:from-primary/80 dark:to-zinc-900 to-primary/70 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Pay Now &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;

// ... rest of the code remains the same

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
