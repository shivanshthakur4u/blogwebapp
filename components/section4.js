import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const section4 = () => {
  return (
    <div className='container mx-auto md:px-20 py-16'>
        <div className='grid lg:grid-cols-2'>
          <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Business</h1>
          <div className='flex flex-col gap-6'>
          
          {post()}
            {post()}
            {post()}
            {post()}
         
          </div>
          </div>
          <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Travel</h1>
          <div className="flex flex-col gap-6">
          {post()}
            {post()}
            {post()}
            {post()}
          </div>
         
          </div>
        </div>
    </div>
  )
}

export default section4
import Author from '../components/_child/author'
function post (){
    return(
        <div className='flex gap-5 '>
            <div className="imgae flex flex-col justify-start">
            <Image src={"/images/image1.jpg"} width={300} height={250} className="rounded" />
            </div>
            <div className='info flex justify-center flex-col'>
            <div className="cat">
          <Link legacyBehavior href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-600 hover:text-gray-800">-July9,2023</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your Most uhhappy customer are your greatest source of learning
            </a>
          </Link>
        </div>
        <Author/>
            </div>
        </div>
    )
}