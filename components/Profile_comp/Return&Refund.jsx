import React from "react";

export default function ReturnAndRefund() {
  return (
    <div>
      <h3 className="mb-3 px-4 text-lg font-semibold">Refunds & Return</h3>
      {/* in process */}
      <div className="mb-5 rounded-lg bg-white p-4">
        <h5 className="mb-3 text-base font-normal text-teal-500">
          In progress <span>(0)</span>
        </h5>
        <div className="flex flex-wrap place-items-center justify-between">
          <input
            type="text"
            className="w-60 rounded-md bg-gray-200 py-2 px-4 text-lg text-gray-700"
            placeholder="Order number"
          />
          <input
            type="text"
            className="w-60 rounded-md bg-gray-200 py-2 px-4 text-lg text-gray-700"
            placeholder="Store name"
          />
          <select className="w-60 rounded-md bg-gray-200 p-2 pr-4 text-lg text-gray-700">
            <option value="option1">In Progress</option>
            <option value="option2">Shipped</option>
            <option value="option3">Completed</option>
          </select>
          <button
            type="submit"
            className="h-8 rounded-md bg-teal-500 px-5 text-center text-lg font-medium text-white hover:bg-teal-300"
          >
            Search
          </button>
        </div>
      </div>

      {/*  */}
      <div className="rounded-lg bg-white p-4">
        <div className="grid grid-cols-12 border-b border-gray-500 py-2 pb-5">
          <p className="col-span-6 text-gray-700">Order Information</p>
          <p className="col-span-6 text-gray-700">Current Status</p>
        </div>
        <p className="pt-5 text-gray-700">
          Your search did not match any listings.
        </p>
      </div>
    </div>
  );
}
