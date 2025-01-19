import BitCoin from "@/assets/icons/bitcoin";
import HalfCircle from "@/assets/icons/halfCircle";
import Search from "@/assets/icons/search";
import React from "react";
import CryptoTable from "./cryptoTable";
import Link from "next/link";

export default function SubMenu() {
  return (
    <div className="z-50 relative flex w-auto h-auto bg-fifth dark:bg-secondary  rounded-2xl shadow-lg">
      <div className="text-fifth dark:text-secondary  absolute right-16 rounded-xl -top-3 ">
        <HalfCircle />
      </div>
      <div className="w-[250px] flex justify-between flex-col border-l-2 border-[#ADADAD80] pt-5 pb-5 px-5">
        <div className="px-10 py-2 text-white bg-[#242428] rounded-lg dark:bg-[#3C3B4180]">
          جدید ترین ارزها
        </div>
        <div className="flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] bg-[#D2D2D240] dark:bg-[#3C3B4180]">
          <BitCoin />
          خرید بیتکوین
        </div>
        <div className="flex text-foreground justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600">
          <BitCoin />
          خرید بیتکوین
        </div>
        <div className="flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600">
          <BitCoin />
          خرید بیتکوین
        </div>
        <div className="flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600">
          <BitCoin />
          خرید بیتکوین
        </div>
        <div className="flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600">
          <BitCoin />
          خرید بیتکوین
        </div>
        <div className="flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600">
          <BitCoin />
          خرید بیتکوین
        </div>
        <div className="flex justify-start mt-3 gap-3  px-4 py-2 rounded-lg hover:bg-[#F6F6F6] dark:hover:bg-gray-600">
          <BitCoin />
          خرید بیتکوین
        </div>
        <Link href='/coins'>
          <div className="flex justify-center mt-3 px-4 py-2 rounded-lg bg-[#D2D2D240] dark:bg-[#3C3B4180]">
            همه ارز ها
          </div>
        </Link>
        <div className="flex justify-center mt-3 px-4 py-2 rounded-lg text text-foreground bg-primary">
          خرید و فروش سریع
        </div>
      </div>
      <div className="relative px-4 py-5 w-[400px]">
        <div className="flex justify-center items-center bg-primary absolute left-5 top-[25px] rounded-lg w-8 h-8 ">
          <div className="w-5 h-8 text-white">
            <Search />
          </div>
        </div>
        <CryptoTable />
      </div>
    </div>
  );
}
