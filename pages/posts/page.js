import React from "react";
import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from '../../components/_child/related'
const page = () => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">
            {" "}
            Your Most uhhappy customer are your greatest source of learning
          </h1>
          <p className="text-gray-500 text-center text-xl">  Even the all-powerful pointing has no control about the blind texts it
          is on almost unorthographic life One day however a small line of
          blind.</p>

          <div className="py-10 ">
            <Image src={"/images/image1.jpg"} width={900} height={600}/>
          </div>

          <div className="content text-gray-600 text-lg flex
           flex-col gap-4">
            <p>  Even the all-powerful pointing has no control about the blind texts it
          is on almost unorthographic life One day however a small line of
          blind.</p>
          <p>  Even the all-powerful pointing has no control about the blind texts it
          is on almost unorthographic life One day however a small line of
          blind.</p>
          <p>  Even the all-powerful pointing has no control about the blind texts it
          is on almost unorthographic life One day however a small line of
          blind.</p>
          <p>  Even the all-powerful pointing has no control about the blind texts it
          is on almost unorthographic life One day however a small line of
          blind.</p>
          <p>  Even the all-powerful pointing has no control about the blind texts it
          is on almost unorthographic life One day however a small line of
          blind.</p>
          
           </div>
           <Related/>
        </div>
      </section>
    </Format>
  );
};

export default page;
