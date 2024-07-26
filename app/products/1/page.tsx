"use client"
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useEffect, useState } from "react";


export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <PageHero title="Accelarator Cable" />
      <section className="mx-auto px-4 mt-6 lg:mt-10 max-w-7xl lg:px-5 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div 
          className={`transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } lg:col-span-3`}
        >
          <Image
            src="/Product1.jpg"
            alt="Accelarator Cable"
            height={450}
            width={600}
            className="object-cover h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-lg"
          />
        </div>
        <div className={`max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-4 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="mb-4 text-base sm:text-lg mt-6 lg:mt-10">
            High-quality replacement throttle control cable for vehicles.
            Connects the gas pedal to the engine&apos;s throttle body, ensuring
            smooth acceleration response. Made from durable materials for
            long-lasting performance. Compatible with various make and models
            (specify compatibility in product details). Easy installation for
            DIY mechanics or professionals.
          </p>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Key features:</h3>
          <ul className="space-y-1 list-disc list-inside text-sm sm:text-base">
            <li>Precise throttle control</li>
            <li>Durable construction</li>
            <li>Smooth operation</li>
            <li>OEM-quality replacement</li>
            <li>Reduces pedal play</li>
          </ul>
          <Link href={"/priceList"}>
            <button className="mt-5 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-primary/90 px-6 sm:px-8 py-2 bg-primary rounded-md text-white font-light transition duration-200 ease-linear w-full sm:w-auto">
              Our Price List
            </button>
          </Link>
        </div>
      </section>
      <div className="max-w-7xl mx-auto flex flex-col my-10 sm:my-[5rem] px-4 sm:px-5">
        <div className="flex flex-row items-center gap-x-5">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
            Related
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              images: "/Product2.jpg",
              name: "Clutch Cable",
              smallDescription: "Connects the clutch pedal to the clutch fork, enabling smooth engagement and disengagement of the clutch in manual transmission vehicles.",
              id: "2"
            },
            {
              images: "/Product3.jpg",
              name: "Speedometer Cable",
              smallDescription: "Transmits vehicle speed from the transmission to the speedometer for accurate speed readings.",
              id: "3"
            },
            {
              images: "/Product4.jpg",
              name: "Rear Brake Cable",
              smallDescription: "Essential component that transmits force from the brake lever to the rear brake mechanism, ensuring responsive and reliable stopping power.",
              id: "4"
            }
          ].map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-1000 ease-in-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}