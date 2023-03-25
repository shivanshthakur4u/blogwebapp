import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from '../components/_child/author'
const section2 = () => {
  return (
    <div className='container mx-auto md:px-20 py-10'>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Post</h1>

        {/* grid column */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
            {post()}
            {post()}
            {post()}
            {post()}
            {post()}
            {post()}
        </div>
    </div>
  )
}

export default section2

function post (){
    return(
        <div className='item'>
            <div className='images'>
            <Link legacyBehavior href={"/"}>
          <a>
            <Image src={"/images/image1.jpg"} width={500} height={350} className=" rounded" />
          </a>
        </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
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
            <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
              Your Most uhhappy customer are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-700 py-3">
          Even the all-powerful pointing has no control about the blind texts it
          is on almost unorthographic life One day however a small line of
          blind.
        </p>
        <Author/>
            </div>
        </div>
    )
}