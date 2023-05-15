/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import UserProfile from "@/components/Profile_comp/UserPRofile";
import Oder from "../components/Profile_comp/Oder";
import { tabs } from "@/utils/data";
import Layout from "@/components/Layout";
import Payment from "@/components/Profile_comp/Payment";
import ReturnAndRefund from "@/components/Profile_comp/Return&Refund";
import Favorite from "@/components/Profile_comp/Favorite";
import FeedBack from "@/components/Profile_comp/FeedBack";
import MassageCenter from "@/components/Profile_comp/MessagesCenter";
import Profile_Products from "@/components/Profile_comp/Profile_products";

export default function ParentComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Layout title={"profile"}>
        <div className="mx-auto max-w-screen-xl py-5">
          <div className="xl:container">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 overflow-hidden rounded-lg bg-white py-2 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3">
                <Account onTabClick={handleTabClick} activeTab={activeTab} />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9">
                <RightComponent activeTab={activeTab} />
              </div>
            </div>
            <div className="col-span-12">
              {" "}
              <Profile_Products />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
function Account(props) {
  return (
    <div className="col-span-12 overflow-hidden rounded-lg bg-white py-2 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3">
      <div className="flex flex-col  pb-5">
        <div className="flex items-center px-4 border border-x-0 border-b border-t-0 border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <h3 className="ml-2 py-4 text-xl font-semibold text-black">
            Accounts
          </h3>
        </div>
        <div className="py-2">
          {tabs.map((tab, index) => (
            <div
              className="active py-2 px-4 border-l-4 border-transparent hover:border-l-4
              hover:border-teal-500 cursor-pointer hover:bg-gray-200"
              key={index}
              onClick={(tab) => props.onTabClick(index)}
            >
              <button
                className="text-font-medium block py-1 hover:text-gray-900"
                key={index}
              >
                {tab.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function RightComponent(props) {
  const sections = [
    <div>
      <UserProfile />
    </div>,
    <div>
      <Oder />
    </div>,
    <div>
      <Payment />
    </div>,
    <div>
      <ReturnAndRefund />
    </div>,
    <div>
      <Favorite />
    </div>,
    <div>
      <FeedBack />
    </div>,
    <div>
      <MassageCenter />
    </div>,
  ];

  return <div>{sections[props.activeTab]}</div>;
}
