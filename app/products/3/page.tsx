"use client"
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useState, useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speedometer Cable",
  description:
    "A vital component connecting your vehicle&apos;s transmission to the speedometer. This durable cable transmits rotational movement, allowing accurate speed readings on your dashboard. Compatible with various makes and models, our high-quality speedometer cable ensures reliable performance and easy installation. Replace your worn or damaged cable to maintain precise speed monitoring and comply with traffic regulations.",
};

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
      <PageHero title="Speedometer Cable" />
      <section className="mx-auto px-4 mt-6 lg:mt-10 max-w-7xl lg:px-5 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        <div 
          className={`transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } lg:col-span-3`}
        >
          <Image
            src="/Product3.jpg"
            alt="Speedometer Cable"
            height={450}
            width={600}
            className="object-cover h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-lg"
          />
        </div>
        <div className={`max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-4 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="mb-4 text-base sm:text-lg leading-relaxed mt-6 lg:mt-10">
            A vital component connecting your vehicle&apos;s transmission to the
            speedometer. This durable cable transmits rotational movement,
            allowing accurate speed readings on your dashboard. Compatible with
            various makes and models, our high-quality speedometer cable ensures
            reliable performance and easy installation. Replace your worn or
            damaged cable to maintain precise speed monitoring and comply with
            traffic regulations.
          </p>
          
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Key Features:</h3>
          <ul className="space-y-1 list-disc list-inside text-sm sm:text-base">
            {[
              "Ensures accurate speedometer readings",
              "Durable construction for long-lasting use",
              "Easy to install",
              "Compatible with multiple vehicle types",
              "Helps maintain legal compliance"
            ].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
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
              images: "/Product4.jpg",
              name: "Rear Brake Cable",
              smallDescription: "Essential component that transmits force from the brake lever to the rear brake mechanism, ensuring responsive and reliable stopping power.",
              id: "4"
            },
            {
              images: "/Product5.jpg",
              name: "Front Brake Cable",
              smallDescription: "Critical linkage that connects the brake lever to the front brake assembly, providing precise control and efficient braking performance.",
              id: "5"
            },
            {
              images: "/Product1.jpg",
              name: "Accelarator Cable",
              smallDescription: "Links the gas pedal to the throttle body, controlling fuel input and engine speed in response to driver input.",
              id: "1"
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