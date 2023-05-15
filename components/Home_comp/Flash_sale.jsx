import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { data } from "@/utils/data";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/assets/Arrow";
SwiperCore.use([Autoplay]);

export default function FlashSale() {
  return (
    <div>
      <div className="mx-2 mb-3 grid grid-cols-12 gap-3">
        <div className="col-span-12 grid grid-cols-12 rounded bg-white py-5 px-3">
          <div className="col-span-12 grid">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold text-gray-800">Flash Sales</h3>
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

          <div className="col-span-12">
            <Swiper
              className="swiper-wrapper"
              slidesPerView={5}
              autoplay={{
                delay: 1000,
              }}
            >
              {data.map((dt, index) => {
                return (
                  <div className="w-full" key={index}>
                    <div className="swiper-container">
                      <SwiperSlide className="swiper-slide bg-white border border-transparent hover:rounded-lg hover:border hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ">
                        <div>
                          <Link href="#">
                            <Image
                              width={200}
                              height={100}
                              className=" h-40 object-contain w-full rounded-t-lg"
                              src={dt.src}
                              alt={dt.alt}
                            />
                          </Link>
                        </div>
                        <div className="p-5">
                          <Link href="#">
                            <h5 className="text-base font-semibold tracking-tight text-gray-500 dark:text-white">
                              {dt.name}
                            </h5>
                          </Link>
                          <p className="font-normal text-emerald-500 dark:text-gray-400">
                            <span className="pr-1">RS.</span>
                            {dt.price}
                          </p>
                          <p className="text-red-600">
                            <del>
                              <span className="pr-1">RS.</span>900
                            </del>
                            <span className="ml-2">- 50%</span>
                          </p>
                        </div>
                      </SwiperSlide>
                    </div>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
