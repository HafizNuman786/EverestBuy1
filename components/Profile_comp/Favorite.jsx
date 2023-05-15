import Image from "next/image";
import React from "react";

export default function Favorite() {
  return (
    <div className="col-span-12 flow-root">
      {/* All items() My list() */}
      <div className="mb-4 flow-root rounded-lg bg-white p-4">
        <div className="flex justify-between">
          <div className="flex justify-around">
            <div className="text-base font-medium text-gray-900">
              All Items(4)
            </div>
            <div className="ml-4 text-gray-500">My List(0)</div>
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-800">Edit</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" rounded-lg  bg-white p-4">
        <div className="flex items-start ">
          <div className="">
            <Image width={1000} height={1000} className="h-24 w-32 rounded" src="/image2.jpeg" alt="" />
          </div>
          <div className="w-full pl-4 text-base font-semibold text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="text-lg font-bold">Rs:5000</div>
          </div>
          <div className="flex">
            <div className="mx-2 mt-4">
              <button className="h-10 w-48  rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-200 shadow hover:bg-gray-100">
                Move To Cart
              </button>
              <button className="mt-2 h-10 w-48 rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-300"></div>

        {/*  list 2*/}

        <div className="mt-4 flex items-start ">
          <div className="">
            <Image width={1000} height={1000} className="h-24 w-32 rounded" src="/image2.jpeg" alt="" />
          </div>
          <div className="w-full pl-4 text-base font-semibold text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="text-lg font-bold">Rs:5000</div>
          </div>
          <div className="flex">
            <div className="mx-2 mt-4">
              <button className="h-10 w-48  rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-500 shadow hover:bg-gray-100">
                Move To Cart
              </button>
              <button className="mt-2 h-10 w-48 rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 border-b-2 border-gray-300"></div>
      </div>
    </div>
  );
}
