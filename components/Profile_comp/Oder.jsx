import React from "react";
import OrderDetails from "./OderDetails";


export default function Awaiting() {
  return (
    <div className="cols-span-12">
      <div className="mb-4 flow-root rounded-lg bg-white p-4">
        <div className="mb-4 flex place-items-center justify-between">
          <ul>
            <li className="order-link active mr-10 inline-block">
              <a
                href="#all"
                className="text-base font-semibold text-black hover:text-teal-400"
              >
                All
              </a>
            </li>
            <li className="order-link mr-10 inline-block">
              <a
                href="#unpaid"
                className="text-base font-semibold text-black hover:text-teal-400"
              >
                Unpaid
              </a>
            </li>
            <li className="order-link mr-10 inline-block">
              <a
                href="#processing"
                className="text-base font-semibold text-black hover:text-teal-400"
              >
                Processing
              </a>
            </li>
            <li className="order-link mr-10 inline-block">
              <a
                href="#shipped"
                className="text-base font-semibold text-black hover:text-teal-400"
              >
                Shipped
              </a>
            </li>
            <li className="order-link mr-10 inline-block">
              <a
                href="#completed"
                className="text-base font-semibold text-black hover:text-teal-400"
              >
                Completed
              </a>
            </li>
          </ul>
          <div className="relative">
            <p className="pl-7 text-lg font-medium text-black">
              <a className="flex" href="#">
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
                Deleted Order
              </a>
            </p>
          </div>
        </div>

        {/*  */}

        <div className="flex place-items-center justify-between">
          <div className="flex items-center bg-white">
            <select className="h-10 w-32 rounded-tl-lg rounded-bl-lg border-2 border-gray-500 px-2 py-2 text-sm">
              <option value="option1">Order</option>
              <option value="option2">Order 2</option>
              <option value="option3">Order 3</option>
            </select>
            <div className="h-10 w-72 flex-1 border-y-2 border-gray-500">
              <input
                type="text"
                placeholder="Order ID, Product or Store Name"
                className="h-full w-full bg-transparent p-2 text-sm focus:outline-none"
              />
            </div>
            <button className="rounded-tr-lg rounded-br-lg border-teal-500 bg-teal-500 p-2 text-white hover:bg-teal-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          <select className="h-10 w-60 rounded-lg border-2 border-gray-500 px-2 py-2 text-sm">
            <option value="option1">All Time</option>
            <option value="option2">Last Week</option>
            <option value="option3">Last Month</option>
          </select>
        </div>

       
      </div>
      <div>
          <OrderDetails/>
        </div>
    </div>
  );
}
