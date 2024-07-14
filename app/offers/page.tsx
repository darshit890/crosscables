import React from 'react'

const Offers = () => {
  return (
    <div className='min-h-screen p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white'>
      {/* Gradient circles in corners */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <h1 className="text-4xl font-bold text-center mb-8 bg-blue-900 text-white py-4 rounded-lg relative z-10">Offers</h1>
      <div className="flex justify-center relative z-10">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScGCRZzx4x_a8LqrMzHLZUISEF8fiz06uh0quuWP45I6zt8lw/viewform?embedded=true&usp=embed_googleplus" 
          allowFullScreen 
          width={700} 
          height={1000}
        ></iframe>
      </div>
      <p className="text-xl text-center mt-10 text-blue-800 relative z-10">
        *Note: By submitting in this form you will get a chance to become a VIP customer of our firm. Which will open the gate to many additional perks.
      </p>
    </div>
  )
}

export default Offers