import React from "react";
import Link from "next/link";
import {All_Products } from "@/utils/data";
import Image from "next/image";

export default function Profile_Products() {
  return (
    <div className="mb-3 grid grid-cols-12 gap-2">
      <div className="col-span-12 grid grid-cols-12 py-5">
        <div className="col-span-12 mb-6 grid content-center">
          <div className="flex items-center justify-center">
            <span className="mr-5 h-px w-40 bg-black"></span>
            <span className="text-center text-lg text-black">More to love</span>
            <span className="ml-5 h-px w-40 bg-black"></span>
          </div>
        </div>
        <div className="col-span-12 grid cursor-pointer grid-cols-12 gap-3">
          {All_Products?.map((item, i) => {
            return (
              <div className="col-span-2 bg-white " key={i}>
                <div className="w-full border border-transparent bg-white hover:border hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <Link href={`/product-detail/${item.id}`}>
                    <Image width={150} height={100} src={item.icon} alt="Products" />
                    <div className="px-2 py-3">
                      <h5 className="text-base font-semibold tracking-tight text-gray-500 dark:text-white">
                        {item.name}
                      </h5>
                      <p className="font-normal text-emerald-500 dark:text-gray-400">
                        <span className="pr-1">RS.{item.price}</span>450
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
