import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const author = () => {
  return (
    <div className='author flex py-5'>
        <Image className=' rounded-full' width={60} height={60} src={'/images/author/author1.png'}/>
        <div className='flex flex-col justify-center px-4'>
         <Link legacyBehavior href={'/'}><a className='text-md font-bold text-gray-800 hover:text-gray-600'>authorxyz</a></Link>
         <span className='text-sm text-gray-500'>CEO, Founder</span>
        </div>
    </div>
  )
}

export default author