import React from "react";
import MainTop from "./maintop/mainTop";
import TransAction from "./transaction/transaction";
import SecondBannerSlider from "@/components/slider/bannerslider/seceondBannerSlider";
import RealTimePrice from "./realtimeprice/realTimePrice";
import Banner from "./banner/banner";
import Description from "./description/description";
import QuickGuide from "./quickguide/quickGuide";
import Blog from "./blog/blog";
export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:px-[120px] sm:py-[30px] ">
      <MainTop />
      <TransAction />
      <SecondBannerSlider />
      <RealTimePrice />
      <Banner />
      <QuickGuide />
      <Blog />
      <Description />
    </div>
  );
}
