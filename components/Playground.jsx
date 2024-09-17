import Image from 'next/image'
import React from 'react'
import PCard from "@/components/PCard";

function Playground() {
  return (
    <div className='mx-[30px] sm:mx[120px] flex flex-col items-center space-y-24 my-10  sm:my-40'>
        <div className='flex justify-center'>
             <h2 className='text-black text-3xl md:text-5xl font-bold'>
                AI Innovative Playground
             </h2>
             <div className='hidden sm:block ml-6 -mt-20 -mr-10'>
                 <Image  src="/two-rollers.svg"  alt="roller" height={250} width={250} />
             </div>
        </div>
        <div className='flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center space-x-4 '>
            
             <PCard title="Mission" 
             description="Fostering AI experimentation and innovation to drive industry-wide digital transformation."
             count="01" /> 
             <PCard title="Objective" 
             description="Enable companies to experiment with AI, pilot MVPs, and drive business growth via AI adoption."
             count="02" /> 
             <PCard title="Program Structure" 
             description="A framework for companies to articulate their problem statements and solving them with state of the art AI models."
             count="03" /> 
             <PCard title="Outcome" 
             description="Guidance in understanding of AI and enabling them with a working MVP of an AI powered solution for their problem statements."
             count="04" /> 


        </div>
    </div>
  )
}

export default Playground