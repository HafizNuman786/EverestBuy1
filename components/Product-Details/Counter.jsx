import React, { useState } from "react";
// import 'tailwindcss/tailwind.css';

const Counter = ( ) => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center">
      <button
        className="mr-4 bg-gray-400  rounded px-2 font-bold text-white hover:bg-teal-500"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className="text-2xl font-bold">{count}</span>
      <button
        className="ml-4 bg-gray-400  rounded px-2 font-bold text-white  hover:bg-teal-500"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
