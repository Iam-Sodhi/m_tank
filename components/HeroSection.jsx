import React from 'react'
import { Button } from './ui/button'
import { ArrowBigRight } from 'lucide-react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center mt-28 md:mt-16'>
        <div className='flex flex-col items-start justify-center space-y-4 sm:max-w-[300px] md:max-w-[580px] -mt-24 sm:-mt-36'>
            <h1 className='text-2xl sm:text-3xl md:text-6xl text-black font-bold'>
                Think Tank by <span className='text-custom-primary'>Myraa</span> Technologies
            </h1>
            <p className='text-gray-500 text-lg font-medium pl-2'>
                Future Proof Your Business
            </p>
            <div className='flex flex-col md:flex-row  space-y-3 md:space-y-0 sm:space-x-4  items-center pt-4'>
            <Button variant="primary" className='text-lg' size="lg">
              <ArrowBigRight className="mr-2 h-4 w-4 hover:translate-x-1" /> Register Now
            </Button>
            <Button variant="outline" className='text-lg' size="lg">
              AI Innovative Program
            </Button>
            </div>
        </div>
        <div className='min-w-[300px] '>
          <Image  src="/hero-image.svg" alt="hero-image" height={500} width={600} />
        </div>
    </div>
  )
}

export default HeroSection