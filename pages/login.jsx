import React from "react";
import { useForm } from "react-hook-form";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function LogIn() {
  let data = useForm();
  function loginUser() {}
  return (
    <>
      <Head>
        <title>login</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="outer_ring absolute -right-14 -top-44 -z-10 h-[500px] w-[500px] rotate-45 rounded-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-300 p-10 sm:-right-28 sm:-top-40">
          <div className="h-full w-full rounded-full bg-gray-100"></div>
        </div>
        <div className="flex w-4/5 place-items-center align-middle lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="col-span-12 m-auto grid grid-cols-12 rounded-2xl bg-white shadow-2xl sm:col-span-12 md:col-span-12 lg:col-span-12">
            <div className="z-10 col-span-12 grid grid-cols-12 text-center sm:col-span-12 md:col-span-12 lg:col-span-12">
              <div className="md-col-span-12 z-10 col-span-12 block px-5 py-5 sm:col-span-12 md:grid lg:col-span-8 lg:px-20 lg:py-20 xl:col-span-8">
                <div className="col-span-12 m-auto mb-5 text-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="mx-auto mb-4 w-40 md:w-60"
                  />
                  <h1 className="mb-4 text-2xl font-bold text-gray-700">
                    Welcome Back
                  </h1>
                </div>
                <form
                  onSubmit={data.handleSubmit(loginUser)}
                  className="z-10 col-span-12 grid"
                >
                  <div className="text-left">
                    <label
                      htmlFor="name"
                      className="mb-2 ml-4 block font-medium text-gray-600"
                    >
                      Your Email
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...data.register("email")}
                      placeholder="Add your email here"
                      className="mb-2 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 pl-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm lg:text-base"
                    />
                  </div>
                  <div className="text-left">
                    <label
                      htmlFor="password"
                      className="mb-2 ml-4 block font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      {...data.register("password")}
                      placeholder="Enter your Password"
                      className="mb-2 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 pl-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm lg:text-base"
                    />
                  </div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-500 hover:text-blue-700"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Create Account
                      </a>
                    </div>
                  </div>
                  <div>
                    <Link href="/profile">
                      <button
                        type="submit"
                        className="m-auto w-1/2 rounded-md border border-transparent bg-teal-500 px-4 py-2 text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        LogIn
                      </button>
                    </Link>
                  </div>
                </form>
                <div className="z-10 col-span-12 m-auto mt-7 text-center">
                  <div className="block items-center justify-center sm:flex">
                    <span className="m-0 block h-px w-full bg-black sm:mr-5 sm:flex sm:w-40"></span>
                    <span className="text-center text-lg text-black">
                      Or Continue with
                    </span>
                    <span className="m-0 block h-px w-full bg-black sm:ml-5 sm:flex sm:w-40"></span>
                  </div>
                  <div className="mt-7 flex flex-wrap justify-center">
                    <a href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        />
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        />
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        />
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        />
                      </svg>
                    </a>
                    <a href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                      >
                        <linearGradient
                          id="Ld6sqrtcxMyckEl6xeDdMa"
                          x1="9.993"
                          x2="40.615"
                          y1="9.993"
                          y2="40.615"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#2aa4f4" />
                          <stop offset="1" stop-color="#007ad9" />
                        </linearGradient>
                        <path
                          fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                          d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                        />
                        <path
                          fill="#fff"
                          d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                        />
                      </svg>
                    </a>
                    <a href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                      >
                        <path
                          fill="#03A9F4"
                          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                        />
                      </svg>
                    </a>
                    <a href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                      >
                        <path d="M32.5 44c-1.778 0-3.001-.577-4.08-1.086C27.38 42.424 26.481 42 25 42s-2.38.424-3.42.914C20.501 43.423 19.278 44 17.5 44 13.174 44 6 34.071 6 23.5 6 16.49 10.832 11 17 11c2.027 0 3.259.581 4.346 1.093C22.378 12.58 23.27 13 25 13s2.622-.42 3.654-.907C29.741 11.581 30.973 11 33 11c2.664 0 5.033.982 7.042 2.921.338.326.504.793.447 1.26s-.329.88-.735 1.116C37.438 17.644 36 20.499 36 23.75c0 3.661 2.004 6.809 4.986 7.831.391.134.709.423.879.799.171.375.18.805.023 1.188C39.461 39.515 35.424 44 32.5 44zM25.5 10c-.358 0-.708-.128-.984-.368-.363-.316-.554-.788-.51-1.269.012-.123.303-3.045 2.593-5.382l0 0c2.154-2.2 4.251-2.854 4.482-2.922.489-.142 1.017-.026 1.401.308.385.333.574.839.503 1.344-.034.241-.389 2.436-2.232 4.899-1.973 2.636-4.791 3.322-4.91 3.35C25.729 9.987 25.614 10 25.5 10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md-col-span-12 col-span-12 grid rounded-bl-2xl rounded-br-2xl bg-teal-500 px-10 py-10 sm:col-span-12 md:rounded-bl-2xl md:rounded-tr-none lg:col-span-4 lg:rounded-bl-none lg:rounded-tr-2xl xl:col-span-4">
                <Image
                  width={1000}
                  height={1000}
                  src="/login.png"
                  alt="sidebar"
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="outer_ring  absolute -bottom-44 -left-14 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-teal-700 via-teal-500 to-teal-300 p-10 sm:-bottom-40 sm:-left-28">
          <div className="h-full w-full rounded-full bg-gray-100"></div>
        </div>
      </div>
    </>
  );
}
