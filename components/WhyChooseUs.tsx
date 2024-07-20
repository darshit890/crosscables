import React from 'react';

interface Reason {
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    { title: 'ISO 9001:2015', description: 'CERTIFIED BY TUV RHEINLAND' },
    { title: '300+', description: 'DISTRIBUTORS PAN INDIA' },
    { title: '15+', description: 'YEARS OF TRUST' },
    { title: '1000+', description: 'PRODUCTS MANUFACTURED' },
  ];

  return (
    <div className="bg-gray-900 text-white pb-12 pt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">WHY PEOPLE CHOOSE US</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">{reason.title}</h3>
            <p className="text-sm sm:text-base">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;