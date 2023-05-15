import Image from "next/image";
import React from "react";

export default function OrderDetails() {
  return (
    <div className="">
      <div className="my-4 flow-root rounded-lg bg-white p-4">
        <div className="mb-5 border-b border-gray-400 py-5">
          <div className="flex place-items-center justify-between">
            <h3 className="text-2xl font-semibold text-black">Awaiting Delivery</h3>
            <div className="flex flex-wrap place-items-center">
              <div className="border-r border-gray-400 pr-5 text-right">
                <p className="text-base font-medium text-gray-600">
                  Order Date: Apr-2-2023
                </p>
                <p className="text-base font-medium text-gray-600">
                  Order Id: 123456789{" "}
                  <a href="#" className="text-blue-500">
                    Copy
                  </a>
                </p>
              </div>
              <div className="relative px-5">
                <h3 className="text-2xl font-semibold text-black">
                  <a href="#">
                    Order Details
                    <span className="absolute -right-3 top-0 bottom-0 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          <li className="flex py-6">
            <div className="h-36 w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Image
                src="/product1.jpg"
                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                className="h-full w-full object-cover object-center"
                width={1000}
                height={1000}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col py-1">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3 className="text-base font-medium">
                    <a href="#">
                      HP ProBook MT31 Mobile Thin Client - Intel Coleron 4GB to
                      16GB...
                    </a>
                  </h3>
                  <p className="w-36 text-lg font-medium">Total: RS 97,000</p>
                </div>
              </div>
              <div className="mt-2 flex flex-1 items-center justify-between text-sm">
                <p className="mt-1 text-base text-gray-400">HP MT31</p>
                <div className="flex">
                  <button
                    type="button"
                    className="h-9 w-36 rounded-md bg-teal-500 px-5 py-2 font-medium text-white hover:bg-teal-400"
                  >
                    Confirm Reciept
                  </button>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <p className="mt-1 text-base font-semibold text-black">
                  RS: 48500{" "}
                  <span className="text-base font-normal text-gray-400">x</span>{" "}
                  <span className="text-base font-normal text-gray-400">2</span>
                </p>
                <div className="flex">
                  <button
                    type="button"
                    className="h-9 w-36 rounded-md border bg-white px-5 py-2 font-medium hover:bg-gray-600 hover:text-white"
                  >
                    Track Order
                  </button>
                </div>
              </div>
              <a href="#" className="h-6 w-8 rounded-sm bg-gray-300 py-1">
              
              </a>
            </div>
          </li>
          {/* <!-- More products... --> */}
        </ul>
      </div>
    </div>
  );
}
