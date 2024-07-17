import React from 'react'
import PaymentForm from './_component.tsx/PaymentForm'

const PayOnlinePage = () => {
  return (
    <div className='flex flex-col justify-center mx-auto bg-gradient-to-br from-blue-100 to-white'>
      <h1 className='pointer-events-none mt-5 mb-10 whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10'>Pay Online</h1>
      <PaymentForm />
    </div>
  )
}

export default PayOnlinePage