import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
   } from "./ui/card"
function PCard({title, count, description}) {
  return (
    <Card className='bg-gray-100 hover:bg-gray-200 transition border border-black/5 rounded-lg overflow-hidden max-w-[300px] sm:max-w-[300px] min-h-[250px]'>
    <CardHeader  >
        
       <div className='flex items-center justify-start space-x-2'>

      <div className='h-10 w-10 rounded-full bg-custom-primary flex items-center justify-center'>
        <p className='text-white'>{count}</p>
      </div>
      <CardTitle className='text-2xl'>{title}</CardTitle>
      {/* <CardDescription>Card Description</CardDescription> */}
       </div>
    </CardHeader>

    <CardContent>
      <p className='text-gray-800 font-normal'>{description}</p>
    </CardContent>
    {/* <CardFooter>
      <p>Card Footer</p>
    </CardFooter> */}
  </Card>

  )
}

export default PCard