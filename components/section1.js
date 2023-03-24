import React from "react";
import Image from "next/image";
import Link from "next/link";
const section1 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className=" font-bold text-4xl pb-12 text-center">Trending</h1>
      </div>
    </section>
  );
};

export default section1;

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image
              src={
                "/images/image1.jpg"
              }
              width={600}
              height={600}
            />
          </a>
        </Link>
      </div>
      <div className="info">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">Business, travel</a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-600 hover:text-gray-800">-July9,2023</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
