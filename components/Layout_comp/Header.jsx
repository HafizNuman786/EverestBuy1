import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { SignInIcon } from "@/assets/SignIn";
import { CartIcon } from "@/assets/Cart";
import { HeartIcon } from "@/assets/Heart";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="rounded border-gray-200 bg-white dark:bg-gray-900 sm:px-4 lg:px-0">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.png" width={150} height={20} alt="Everest Buy" />
        </Link>

        <div className="flex w-1/3  md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="mr-1
                  rounded-lg
                  p-2.5
                  text-sm
                  text-gray-500
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-4
                  focus:ring-gray-200
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:focus:ring-gray-700
                  lg:hidden"
          >
            <svg
              className="h-5
                     w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0
                     0 20
                     20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8
                        4a4
                        4 0
                        100
                        8 4
                        4 0
                        000-8zM2
                        8a6
                        6 0
                        1110.89
                        3.476l4.817
                        4.817a1
                        1 0
                        01-1.414
                        1.414l-4.816-4.816A6
                        6 0
                        012
                        8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden w-full lg:block">
            <div
              className="pointer-events-none absolute inset-y-0
                     right-0
                     flex
                     justify-end
                     rounded-r-lg
                     bg-emerald-700
                     px-3
                     py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <div
              className="pointer-events-none absolute inset-y-0
                     right-11
                     flex
                     justify-end
                     bg-emerald-700
                     px-3
                     py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                ></path>
              </svg>
              <span className="sr-only">Mic icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block
                     w-full
                     rounded-lg
                     border
                     border-gray-300
                     bg-gray-50
                     px-5
                     py-3
                     text-sm
                     text-gray-900
                     focus:border-blue-500
                     focus:ring-blue-500
                     dark:border-gray-600
                     dark:bg-gray-700
                     dark:text-white
                     dark:placeholder-gray-400
                     dark:focus:border-blue-500
                     dark:focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex
                  items-center
                  rounded-lg
                  p-2
                  text-sm
                  text-gray-500
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-gray-200
                  dark:text-gray-400
                  dark:hover:bg-gray-700
                  dark:focus:ring-gray-600
                  lg:hidden"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        {/* Country Selector */}
        <div className=" w-1/3 items-center justify-end lg:order-2 lg:flex">
          <div className="w-1/3 items-center justify-center lg:order-2 lg:flex">
            <div className="flex items-center md:order-2">
              <button
                type="button"
                data-dropdown-toggle="language-dropdown-menu"
                className="hidden cursor-pointer  items-center justify-center rounded-lg text-lg text-black hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:inline-flex"
              >
                <svg
                  className="h-4 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 3900 3900"
                >
                  <switch>
                    <g fill="#fff">
                      <path fill="#b22234" d="M0 0h7410v3900H0z" />
                      <path
                        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                        stroke="#fff"
                        strokeWidth="300"
                      ></path>
                      <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                    </g>
                  </switch>
                </svg>
                EN-USD
              </button>
              <div
                className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:bg-gray-700"
                id="language-dropdown-menu"
              >
                <ul className="py-2" role="none">
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 rounded-full"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 3900 3900"
                        >
                          <switch>
                            <g fill="#fff">
                              <path fill="#b22234" d="M0 0h7410v3900H0z" />
                              <path
                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                stroke="#fff"
                                strokeWidth="300"
                              ></path>
                              <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                            </g>
                          </switch>
                        </svg>
                        English (US)
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 rounded-full"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 3900 3900"
                        >
                          <switch>
                            <g fill="#fff">
                              <path fill="#b22234" d="M0 0h7410v3900H0z" />
                              <path
                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                stroke="#fff"
                                strokeWidth="300"
                              ></path>
                              <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                            </g>
                          </switch>
                        </svg>
                        Deutsch
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 rounded-full"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 3900 3900"
                        >
                          <switch>
                            <g fill="#fff">
                              <path fill="#b22234" d="M0 0h7410v3900H0z" />
                              <path
                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                stroke="#fff"
                                strokeWidth="300"
                              ></path>
                              <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                            </g>
                          </switch>
                        </svg>
                        Italiano
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="mr-2 h-3.5 w-3.5 rounded-full"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <switch>
                            <g fill="#fff">
                              <path
                                id="a"
                                fill="#ffde00"
                                d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                              />
                              <path fill="#de2910" d="M0 0h512v512H0z" />
                            </g>
                          </switch>
                        </svg>
                        中文 (繁體)
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*  */}

          <div
            className="hidden items-center
                  md:order-2
                  md:flex"
          >
            <Link href="/login">
              <button
                type="button"
                className="mr-3
                flex
                     justify-between
                     text-sm    
                  md:mr-0"
              >
                <SignInIcon width={35} height={35} />
                <div className="ml-2 text-lg text-gray-500">Sign In</div>
              </button>
            </Link>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1
                     inline-flex
                     items-center
                     rounded-lg
                     p-2
                     text-sm
                     text-gray-500
                     hover:bg-gray-100
                     focus:outline-none
                     focus:ring-2
                     focus:ring-gray-200
                     dark:text-gray-400
                     dark:hover:bg-gray-700
                     dark:focus:ring-gray-600
                     md:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6
                        w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0
                        0 20
                        20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3
                           5a1
                           1
                           0
                           011-1h12a1
                           1
                           0
                           110
                           2H4a1
                           1
                           0
                           01-1-1zM3
                           10a1
                           1
                           0
                           011-1h12a1
                           1
                           0
                           110
                           2H4a1
                           1
                           0
                           01-1-1zM3
                           15a1
                           1
                           0
                           011-1h12a1
                           1
                           0
                           110
                           2H4a1
                           1
                           0
                           01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="relative ml-5 hidden items-center md:order-3 md:flex">
            <Link href="#">
              <HeartIcon width={35} height={35} />
              <span className="absolute -right-3 -top-1 mr-2 inline-flex items-center justify-center rounded-full bg-emerald-700 px-2 py-1 text-xs font-bold leading-none text-white">
                2
              </span>
            </Link>
          </div>

          <div className="relative ml-5 hidden items-center md:order-3 md:flex">
            <Link href="/cart">
              <CartIcon width={35} height={35} />
              <span className="absolute -right-3 -top-1 mr-2 inline-flex items-center justify-center rounded-full bg-emerald-700 px-2 py-1 text-xs font-bold leading-none text-white">
                {totalQuantity.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
