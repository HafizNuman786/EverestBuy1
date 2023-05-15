import React from "react";

export default function ColorFilter() {
  return (
    <div className="col-span-12 mt-4 border bg-white">
      <div className="pl-2 pt-2 text-sm font-semibold text-black">Color</div>
      <div className="mt-4 grid grid-cols-5 items-center gap-x-4 gap-y-4 px-4 md:grid-cols-5 lg:grid-cols-5 xl:col-span-5">
        <div className="h-8 w-8 rounded-full bg-slate-800"></div>
        <div className="h-8 w-8 rounded-full bg-red-800"></div>
        <div className="h-8 w-8 rounded-full bg-green-800"></div>
        <div className="h-8 w-8 rounded-full bg-blue-800"></div>
        <div className="h-8 w-8 rounded-full bg-pink-800"></div>
        <div className="h-8 w-8 rounded-full bg-black"></div>
        <div className="h-8 w-8 rounded-full bg-pink-200"></div>
        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        <div className="h-8 w-8 rounded-full bg-red-300"></div>
        <div className="h-8 w-8 rounded-full bg-green-200"></div>
      </div>
    </div>
  );
}
