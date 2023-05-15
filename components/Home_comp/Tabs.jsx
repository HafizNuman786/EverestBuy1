import React from "react";
import Link from "next/link";

export default function Tabs() {
  return (
    <>
      <div className="col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 place-items-center">
        <ul className="col-span-12 grid grid-cols-12  bg-white py-2 px-3  divide-x divide-gray-200 rounded-lg text-center text-sm font-medium text-gray-500 shadow dark:text-gray-400 sm:flex">
          <li className="w-full">
            <Link
              href="/profile"
              className="inline-block w-full rounded-l-lg p-4  hover:text-teal-500 text-gray-900 dark:text-white"
              aria-current="page"
            >
              Profile
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="#"
              className="inline-block w-full bg-white p-4  hover:text-teal-500 "
            >
              Dashboard
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="#"
              className="inline-block w-full bg-white p-4  hover:text-teal-500"
            >
              Settings
            </Link>
          </li>
          <li className="w-full">
            <Link
              href=""
              className="inline-block w-full rounded-r-lg bg-white p-4  hover:text-teal-500"
            >
              Invoice
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
