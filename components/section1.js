import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay} from 'swiper';
import Image from "next/image";
import Link from "next/link";

import 'swiper/css';

import Author from '../components/_child/author'

const section1 = () => {
  SwiperCore.use([Autoplay])
  const bg={
    background:"url('/images/bgimage.png') no-repeat",
    backgroundPosition:"right"
  }
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className=" font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2000
      }}
      
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
    </Swiper>
        
      </div>
    </section>
  );
};

export default section1;

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image src={"/images/image1.jpg"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
  );
}
