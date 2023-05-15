import Layout from '@/components/Layout'

import Sidebar from '@/components/Home_comp/SIdebar'
import Slider from '@/components/Home_comp/Slider'
import LoginSign from '@/components/Home_comp/Login_signup'
import Tabs from '@/components/Home_comp/Tabs'
import SuperDeal from '@/components/Home_comp/Super_deals'
import CreateStore from '@/components/Home_comp/Create_store'
import Delivery from '@/components/Home_comp/Delivery_option'
import New_Arrival from '@/components/Home_comp/New-arrivals'
import FlashSale from '@/components/Home_comp/Flash_sale'
import Products from '@/components/Home_comp/Products'



export default function Home() {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl bg-gray-100 px-2 py-5">
        <div className="mb-3 grid grid-cols-12 gap-2">
          {/* categories section */}
          <Sidebar />
          <div className="col-span-12 grid  md:col-span-8 lg:col-span-6">
            <div className="col-span-12 grid grid-cols-12  md:h-36 lg:h-48">
              <div className="col-span-12 rounded-lg md:col-span-12 md:h-36 lg:col-span-8 lg:h-48">
                {/* Slider Section */}
                <Slider />
                {/* <img src="slider1.png" /> */}
              </div>
              {/* LogIn SignIn Section */}
              <LoginSign />
            </div>
            {/* super deal */}
            <Tabs />
            <SuperDeal />
          </div>
          {/* Create Store Section*/}
          <CreateStore />
        </div>
        {/* Delivery Section */}
        <Delivery />
        {/* New Arrival Section */}
        <New_Arrival />
        {/* Flash Sale Section */}
        <FlashSale />
        <Products />
      </div>

    </Layout>
  )
}
