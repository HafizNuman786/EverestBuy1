import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Delivery() {
  return (
    <div className="mb-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
      <div className="rounded-lg bg-white px-2 py-4">
        <div className="relative px-2">
          <h3 className="ml-8 text-lg text-black">
            <Link href="#">
              <Image
                width={100}
                height={100}
                src="/delivery.svg"
                className="absolute left-0 top-0 h-7 w-7"
                alt="payments"
              />
              Free Delivery from RS 5000
            </Link>
          </h3>
        </div>
      </div>
      <div className="rounded-lg bg-white px-2 py-4">
        <div className="relative px-2">
          <h3 className="ml-8 text-lg text-black">
            <Link href="#">
              <Image
                width={150}
                height={100}
                src="/return.svg"
                className="absolute left-0 top-0 h-7 w-7"
                alt="payments"
              />
              15 Days free return
            </Link>
          </h3>
        </div>
      </div>
      <div className="rounded-lg bg-white px-2 py-4">
        <div className="relative px-2">
          <h3 className="ml-8 text-lg text-black">
            <Link href="#">
              <Image
                width={150}
                height={100}
                src="payment.svg"
                className="absolute left-0 top-0 h-7 w-7"
                alt="payments"
              />
              Secure Payment System
            </Link>
          </h3>
        </div>
      </div>
      <div className="rounded-lg bg-white px-2 py-4">
        <div className="relative px-2">
          <h3 className="ml-8 text-lg text-black">
            <Link href="#">
              <Image
                width={150}
                height={100}
                src="supports.svg"
                className="absolute left-0 top-0 h-7 w-7"
                alt="payments"
              />
              24/7 Online Support
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
