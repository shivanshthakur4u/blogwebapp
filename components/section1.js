import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay} from 'swiper';
import Image from "next/image";
import Link from "next/link";
import fetcher from '../lib/fetcher';
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import 'swiper/css';

import Author from '../components/_child/author'

const section1 = () => {

  const {data,isLoading, isError}= fetcher('api/trending')

  if(isLoading){
    return <Spinner></Spinner>
  }
  
  if(isError) return<Error/>
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
      {
        data.map((value,index)=>{
         return <SwiperSlide key={index}><Slide data={value}/></SwiperSlide>
     
        })
      }
    </Swiper>
        
      </div>
    </section>
  );
};

export default section1;

function Slide({data}) {
 
  const {id, category, img, published, title,author,subtitle,description}=data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image src={img||"/"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link legacyBehavior href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "unknown"}
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-600 hover:text-gray-800">-{published}</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={"/"}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title || "title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-700 py-3">
          {description}
        </p>
       {author ?  <Author name={author.name} image={author.image} designation={author.designation}/>:<></>}
      </div>
    </div>
  );
}
