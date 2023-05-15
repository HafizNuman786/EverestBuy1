import React from "react";
import Link from "next/link";
import { womenCatagory } from "@/utils/data";

export default function P_R_sidebar() {
  return (
    <div className="col-span-12">
      <div className="w-full py-2 font-bold text-xl">Related Categories</div>
      <div className="relative flex items-start py-2">
        <div className="w-full">
          {womenCatagory.map((cate,index) => {
            return (
              <div className="w-full border-l-4 border-transparent
                  hover:border-l-4 hover:border-teal-500 hover:bg-gray-200" key={index}>
              <Link href="/category_details">
                <div
                  className="flex cursor-pointer whitespace-nowrap  py-3   "
                >
                  <div className="flex px-4">
                  <div className="flex items-center">{cate.icon}</div>
                  <div className="ml-2 font-normal">{cate.name}</div>
                  </div>
                </div>
              </Link>
              </div>
             
            );
          })}
        </div>
      </div>
    </div>
  );
}
