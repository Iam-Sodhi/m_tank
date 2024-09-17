import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
   } from "./ui/card"
function ECard({title, description,icon, count}) {
  return (
    <Card className='bg-gray-100 hover:bg-gray-200 transition border border-black/5 rounded-lg overflow-hidden  md:max-w-[450px] sm:min-h-[250px]'>
    <CardHeader  >
        
       <div className='flex items-center justify-start space-x-2'>

      <div className='h-10 w-10 rounded-full bg-custom-primary flex items-center justify-center'>
        <p className='text-white hidden'>{count}</p>
        <div className='h-12 w-12 rounded-full bg-custom-primary flex items-center justify-center'>
            {icon}
          </div>
      </div>
      <CardTitle className='text-xl'>{title}</CardTitle>
       </div>
    </CardHeader>

    <CardContent>
      <p className='text-gray-800 font-normal'>{description}</p>
    </CardContent>
 
  </Card>

  )
}

export default ECard