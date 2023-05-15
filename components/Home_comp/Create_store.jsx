import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Createstore() {
  return (
    <div className="col-span-12 grid rounded-lg bg-white  py-5 px-4 md:col-span-12 lg:col-span-3">
      <div className="text-center md:flex lg:block">
        <Image width={300} height={100} src="/sidebar.png" alt="/sidebar" />
        <h3 className="mb-2 mt-5 text-3xl font-bold text-black">
          Select own <br />
          E-Commerce Store
        </h3>
        <p className="mb-10 text-gray-500">
          Lorem, ipsum dolor sit consectetur it adipisicing elit. Ipsum dolor
          sit ametconsectetur
        </p>
        <Link href="">
          <button className="mb-5 rounded-lg bg-emerald-500 px-5 py-3 text-xl text-white">
            Create Store
          </button>
        </Link>
        <a href="#">
          <button className="rounded-lg bg-gray-400 px-5 py-3 text-xl text-black">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}
