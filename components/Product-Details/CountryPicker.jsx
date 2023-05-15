import { DownArrowIcon } from "@/assets/DownArrow";
import React from "react";

const CountrySelector = () => {
  return (
    <div className="relative">
      <select className="focus:shadow-outline block w-full appearance-none rounded border bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
        <option value="Pakistan">Pakistan</option>
        <option value="usa">United States</option>
        <option value="canada">Canada</option>
        <option value="mexico">Mexico</option>
      </select>
      <div className="select-arrow pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <DownArrowIcon width={20} height={20} />
      </div>
    </div>
  );
};

export default CountrySelector;
