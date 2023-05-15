import React from "react";
import { all_data } from "@/utils/data";
import Image from "next/image";
export default function ShopRelated() {
  const limitedData = all_data.slice(0, 4);
  return (
    <div className="grid grid-flow-col sm:col-span-12 md:col-span-8 lg:col-span-12">
      {limitedData?.map((item,index) => {
        return (
          <div className="col-span-3  h-64 w-48 max-w-sm  bg-white" key={index}>
            <div className="h-40 w-48 object-cover px-2">
              <a href="#">
                <Image
                  className="w-full h-full border-2"
                  width={100}
                  height={100}
                  src={item.icon}
                  alt=""
                />
              </a>
            </div>
            <div className="pt-4">
              <a className="" href="#">
                <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  PKR.{item.price}
                </h5>
              </a>
              <p className="text-center text-sm font-normal text-gray-700 dark:text-gray-400">
                {item.order} orders
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}