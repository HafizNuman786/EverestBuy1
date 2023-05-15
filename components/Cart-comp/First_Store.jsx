import React from "react";
import Image from "next/image";
import Counter from "./Counter";
import Link from "next/link";
import { removeCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

export default function FirstStore({ data }) {
  const dispatch = useDispatch();
  const removeItem = (item) => {
    dispatch(removeCart(item));
  };

  return (
    <>
      <div className="col-span-12 mt-4 flex items-center">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
        >
          First store Name
        </label>
      </div>
      <div className="border border-b-0 border-black sm:col-span-12 md:col-span-9 lg:col-span-9"></div>
      {data?.map((item) => {
        return (
          <>
            <div className="mt-2 items-center flex">
              <div className=" flex items-center">
                {/* radio icon */}
                <div className="">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="h-4 w-4 border-gray-300 bg-gray-100 text-teal-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                </div>
                <div className=" relative ml-2">
                  <Image
                    className="h-32 w-32 rounded"
                    src={item.icon}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              {/* 1st store */}
              <div className="ml-4 w-full pl-2">
                <p className="text-base font-semibold">{item.name}</p>
                {/* color and size */}
                <div className="flex items-center mt-2 ">
                  <div className="rounded bg-white text-xs text-black">
                    Color:white
                  </div>
                  <div className="ml-4 rounded bg-white  text-xs text-black">
                    Size
                  </div>
                </div>
                {/* price and counter */}
                <div className="flex items-center justify-between">
                  <div className="mt-2 text-lg text-gray-700 font-semibold">
                    RS:{item.price}
                  </div>
                  <div className="">
                    <Counter quantity={item} />
                  </div>
                </div>

                {/* shipping and like/delete */}

                <div className="mt-2 flex justify-between">
                  <Link href="">
                    <p className="text-base">
                      + shipping free Pakistan PKR 200
                    </p>
                  </Link>
                  <div className="flex justify-between">
                    <div className="p-2">
                      {/* like item */}
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </div>
                    <div className="p-2">
                      {/* Delete Items */}
                      <button onClick={() => removeItem(item)}>
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
