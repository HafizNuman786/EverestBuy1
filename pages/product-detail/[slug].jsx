/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout";
import React from "react";

import Image from "next/image";
import { Just_images } from "@/utils/data";
import { useState } from "react";
import { useRouter } from "next/router";
import { All_Products } from "@/utils/data";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Counter from "@/components/Product-Details/Counter";
import CountrySelector from "@/components/Product-Details/CountryPicker";
import Recommended from "@/components/Product-Details/Recommended";
import P_R_sidebar from "@/components/Product-Details/Product-Detail_sidebar";
import TopSale from "@/components/Product-Details/TopSales";
import ShopRelated from "@/components/Product-Details/Shop_related";
import Specification from "@/components/Product-Details/Specifications";
import ViewMore from "@/components/Product-Details/ViewMore";
import Reviews from "@/components/Product-Details/Reviews";
import ProductReviews from "@/components/Product-Details/Productreviews";
import TopReviews from "@/components/Product-Details/TopReviews";
import DetailsCard from "@/components/Product-Details/DetailCard";
import Description from "@/components/Product-Details/Description";
import { addToCart } from "@/store/cartSlice";
import { MapIcon } from "@/assets/Map";
import { BurnIcon } from "@/assets/Burn";
import { MeasureStripIcon } from "@/assets/MeasureStrip";

export default function Details() {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };
  const { query } = useRouter();
  const { slug } = query;
  const product = All_Products.find((x) => x.id == slug);
  if (!product) {
    return <div>no item found</div>;
  }
  const handleCart = () => {
    dispatch(addToCart(product));
  };

  // thumbnail

  return (
    <Layout title={"Product-detail"}>
      <div className="mx-auto w-full max-w-screen-xl bg-white px-2 py-0.5">
        <div className="mb-3 grid grid-cols-12 gap-2 font-bold">
          {/* ThumbNail */}
          <div className="sm:col-span-6 md:col-span-6 lg:col-span-4">
            <div className="relative flex flex-col items-center justify-center">
              <div className="h-[534px] overflow-hidden object-fill">
                <Image
                  className="left-0 top-0 h-full w-full object-cover object-center "
                  layout="responsive"
                  objectFit="contain"
                  objectPosition="center"
                  alt="Product Image"
                  src={Just_images[currentSlide]}
                  width={100}
                  height={100}
                />
              </div>
              <div className="left-14 mt-4">
                {Just_images.map((image, index) => (
                  <button
                    key={index}
                    className={`mx-2 ${
                      currentSlide === index ? "border-gray-100" : ""
                    }`}
                    onClick={() => changeSlide(index)}
                  >
                    <div
                      className="border-2 border-transparent
                    hover:border-2 hover:border-red-800"
                    >
                      <Image
                        src={image}
                        alt=""
                        width={100}
                        height={100}
                        className="h-16 w-16"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="sm:col-span-6 md:col-span-6 lg:col-span-6">
            <div>
              <div className="text-3xl font-bold">PKR {product.price} </div>
              <div className=" text-base text-gray-400 line-through">
                PKR {product.discountPrice}(50% OFF)
              </div>
            </div>
            <div className="mt-1 text-sm font-semibold text-blue-600/75">
              <Link href="#"> visit the TIKSAWON store</Link>
            </div>
            <p className="mt-4 text-base font-semibold leading-snug tracking-tight">
              Summer Women's Dress 2023 New Korean Fashion Black White Chic and
              Elegant Luxury Loose Party Prom Long
            </p>
            <div className="mt-2 flex">
              <div>
                <BurnIcon width={20} height={20} />
              </div>
              <div className="text-sm font-bold leading-snug text-red-400">
                10 sold in last 24 hours
              </div>
            </div>
            <div className="border-1 mt-1 w-80 border bg-gray-600"></div>
            <div>
              <div className="mt-2 text-sm">Color:White</div>
              <div className=" relative mt-1 flex gap-2 font-bold">
                <Image
                  className="h-16 w-24 rounded-lg"
                  src={product.icon}
                  alt=""
                  width={100}
                  height={100}
                />

                <Image
                  className="h-16 w-24  rounded-lg "
                  src={product.icon}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="mt-1 flex justify-between">
              <div className="mt-4 pl-1 text-sm text-gray-400">Size</div>
              <div className="text-sm text-blue-500">
                <MeasureStripIcon width={10} height={10} />{" "}
                <a href="#">Size Info</a>
              </div>
            </div>
            {/* this is size button */}
            <div className="flex gap-2">
              <button className="h-12 w-16 bg-white p-2 font-bold">M</button>
              <button className="h-12 w-16 bg-white p-2 font-bold">L</button>
              <button className="h-12 w-16 bg-white p-2 font-bold">XL</button>
              <button className="h-12 w-16 bg-white p-2 font-bold">XXL</button>
              <button className="h-12 w-16 bg-white p-2 font-bold">XXXL</button>
            </div>
            <div className="mt-4 text-lg font-bold">Quantity</div>
            <div className="flex justify-between">
              {/* Counter */}
              <Counter />
              <div className="inline-flex  place-items-center">
                <MapIcon width={10} height={10} />
                <div className="ml-1">Ship to</div>
                <div className=" ml-2 w-auto">
                  <CountrySelector />
                </div>
              </div>
            </div>

            <div className="mt-2 font-bold tracking-tight md:tracking-wide">
              Shipping: PKR 200
            </div>
            <p className="text-xs tracking-wide md:tracking-wide">
              From: Karachi to Faisalabad via Pakistan Post Registered Air Mail
              <br /> Estimated delivery: 07 days
            </p>
            <div className="mt-6 inline-flex">
              <button
                type="button"
                className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-teal-500 to-teal-400 px-16 py-2.5 text-center text-sm font-bold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-teal-200
                 to-teal-300 px-16 py-2.5 text-center text-sm font-bold
                   text-black hover:bg-gradient-to-bl focus:outline-none 
                   focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                onClick={handleCart}
              >
                Add To Cart
              </button>
            </div>
            <div className="text-md font-bold">Service</div>
            <div className="text-sm">75-day Buyer Protection</div>
          </div>

          <div className="sm:col-span-12 md:col-span-12 lg:col-span-2">
            <div className="scrollbar scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-500 h-full overflow-y-scroll">
              <div className="h-64">
                <Recommended product={product} />
              </div>
            </div>
          </div>

          <div className=" col-span-12 mt-2 w-full border border-b-0 border-black"></div>

          {/* ProductCard Slider */}
          <div className="w-full sm:col-span-12 md:col-span-12 lg:col-span-12">
            <div className="py-4 text-2xl font-bold ">Related Products</div>
          </div>

          {/* Related Category Component */}

          <div className="col-span-3 bg-white sm:col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3">
            <P_R_sidebar />
            <div className="mt-6">
              <div className="mt-4 text-xl font-bold">Top Rated Sale</div>
              <div
                className="scrollbar-hide hover:scrollbar-auto scrollbar-track-gray-200 scrollbar-thumb-gray-500 scrollbar-thumb-rounded h-screen overflow-y-scroll"
                style={{
                  width: "250px",
                  height: "1720px",
                  overflowY: "scroll",
                }}
              >
                <TopSale />
              </div>
            </div>
          </div>
          {/* shop store & positive feedback  */}
          <div className=" bg-white sm:col-span-12 md:col-span-8 lg:col-span-9">
            <div className="col-span-12 grid grid-flow-col py-2">
              <div className="col-span-3">
                <div className="text-xs">86.0% Positive Feedback</div>
                <div className="text-xs">728 Followers</div>
              </div>
              <div className="col-span-3">
                <div className="text-xl font-bold">Shop 5886144 Store</div>
              </div>
              <div className="col-span-3 bg-white">
                <div className="col-span-12 grid grid-flow-col">
                  <div className="col-span-4 grid grid-flow-col">
                    <div className="flex flex-wrap justify-items-center gap-2">
                      <svg
                        className="mt-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                      </svg>
                      <a
                        className="h-4 w-4 place-content-around pt-2 text-xs"
                        href="Contact"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <button className="ml-5 h-8 w-24 rounded border-2  border-red-600 text-xs ">
                      + Follow
                    </button>
                  </div>
                  <div className="col-span-4">
                    <button className=" h-8 w-24 rounded bg-red-600 px-1 text-xs text-white ">
                      Visit Store
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-9">
              {/* Cards */}
              <ShopRelated />
            </div>
            {/* Border */}
            <div className="border border-b-0 border-black sm:col-span-12 md:col-span-8 lg:col-span-9"></div>
            <div className="mt-4 sm:col-span-12 md:col-span-8 lg:col-span-9">
              <Description />
            </div>
            {/* View More button*/}
            <div className="mt-4 sm:col-span-12 md:col-span-8 lg:col-span-9">
              <ViewMore />
            </div>
            {/* Specification */}
            <div className="sm:col-span-12 md:col-span-8 lg:col-span-9">
              <Specification />
            </div>
            {/* customer review & Review this Product */}
            <div className="mt-6 sm:col-span-12 md:col-span-8 lg:col-span-9">
              <div className="grid grid-cols-12">
                {/* customer Review */}
                <Reviews />

                {/* Review this product */}
                <div className="col-span-6">
                  <ProductReviews />
                </div>
              </div>
            </div>
            {/* Top Reviews Comment section */}
            <div className="mt-6 sm:col-span-12 md:col-span-8 lg:col-span-9">
              <TopReviews />
            </div>
          </div>
        </div>
        {/* ProductCard Bottom */}
        <div className="mt-6 sm:col-span-12 md:col-span-12 lg:col-span-12">
          {/*  */}
          <DetailsCard />
        </div>
      </div>
    </Layout>
  );
}
