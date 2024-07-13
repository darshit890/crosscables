import React from 'react'

const Offers = () => {
  return (
    <div className='p-10'>
      <h1 className="text-4xl font-bold text-center mb-8 bg-blue-900 text-white py-4 rounded-lg">Offers</h1>
      <div className="flex justify-center">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGCRZzx4x_a8LqrMzHLZUISEF8fiz06uh0quuWP45I6zt8lw/viewform?embedded=true&usp=embed_googleplus" allowFullScreen width={700} height={1000} ></iframe>
      </div>
      <p className="text-xl text-center mt-10 text-blue-800">*Note -: By submitting in this form you will get a chance to become a VIP customer of our firm. Which will open the gate to many additional perks. </p>
    </div>
  )
}

export default Offers