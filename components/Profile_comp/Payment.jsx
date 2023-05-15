import React from "react";

export default function Payment() {
  return (
    <div>
      {/* PaymentMethod */}
      <div className="mb-4 flex place-items-center justify-between rounded-lg bg-white p-4">
        <h3 className="text-lg font-semibold">Payment</h3>
        <a href="#" className="text-base font-normal">
          setting
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-5 w-5"
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
      </div>
      {/* Cards */}
      <div className="rounded-lg bg-white p-4">
        <h3 className="mb-10 text-lg font-semibold">Cards</h3>
        <div className="py-22 relative mb-5 h-60 w-96 rounded-lg bg-gray-100 text-center">
          <button
            className="absolute top-0 bottom-0 right-0 left-0 m-auto text-base font-semibold"
            onclick="document.getElementById('file-upload').click()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-5 w-5 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              ></path>
            </svg>
            Add new card
          </button>
          <input id="file-upload" type="file" className="hidden" />
        </div>
        <p className="text-base text-gray-600">
          No card saved. Add one below to get started
        </p>
      </div>
    </div>
  );
}
