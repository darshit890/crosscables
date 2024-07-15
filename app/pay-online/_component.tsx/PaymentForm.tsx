"use client";
import axios from 'axios'
import React, { FormEventHandler, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PaymentForm =() => {

  const [form, setForm] = useState({name:'', number:'', email: ''});
  const [amount, setAmount] = useState(0);
  const handleChange = (e: { target: {
    [x: string]: any; name: any; 
}; })=>{
    setForm({...form, [e.target.name]: e.target.value, [e.target.email]: e.target.value})
  }
  const handleSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    axios.post('/api/phonepe/payment',{
      data: {
        ...form,
        amount: amount
      }
    })
    .then((response: { data: string; }) => {
      window.location.href = response.data
    })
    .catch((error: any) => {
      console.log(error);
    });
  }
  
  
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border mb-10">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Enter the details
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill the details for payment
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="firstname">Full name</Label>
            <Input id="name" placeholder="Tyler" type="text" name="name" onChange={handleChange}/>
          </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="abc@gmail.com.com" type="email" name="email" onChange={handleChange}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="contactno">Contact Number</Label>
          <Input id="contactno" placeholder="1234567890" type="number" name="contactno" onChange={handleChange}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" placeholder="******" type="number" name="amount" onChange={(e)=>{
            const parsedValue = parseFloat(e.target.value);
            setAmount(parsedValue)
          }}/>
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
