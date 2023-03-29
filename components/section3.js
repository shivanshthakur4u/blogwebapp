import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Author from "../components/_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

const section3 = () => {
  const { data, isLoading, isError } = fetcher("api/popular");

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) return <Error />;

  return (
    <div className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}
      <Swiper
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <Post data={value} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default section3;

function Post({ data }) {
  const { id, category, img, published, title, author, subtitle, description } =
    data;
  return (
    <div className="grid">
      <div className="images">
        <Link legacyBehavior href={`/posts/${id}`}>
          <a>
            <Image src={img || "/"} width={600} height={400} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">{category}</a>
          </Link>
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-gray-600 hover:text-gray-800">-{published}</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-3xl  md:text4-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-700 py-3">{subtitle}</p>
        {author ? (
          <Author
            name={author.name}
            image={author.image}
            designation={author.designation}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
