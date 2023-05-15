import React from "react";
import sidebar_data from "@/utils/data";
import Link from "next/link";
import { CategoriesIcon } from "@/assets/Categories";

export default function Sidebar() {
  return (
    <div className="col-span-12 rounded-lg bg-white  py-5 md:col-span-4 lg:col-span-3 ">
      <div className="flex items-center px-4 border border-x-0 border-b border-t-0 border-gray-400">
        <CategoriesIcon width={30} height={30} />
        <h3 className="ml-2 py-4 text-xl font-semibold text-black">
          Categories
        </h3>
      </div>
      <div className="relative flex items-start py-2">
        <div className="flex flex-wrap">
          {sidebar_data.map((cate, index) => {
            return (
              <div
                className="w-full border-l-4 border-transparent
                  hover:border-l-4 hover:border-teal-500 hover:bg-gray-200"
                key={index}
              >
                <Link href="/womens-product">
                  <div className="flex cursor-pointer whitespace-nowrap  py-3   ">
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
    </div>
  );
}
