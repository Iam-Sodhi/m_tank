import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='sm:mx-[120px] mx-[30px] h-28 flex items-center min-w-[150px] '>
       <Link href="/"> 
        <Image src="/Myraa_Logo.png" alt='logo image' height={200} width={300}/>
       </Link>
    </div>
  )
}
