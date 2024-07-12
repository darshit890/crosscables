import React from "react";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col mt-[5rem] px-5">
      <div className="z-10 flex min-h-[8rem] items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Product List</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-5">
        <h1 className="md:text-4xl sm:text-xl text-md font-semibold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-500/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Product List
        </h1>
        <Button
          variant="link"
          className="lg:text-lg sm:text-md text-sm text-muted-foreground"
        >
          See more <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
        <ProductCard
          images="/next.svg"
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="1"
        />
        <ProductCard
          images="/next.svg"
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="2"
        />
        <ProductCard
          images="/next.svg"
          name="Analog-Watch"
          price={96}
          smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
          id="3"
        />
      </div>
    </div>
  );
};

export default ProductList;
