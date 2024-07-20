"use client"
import PageHero from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Offers = () => {
  return (
    <>
      <PageHero title="Products" />
      <div className="min-h-screen p-4 sm:p-6 md:p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Gradient circles in corners */}
          <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-x-5 mb-4 sm:mb-0">
            <Button
              variant="link"
              className="text-sm sm:text-md lg:text-lg text-muted-foreground"
            ></Button>  
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-4">
            {[
              {
                images: "/Product1.jpg",
                name: "Accelarator Cable",
                smallDescription: "Links the gas pedal to the throttle body, controlling fuel input and engine speed in response to driver input.",
                id: "1"
              },
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
              },
              {
                images: "/Product5.jpg",
                name: "Front Brake Cable",
                smallDescription: "Critical linkage that connects the brake lever to the front brake assembly, providing precise control and efficient braking performance.",
                id: "5"
              }
            ].map((product, index) => (
              <div
                key={product.id}
                className="transform transition-all duration-300 ease-in-out hover:scale-105"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Offers;