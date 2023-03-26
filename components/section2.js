import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from '../components/_child/author'
import  getallpost from '../lib/getallpost'
import fetcher from '../lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'
const section2 = () => {
 
const {data,isLoading, isError}=fetcher('api/posts')

if(isLoading){
  return <Spinner></Spinner>
}

if(isError) return<Error/>

  return (
    <div className='container mx-auto md:px-20 py-10'>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Post</h1>

        {/* grid column */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
          {data.map((value,index)=>{
         return  <Post data={value} key={index}></Post> 
          })}
        </div>
    </div>
  )
}

export default section2

function Post ({data}){
  const {id, category, img, published, title,author,subtitle}=data;

    return(
        <div className='item'>
            <div className='images'>
            <Link legacyBehavior href={"/"}>
          <a>
            <Image src={img||"/"} width={500} height={350} className=" rounded" />
          </a>
        </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
            <div className="cat">
          <Link legacyBehavior href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              {category||"unknown"}
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-600 hover:text-gray-800">-{published||"unknown"}</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={"/"}>
            <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
             {title||"Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-700 py-3">
         {subtitle}
        </p>
        {author ? <Author name={author.name} image={author.image} designation={author.designation}/>:<></>}
            </div>
        </div>
    )
}