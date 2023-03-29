import React from "react";
import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from '../../components/_child/related'
import getPost from '../../lib/helper'
import fetcher from "@/lib/fetcher";
import Spinner from "@/components/_child/spinner";
import Error from "@/components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";


export default function page({fallback}){

const router = useRouter();
const {postid}=router.query;

 const {isLoading, IsError, data} = fetcher(`api/posts/${postid}`)
 if(isLoading){
  return <Spinner/>
 }

 if(IsError) return <Error/>

 return (
  <SWRConfig value={{fallback}}>
    <Article {...data}/>
  </SWRConfig>
 )
}
const Article = ({id, category, img, published, title,author,subtitle,description}) => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          { author ?<Author name={author.name} designation={author.designation} image={author.image} />:<></>}
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {" "}
            {title||"title"}
          </h1>
          <p className="text-gray-500 text-center text-xl"> {subtitle || "subtitle"}
      </p>

          <div className="py-10 ">
            <Image src={img||"image"} width={900} height={600}/>
          </div>

          <div className="content text-gray-600 text-lg flex
           flex-col gap-4">
           {description||"subtitle"}
          
           </div>
           <Related/>
        </div>
      </section>
    </Format>
  );
};




export async function getStaticProps({params}){
  const posts = await getPost(params.postid)

  return{
    props:{
      fallback:{
        '/api/posts':posts
      }
    }
  }
}


export  async function getStaticPaths(){
  const posts = await getPost();
  const paths =posts.map((value,index)=>{
    return{
      params:{
        postid:value.id.toString()
      }
    }
  })

  return {
    paths,
    fallback:false
  }
}