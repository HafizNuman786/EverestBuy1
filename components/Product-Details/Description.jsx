/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Description() {
  return (
    <div className="cols-span-12">
      <div className="text-lg font-bold">Description</div>
      <div className="mt-2 text-base tracking-tight text-gray-500 md:tracking-wide">
        <p>SIZE(CM)Length Bust Waist Sleeve Hip Shoulder</p>
      </div>
      <div className="mt-4 text-gray-500">S/36/1 122 62 55 64 78 25</div>
      <div className=" text-gray-500">M/38/2 123 66 59 65 82 26 </div>
      <div className=" text-gray-500">L /40/3 124 70 63 66 86 27</div>
      <div className="mt-5 ml-4">
        <div className="col-span-12">Note:</div>
        <ol className="list-decimal text-sm  text-gray-500">
          <li> Please allow '±3'cm as the error range due to manual measure.</li>
          <li> Please check size chart to choose size. Do not select according to your habit</li>
          <li> If still not sure about size. Please leave us your data for our suggestion.</li>
        </ol>
      </div>
    </div>
  );
}
