import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Author from '../components/_child/author'
import fetcher from '../lib/fetcher';
import Spinner from "./_child/spinner";
import Error from "./_child/error";
const section4 = () => {
  
  const {data,isLoading, isError}= fetcher('api/popular')

  if(isLoading){
    return <Spinner></Spinner>
  }
  
  if(isError) return<Error/>
  return (
    <div className='container mx-auto md:px-20 py-16'>
        <div className='grid lg:grid-cols-2'>
          <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Health</h1>
          <div className='flex flex-col gap-6'>
          
        {
          data.map((value, index)=>{
         { value.category =="Health" ? <Post key={index} data={value}></Post>:<></>}
          })
        }
         
          </div>
          </div>
          <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Technology</h1>
          <div className="flex flex-col gap-6">
         
          {
          data.map((value, index)=>{
         { value.category =="Technology" ? <Post key={index} data={value}></Post>:<></>}
          })
        }
          </div>
         
          </div>
        </div>
    </div>
  )
}

export default section4

function Post ({data}){

  const {id, category, img, published, title,author,subtitle,description}=data;
    return(
        <div className='flex gap-5 '>
            <div className="imgae flex flex-col justify-start">
            <Image src={img ||"/"} width={300} height={250} className="rounded" />
            </div>
            <div className='info flex justify-center flex-col'>
            <div className="cat">
          <Link legacyBehavior href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              {category}
            </a>
          </Link>
          <Link legacyBehavior href={"/"}>
            <a className="text-gray-600 hover:text-gray-800">-{published}</a>
          </Link>
        </div>
        <div className="title">
          <Link legacyBehavior href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {subtitle}
            </a>
          </Link>
        </div>
        <Author/>
            </div>
        </div>
    )
}