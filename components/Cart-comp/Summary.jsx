import React from "react";

export default function Summary({ items }) {
  return (
    <div className="rounded bg-white p-2 ">
      <div className="text-2xl font-bold text-black">Summary</div>
      <div className="mt-2 flex justify-between p-1">
        <div className="text-base">Subtotal</div>
        <div className="text-base">
          {" "}
          {items.reduce((a, c) => a + c.cartQuantity * c.price, 0)}
        </div>
      </div>

      <div className="mt-2 flex justify-between p-1">
        <div className="text-base">Shipping Free</div>
        <div className="text-base">PKR 400</div>
      </div>

      <div className="mt-4 flex justify-between p-1">
        <div className="text-lg font-semibold">Total</div>
        <div className="text-lg font-semibold">
          PKR{items.reduce((a, c) => a + c.cartQuantity * c.price, 0) + 400}
        </div>
      </div>

      <div className="mt-4 text-center">
        <button
          type="button"
          className="mr-2 mb-2 rounded-lg bg-gradient-to-br from-teal-500 to-teal-400 px-16 py-2.5 text-center text-lg font-bold  text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-gradient-to-bl dark:focus:ring-blue-800"
        >
          CHECKOUT (2)
        </button>
      </div>
    </div>
  );
}
