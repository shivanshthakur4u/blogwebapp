import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const author = ({name,image,designation}) => {
 
  return (
    <div className='author flex py-5'>
        <Image className=' rounded-full' width={60} height={60} src={image||"/"}/>
        <div className='flex flex-col justify-center px-4'>
         <Link legacyBehavior href={'/'}><a className='text-md font-bold text-gray-800 hover:text-gray-600'>{name}</a></Link>
         <span className='text-sm text-gray-500'>{designation}</span>
        </div>
    </div>
  )
}

export default author