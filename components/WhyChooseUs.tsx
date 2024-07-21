"use client"
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface Reason {
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const reasons: Reason[] = [
    { title: '500+', description: 'B2B CUSTOMERS' },
    { title: '2', description: 'MANUFACTURING UNIT IN AHMEDABAD' },
    { title: '10+', description: 'SUPPLIED IN INDIA STATES' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="bg-gray-900 text-white pb-12 pt-8 px-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "transition-all duration-1000 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">WHY PEOPLE CHOOSE US</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-x-8 md:gap-x-16 lg:gap-x-60">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={cn(
                "text-center transition-all duration-1000 ease-in-out",
                isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10`,
                `delay-[${index * 200}ms]`
              )}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">{reason.title}</h3>
              <p className="text-sm sm:text-base max-w-[200px]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;