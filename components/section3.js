import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Author from '../components/_child/author'
const section3 = () => {
  return (
    <div className='container mx-auto md:px-20 py-16'>
        <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>
        {/* swiper */}
        <Swiper slidesPerView={2}>
            <SwiperSlide>{post()}</SwiperSlide>
            <SwiperSlide>{post()}</SwiperSlide>
            <SwiperSlide>{post()}</SwiperSlide>
            <SwiperSlide>{post()}</SwiperSlide>
            <SwiperSlide>{post()}</SwiperSlide>
            <SwiperSlide>{post()}</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default section3

function post (){
    return(
        <div className='grid'>
            <div className='images'>
            <Link legacyBehavior href={"/"}>
          <a>
            <Image src={"/images/image1.jpg"} width={600} height={400} />
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
            <a className="text-3xl  md:text4-xl font-bold text-gray-800 hover:text-gray-600">
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