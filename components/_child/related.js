import fetcher from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Author from "../../components/_child/author";
import Spinner from '../_child/spinner';
import Error from "../_child/error";
const related = () => {

  const {data, isLoading, isError} = fetcher('api/allposts')

  if(isLoading) return <Spinner></Spinner>
  if(isError)  return <Error/>


  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">{data.map((value, index)=>{
         return  <Post data={value}/>
      })}</div>
    </section>
  );
};

export default related;

function Post({data}) {
  const {id, category, img, published, title,author,subtitle,description}=data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link legacyBehavior href={`/posts/${id}`}>
          <a>
            <Image
              className="rounded"
              width={300}
              height={200}
              src={img||"/"}
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">
            {category}
            </a>
          </Link>
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-gray-600 hover:text-gray-800">-{published}</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {subtitle}
            </a>
          </Link>
        </div>
       {author ?  <Author name={author.name} image={author.image} designation={author.designation} />:<></>}
      </div>
    </div>
  );
}
