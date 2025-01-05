import React from "react";
import BannerDownload from "@/components/BannerDownload";

export default function Banner() {
  return (
    <div className="w-full  overflow-hidden self-center m-0 p-0 my-[100px] ">
      <BannerDownload  showWaveDivider={false}/>
    </div>
  );
}
