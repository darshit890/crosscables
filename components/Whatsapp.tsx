// components/WhatsAppButton.tsx
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+917778017801'; // Replace with your phone number
  const waLink = `https://wa.me/${phoneNumber}`;

  const router = useRouter();

  const redirectToWhatsApp = () => {
    // Optional: Scroll to top if the user is not at the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Redirect to WhatsApp after a small delay
    setTimeout(() => {
      router.push(waLink);
    }, 300);
  };

  return (
    <button
      onClick={redirectToWhatsApp}
      className="fixed bottom-4 sm:right-4 md:right-10 right-4 lg:right-20 z-50 p-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 focus:outline-none focus:ring"
      aria-label="Contact us on WhatsApp"
    >
      {/* You can add a WhatsApp icon here */}
      <div className='flex flex-row gap-x-2 px-1'><FaWhatsapp className='text-white h-6 w-6' />
      <p className='md:flex hidden'>Whatsapp</p></div>
    </button>
  );
};

export default WhatsAppButton;