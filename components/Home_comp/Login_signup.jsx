import React from "react";
import Link from "next/link";

export default function LoginSign() {
  return (
    <div className="col-span-12 rounded-lg bg-white sm:h-28 md:col-span-12 md:h-48 lg:col-span-4">
      <div className="px-4 py-5 sm:flex sm:items-center sm:justify-between lg:block">
        <h3 className="mb-0 text-center text-2xl text-gray-500 lg:mb-10">
          Welcome to <br />
          <span className="text-2xl font-bold text-black">EverestBuy!</span>
        </h3>
        <div className="flex justify-center">
          <Link href="/signup">
            <button className="mr-2 rounded-md bg-emerald-500 px-4 py-1 text-white sm:w-auto">
              Join
            </button>
          </Link>
          <Link href="/login">
            <button className="rounded-md bg-gray-300 px-4 py-1 text-black sm:w-auto whitespace-nowrap">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
