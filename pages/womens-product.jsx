import React from "react";
import Layout from "@/components/Layout";
import Cards from "@/components/Women-Comp/Cards";
import W_Sidebar from "@/components/Women-Comp/W_Sidebar";
import Brand from "@/components/Women-Comp/Brand";
import ColorFilter from "@/components/Women-Comp/Color_Filter";
import Variety from "@/components/Women-Comp/Variety";
import Filter from "@/components/Women-Comp/Filter";

export default function Women_Details() {
  return (
    <Layout title={"details"}>
      <div className="mx-auto max-w-screen-xl px-2 py-5">
        <div className="xl:Container">
          <div
            className="col-span-12 grid grid-flow-col gap-2 bg-slate-50 md:col-span-6 lg:col-span-12 
        xl:col-span-12"
          >
            <div className="order-last col-span-9 sm:col-span-12 md:col-span-6 lg:col-span-9 xl:col-span-9">
              {/* filter price */}
              {/* <MinMaxPriceFilter /> */}
              <Filter/>
              {/* Product cards */}
              <div className="mt-4 rounded-lg">
                <Cards />
              </div>
            </div>
            {/* categories */}
            <div className="bg-white rounded-lg">
              <div className="col-span-3 py-5">
                <W_Sidebar />
                <Brand />
                <ColorFilter />
                <Variety />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
