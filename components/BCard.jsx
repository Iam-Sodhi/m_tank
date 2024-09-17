import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
   } from "./ui/card"
function BCard({title, icon}) {
  return (
    <Card className='bg-gray-100 hover:bg-gray-200 transition border border-black/5 rounded-lg overflow-hidden max-w-[300px] sm:max-w-[300px] min-h-[220px]'>
    <CardHeader  >
        
       <div className='flex flex-col items-center justify-center space-y-2'>

       <div className='h-12 w-12 rounded-full bg-custom-primary flex items-center justify-center'>
            {icon}
        </div>
      <CardTitle className='text-2xl text-center'>{title}</CardTitle>
       </div>
    </CardHeader>

 
  
  </Card>

  )
}

export default BCard