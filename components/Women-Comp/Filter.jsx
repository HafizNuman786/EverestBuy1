import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Filter() {
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    min: 0,
    max: 100,
    confirmed: false,
  });

  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

  // updating the minimum price
  const handleMinPrice = (event) => {
    setSelectedPriceRange((prevState) => ({
      ...prevState,
      min: event.target.value,
    }));
  };
  // updating the maximum price
  const handleMaxPrice = (event) => {
    setSelectedPriceRange((prevState) => ({
      ...prevState,
      max: event.target.value,
    }));
  };
  const handleConfirmPriceRange = () => {
    setSelectedPriceRange((prevState) => ({ ...prevState, confirmed: true }));
  };
  // Update the priceRange state only when the "OK" button has been clicked.
  useEffect(() => {
    if (selectedPriceRange.confirmed) {
      setPriceRange(selectedPriceRange);
    }
  }, [selectedPriceRange]);

  // filtered Data
  // const filteredProducts = products.filter((product) => {
  //   return product.price >= priceRange.min && product.price <= priceRange.max;
  // });
  return (
    <div className="col-span-12">
      <div className="flex items-center">
        <div className="text-xs text-gray-400">Price:</div>
        <div className="ml-2">
          <input
            id="minPrice"
            type="number"
            value={selectedPriceRange.min}
            placeholder="MinPrice"
            className="px-2 py-3 placeholder-gray-300"
            onChange={handleMinPrice}
          />
        </div>
        <div className="px-2">-</div>
        {/* Max button */}
        <div className="">
          <input
            id="maxPrice"
            placeholder="MaxPrice"
            className="px-2 py-3 placeholder-gray-300"
            type="number"
            value={selectedPriceRange.max}
            onChange={handleMaxPrice}
          />
        </div>
        <div className="px-2">
          <button
            onClick={handleConfirmPriceRange}
            className="rounded bg-green-800  py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            OK
          </button>
        </div>
        {/* check box */}
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          {/* ratting star */}
          <div className=" ml-2 flex items-center">
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}