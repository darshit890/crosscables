import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import React from "react";

const Offers = () => {
  return (
    <div className="min-h-screen p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white ">
      <div className="max-w-7xl mx-auto">
        {/* Gradient circles in corners */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>

        <div className="z-10 flex min-h-[8rem] items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-50 dark:border-white/5 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Products</span>
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
          ></Button>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
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
          <ProductCard
            images="/Product4.jpg"
            name="Rear Brake Cable"
            smallDescription="Essential component that transmits force from the brake lever to the rear brake mechanism, ensuring responsive and reliable stopping power."
            id="4"
          />
          <ProductCard
            images="/Product5.jpg"
            name="Front Brake Cable"
            smallDescription="Critical linkage that connects the brake lever to the front brake assembly, providing precise control and efficient braking performance."
            id="5"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
