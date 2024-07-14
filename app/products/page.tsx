import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Offers = () => {
  return (
    <div className='min-h-screen p-10 relative overflow-hidden bg-gradient-to-br from-blue-100 to-white'>
      {/* Gradient circles in corners */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-transparent opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-200 to-transparent opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <h1 className="text-4xl font-bold text-center mb-8 bg-blue-900 text-white py-4 rounded-lg relative z-10">Products</h1>
      
      <div className="flex flex-row items-center gap-x-5">
          <h1 className="md:text-4xl sm:text-xl text-md font-semibold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-500/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Product List
          </h1>
          <Button
            variant="link"
            className="lg:text-lg sm:text-md text-sm text-muted-foreground"
          >
          </Button>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
          <ProductCard
            images="/next.svg"
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="1"
          />
          <ProductCard
            images="/next.svg"
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="2"
          />
          <ProductCard
            images="/next.svg"
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="3"
          />
          <ProductCard
            images="/next.svg"
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="3"
          />
          <ProductCard
            images="/next.svg"
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="3"
          />
          <ProductCard
            images="/next.svg"
            name="Analog-Watch"
            price={96}
            smallDescription="Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort."
            id="3"
          />
        </div>
    </div>
  )
}

export default Offers