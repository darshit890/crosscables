
import { Button } from "@/components/ui/button";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <section className="mx-auto px-4  lg:mt-10 max-w-7xl lg:px-5 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 ">
                <Image
                  src="/Product2.jpg"
                  alt="yoo"
                  height={200}
                  width={400}
                  className="object-cover h-[450px] w-full rounded-lg col-span-3"
                />
        <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Clutch Cable
          </h1>

          <h2 className="text-xl mb-4 mt-10">
            Essential for manual transmission vehicles, our high-quality clutch cable ensures smooth gear shifts and optimal clutch performance.
          </h2>
          <h3 className="text-lg font-medium mb-2">Key features:</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Precision-engineered for reliable clutch engagement
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Compatible with a wide range of vehicle makes and models
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Corrosion-resistant construction for longevity
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Easy installation for quick replacement
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Reduces pedal effort for improved driving comfort
            </li>
          </ul>
          <p className="text-blue-400 italic">
            Upgrade your vehicle's clutch system with our dependable clutch cable for enhanced driving experience and prolonged clutch life.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto flex flex-col my-[5rem] px-5">
        <div className="flex flex-row items-center gap-x-5">
          <h1 className="md:text-4xl sm:text-xl text-md font-semibold">
            Related
          </h1>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
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
    </>
  );
}
