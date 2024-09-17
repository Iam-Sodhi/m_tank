import Image from 'next/image'
import React from 'react'
import OCard from "@/components/OCard";

function Outcome() {
  return (
    <div className='mx-[30px] sm:mx[120px] flex flex-col items-center space-y-24 my-10  sm:my-40'>
        <div className='flex justify-center'>
             <h2 className='text-black text-3xl md:text-5xl font-bold'>
                End Outcome and Impact
             </h2>
             <div className='hidden sm:block ml-6 -mt-20 -mr-10'>
                 <Image  src="/two-rollers.svg"  alt="roller" height={250} width={250} />
             </div>
        </div>
        <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center space-x-4 '>
            
             <OCard title="Inhouse Innovation" 
             description="Ideas to Inventions, all Inhouse."
             count="01" /> 
             <OCard title="Collaborative R&D" 
             description="Best minds of universities, think tanks, and you"
             count="02" /> 
             <OCard title="X-Disciplinary Invention" 
             description="Enable innovation across industries and departments"
             count="03" /> 
             <OCard title="First Mover Advantage" 
             description="Be the first in industry to embed AI and Gen AI"
             count="04" /> 


        </div>
    </div>
  )
}

export default Outcome