import React from "react";
import Layout from "@/components/Layout";
import FirstStore from "@/components/Cart-comp/First_Store";
import SecondStore from "@/components/Cart-comp/Second_Store";
import Summary from "@/components/Cart-comp/Summary";
import Payment from "@/components/Profile_comp/Payment";
import RecentlyView from "@/components/Cart-comp/Recently_viewed";
import DetailsCard from "@/components/Product-Details/DetailCard";
import { useSelector } from "react-redux";

export default function AddToCart() {
  const items = useSelector((state) => state.cart.cartItems);
  console.log("cartItems", items);
  return (
    <Layout title={"Cart"}>
      <div className="mx-auto max-w-screen-xl bg-slate-50 py-10 ">
        <div className="col-span-12 gap-4">
          <div className="sm:col-span-12 md:col-span-6 lg:col-span-9 xl:col-span-9">
            <div className="col-span-12 text-xl font-semibold">
              Shopping Cart({items.length})
            </div>
            {/* select all items */}
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
                Select All Items
              </label>
            </div>
            <div className="col-span-12 flex justify-between">
              <div className="col-span-6">
                <button
                  type="button"
                  className="hover:border-2-gray-200 dark:hover:border-2-black mb-2 mr-2 rounded-lg border bg-white px-2 py-1.5 text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-200"
                >
                  All
                </button>
                <span className="bg-white text-sm">PKR 3000 Off</span>
              </div>
              <div className="col-span-6 grid grid-flow-col gap-2">
                <div className="col-span-2 mt-1 text-end text-lg">View</div>
                <div className="col-span-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <div className="col-span-2">
                  {" "}
                  <button
                    data-collapse-toggle="navbar-hamburger"
                    type="button"
                    className=" mt-1 inline-flex items-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-hamburger"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid grid-flow-col gap-2 p-2">
            <div className="rounded bg-white px-1 sm:col-span-12 md:col-span-6 lg:col-span-10 xl:col-span-10">
              {/* shopping Cart */}
              {/* 1st store */}
              <FirstStore  data={items} />
              {/* second store */}
              {/* <SecondStore /> */}
            </div>

            <div className="rounded p-1 sm:col-span-12 md:col-span-6 lg:col-span-2 xl:col-span-2">
              {/* Summary */}
              <Summary items={items} />
              {/* payment method */}
              <Payment />
              {/* recently view items */}
              <RecentlyView />
            </div>
          </div>
          {/* Cards */}
          <div className="mt-4">
            <div className="border border-b-0  border-black sm:col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-12"></div>
            <div className="mt-4 text-base font-semibold">More To Love</div>
            <div className="mt-2">
              {" "}
              <DetailsCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
