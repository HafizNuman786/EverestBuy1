import React from "react";
import { womenCatagory } from "@/utils/data";
import Link from "next/link";

export default function W_Sidebar() {
  return (
    <>
 
 <div className="flex items-center px-4 border border-x-0 border-b border-t-0 border-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <h3 className="ml-2 py-4 text-xl font-semibold text-black">
          Categories
        </h3>
      </div>
      <div className="relative flex items-start py-2">
        <div className="w-full">
          {womenCatagory.map((cate,i) => {
            return (
              <div className="w-full border-l-4 border-transparent
                  hover:border-l-4 hover:border-teal-500 hover:bg-gray-200" key={i}>
              <Link href="/category_details">
                <div
                  className="flex cursor-pointer whitespace-nowrap  py-3   "
                >
                  <div className="flex px-4">
                  <div className="flex items-center">{cate.icon}</div>
                  <div className="ml-2">{cate.name}</div>
                  </div>
                </div>
              </Link>
              </div>
             
            );
          })}
        </div>
      </div>
     
    </>
  );
}
