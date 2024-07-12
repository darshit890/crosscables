
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from './ProductCard'
import { Button } from './ui/button'

const ProductList = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col mt-[5rem] px-5'>
        <div className='flex flex-row items-center gap-x-5'>
            <h1 className='md:text-4xl sm:text-xl text-md font-semibold'>Product List</h1>
            <Button variant='link' className='lg:text-lg sm:text-md text-sm text-muted-foreground'>
                See more <ArrowRight className='h-4 w-4' />
            </Button>
        </div>
        <div className='grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10'>
            <ProductCard images='/next.svg' name='Analog-Watch' price={96} smallDescription='Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort.' id='1'  />
            <ProductCard images='/next.svg' name='Analog-Watch' price={96} smallDescription='Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort.' id='2'  />
            <ProductCard images='/next.svg' name='Analog-Watch' price={96} smallDescription='Introducing our timeless Analog Watch, the epitome of classic elegance. Crafted with precision and style, this watch seamlessly blends sophistication with functionality. Its sleek design features a durable stainless steel case and a genuine leather strap for lasting comfort.' id='3'  />
        </div>
    </div>
  )
}

export default ProductList
