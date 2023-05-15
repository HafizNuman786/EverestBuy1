/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/autoplay";
import { Deals_data } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/assets/Arrow";
SwiperCore.use([Autoplay]);

export default function SuperDeal() {
  return (
    <div className="col-span-12 grid grid-cols-12 rounded bg-white py-2 px-3">
      <div className="col-span-12 grid">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-red-600">
            Super <span className="text-black">Deals</span>
          </h3>
          <Link href="#">
            <div className="flex">
              <p className="relative  text-base leading-normal text-gray-500">
                See More
              </p>
              <div className="flex items-center">
                <ArrowIcon width={10} height={10} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-span-12 ">
        <div className="w-full">
          {/* <div className="swiper-container"> */}
          <Swiper
            className="swiper-wrapper"
            slidesPerView={3}
            autoplay={{
              delay: 1000,
            }}
          >
            {Deals_data.map((dt, index) => {
              return (
                <SwiperSlide
                  className="swiper-slide bg-white border border-transparent 
                  hover:rounded-lg hover:border hover:border-gray-300 hover:shadow-md dark:border-gray-700
                   dark:bg-gray-800"
                  key={index}
                >
                  <Link href="#">
                    <Image
                      width={1000}
                      height={1000}
                      src={dt.src}
                      alt={dt.alt}
                    />
                  </Link>
                  <div className="p-5">
                    <Link className="w-32" href="#">
                      <h5 className="text-base font-semibold tracking-tight text-gray-500 dark:text-white">
                        {dt.name}
                      </h5>
                    </Link>
                    <p className="font-normal text-emerald-500 dark:text-gray-400">
                      <span className="pr-1">RS.{dt.price}</span>450
                    </p>
                    <p className="text-red-600">
                      <del>
                        <span className="pr-">RS.</span>900
                      </del>
                      <span className="ml-2">- 50%</span>
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
}
