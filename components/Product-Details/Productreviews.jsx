import React from "react";

export default function ProductReviews() {
  return (
    <div className="col-span-6">
      <div className="text-base font-extrabold">Review this product</div>
      <p className="py-4 text-xs">Share your thoughts with other customers</p>
      <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Write a Customer Review" type="text" name="search"/>
        
    </div>
  );
}
