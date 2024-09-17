import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
export default function SCard({ title,  icon, count, points }) {
  return (
    <Card className='bg-gray-100 hover:bg-gray-200 transition border border-black/5 rounded-lg overflow-hidden  md:max-w-[450px] sm:min-h-[310px]'>
    <CardHeader>
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
      {/* <p className='text-gray-800 font-normal'>{description}</p> */}
      
      {/* Render points as a list */}
      <ul className='mt-4 space-y-1 text-gray-600'>
        {points && points.map((point, index) => (
          <li key={index} className='flex items-start space-x-2'>
            <span className='font-semibold'>{index + 1}.</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
  )
}
