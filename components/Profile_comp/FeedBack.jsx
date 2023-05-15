/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function FeedBack() {
  return (
    <div>
      {/* FeedBack GuidLine */}
      <h3 className="mb-3 px-4 text-lg font-semibold">Feedback</h3>
      <div className="relative mb-5 w-full border border-black bg-white p-5">
        <div
          className="bg-warning-100  text-warning-800 w-full  data-[te-alert-show]:inline-flex"
          role="alert"
          data-te-alert-init=""
          data-te-alert-show=""
        >
          <ol className="ml-4 list-decimal text-sm tracking-normal text-gray-800">
            <p className="list-none">GuidLines</p>
            <li>
              You can leave feedback for sellers within 30 days in "Order
              Awaiting My Feedback".
            </li>
            <li>
              Feedback will be published when both you and seller have left
              feedback, or at the end of 30 days.
            </li>
            <li>Learn more about Feedback and Rating Policies.</li>
          </ol>
        </div>
        <button
          type="button"
          className="text-warning-900 hover:text-warning-900 absolute top-1 right-1 box-content rounded-none border-none p-1 opacity-50 focus:opacity-100 focus:shadow-none focus:outline-none hover:no-underline hover:opacity-75"
          data-te-alert-dismiss=""
          aria-label="Close"
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {/* Feed Back Link */}

      <div className="overflow-hidden ">
        <a
          className="feedbackLink active mb-1 inline-block rounded bg-teal-500 p-2 text-base font-medium text-white"
          href="#orderawaiting"
        >
          Order Awaiting My Feedback <span>(0)</span>
        </a>
        <a
          className="feedbackLink mb-1 ml-2 inline-block rounded bg-teal-500 p-2 text-base font-medium text-white"
          href="#reviewaboutyou"
        >
          Reviews About You
        </a>
        <a
          className="feedbackLink mb-1 ml-2 inline-block rounded bg-teal-500 p-2 text-base font-medium text-white"
          href="#reviewbyyou"
        >
          Reviews By You
        </a>
      </div>
      {/* FeedBack Content */}

      <div className="feedbackContent" id="reviewbyyou">
        <div className="block rounded-lg bg-white px-2 py-4">
          <div className="flex">
            <p className="font-base mr-2 text-lg text-gray-700">Order No:</p>
            <form>
              <input
                type="text"
                placeholder="Search here..."
                className="mr-1 h-8 rounded-lg border border-gray-700 px-2"
              />
              <input
                type="button"
                className="rounded-lg bg-teal-500 px-4 py-1 text-base font-medium text-white"
                value="Search"
              />
            </form>
          </div>
          <div className="mt-2 flex">
            <table className="w-full border-collapse rounded-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100">
                  <th className="px-4 py-2 text-left font-normal">Order Details</th>
                  <th className="px-4 py-2 text-left font-normal">Feedback</th>
                  <th className="px-4 py-2 text-left font-normal">
                    Feedback Status
                  </th>
                  <th className="px-4 py-2 text-left font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">
                    <div className="flex place-items-center">
                      <Image
                        src="/product1.jpg"
                        alt="products"
                        className="mr-2 h-16 w-16"
                        width={1000} height={1000}
                      />
                      <div className="block">
                        <p className="mb-1 text-sm font-bold text-gray-700">
                          Core I7 Laptop
                        </p>
                        <p className="text-sm font-normal text-gray-500">
                          Rs: 40,000<span className="mx-1">x</span>
                          <span>2</span> Piece
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <h5 className="text-sm font-semibold text-black">
                      Feedback I Left:
                    </h5>
                    <p className="font-base text-sm text-gray-500">
                      There Is No Feedback yet
                    </p>
                  </td>
                  <td className="px-4 py-2">
                    <h5 className="flex text-sm font-semibold text-black">
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Awaiting
                    </h5>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#">
                      <button className="ease rounded-lg border-gray-600 bg-gray-300 px-3 py-1 text-black hover:bg-teal-500 hover:text-white">
                        Leave feedback
                      </button>
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">
                    <div className="flex place-items-center">
                      <Image
                        src="/product2.jpg"
                        alt="products"
                        className="mr-2 h-16 w-16"
                        width={1000}
                        height={1000}
                      />
                      <div className="block">
                        <p className="mb-1 text-sm font-bold text-gray-700">
                          Core I7 Laptop
                        </p>
                        <p className="text-sm font-normal text-gray-500">
                          Rs: 40,000<span className="mx-1">x</span>
                          <span>2</span> Piece
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <h5 className="text-sm font-semibold text-black">
                      Feedback I Left:
                    </h5>
                    <p className="font-base text-sm text-gray-500">
                      There Is No Feedback yet
                    </p>
                  </td>
                  <td className="px-4 py-2">
                    <h5 className="flex text-sm font-semibold text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Delivered
                    </h5>
                  </td>
                  <td className="px-4 py-2">
                    <a href="#">
                      <button className="ease rounded-lg border-gray-600 bg-gray-300 px-3 py-1 text-black hover:bg-teal-500 hover:text-white">
                        Leave feedback
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
