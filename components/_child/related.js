import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "../../components/_child/author";
const related = () => {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">{post()}{post()}{post()}{post()}</div>
    </section>
  );
};

export default related;

function post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link legacyBehavior href={"/"}>
          <a>
            <Image
              className="rounded"
              width={300}
              height={200}
              src={"/images/image1.jpg"}
            />
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
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your Most uhhappy customer are your greatest source of learning
            </a>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
