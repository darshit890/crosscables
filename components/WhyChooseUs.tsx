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
    { title: 'ISO 9001:2015', description: 'CERTIFIED BY TUV RHEINLAND' },
    { title: '300+', description: 'DISTRIBUTORS PAN INDIA' },
    { title: '15+', description: 'YEARS OF TRUST' },
    { title: '1000+', description: 'PRODUCTS MANUFACTURED' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-sm sm:text-base">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;