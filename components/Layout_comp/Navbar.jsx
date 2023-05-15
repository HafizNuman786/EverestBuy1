import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="hidden bg-gray-300 lg:block">
      <div className="mx-auto max-w-screen-xl px-0 py-2">
        <div className="flex items-center justify-between">
          <ul className="mt-0 mr-6 flex flex-row space-x-8 text-sm font-medium">
            <li>
              <Link
                href="#"
                className="font-['sans'] text-lg text-gray-900 dark:text-white"
                aria-current="page"
              >
                Track My Order
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="font-['sans'] text-lg text-gray-900 dark:text-white"
              >
                Create Store
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-['sans'] text-lg text-gray-900 dark:text-white"
              >
                Free Domain
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-['sans'] text-lg text-gray-900 dark:text-white"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-['sans'] text-lg text-gray-900 dark:text-white"
              >
                How To Buy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-['sans'] text-lg text-gray-900 dark:text-white"
              >
                Corporate &amp; Bulk Purchasing
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-end">
            <Image
              src="/appstore1.png"
              width={150}
              height={20}
              alt="android-app"
              className="mx-2 h-10 w-32 rounded-lg "
            />
            <Image
              src="/googlePlay1.png"
              width={150}
              height={20}
              alt="android-app"
              className="flex h-10 w-32 flex-wrap rounded-lg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
