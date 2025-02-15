import HalfCircle from "@/assets/icons/halfCircle";
import Search from "@/assets/icons/search";
import React, { useEffect, useMemo, useState } from "react";
import CryptoTable from "./cryptoTable";
import Link from "next/link";
import useGetData from "@/hooks/useGetData";
import Skeleton from "react-loading-skeleton";
import { useTheme } from "@/contexts/theme-provider";

interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}


export default function SubMenu() {
    const { baseColor, highlightColor } = useTheme();
  const [displayedCurrencies, setDisplayedCurrencies] = useState<any>([]);
  const { data: infoData, isLoading: infoLoading } = useGetData('info');
  const { data: cryptocurrenciesData, isLoading: cryptocurrenciesLoading,isError } = useGetData("cryptocurrencies", undefined, {
    limit: 7,
    page: 1,
    sort: "new",
  });

  const infoMap = useMemo(() => {
    const map: Record<string, CryptocurrencyInfo> = {};
    infoData?.cryptocurrency.forEach((info: CryptocurrencyInfo) => {
      map[info.symbol] = info;
    });
    return map;
  }, [infoData]);


  const filteredData = useMemo(() => {
    return cryptocurrenciesData?.lists.map((item: any) => {
      const info = infoMap[item.symbol];

      return {
        ...item,
        ...info,
        name: info?.name.fa,
      };
    });
  }, [cryptocurrenciesData?.lists, infoMap]);

  useEffect(() => {
    setDisplayedCurrencies(filteredData);
  }, [filteredData]);



  return (
    <div className="z-50 relative flex w-auto h-[450px] bg-fifth dark:bg-secondary  rounded-2xl shadow-lg">
      <div className="text-fifth dark:text-secondary  absolute right-16 rounded-xl -top-3 ">
        <HalfCircle />
      </div>
      <div className="w-[250px] flex flex-col border-l border-[#ADADAD80] pt-5 pb-5 px-5 ">
        <div className="mb-5 px-10 py-2 text-white bg-[#242428] rounded-[5px] dark:bg-[#3C3B4180] text-sm font-semibold text-center">
          جدید ترین ارزها
        </div>

        {infoLoading || cryptocurrenciesLoading ? (
          Array(7).fill(0).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="flex justify-start gap-x-3 mb-4 h-6 px-4 rounded-[5px] hover:bg-[#F6F6F6] dark:hover:bg-gray-600 items-center"
            >
              <div className="w-5 h-5 flex">
                <Skeleton circle={true} width={20} height={20}  baseColor={baseColor} highlightColor={highlightColor}/>
              </div>
              <Skeleton width={100} height={14} baseColor={baseColor} highlightColor={highlightColor}/>
            </div>
          ))
        ) : (
          displayedCurrencies?.map((item: any, index: any) => (
            <Link href={`/coins/${item.symbol}`} key={`coin-${index}`}>
              <div
                className="flex justify-start gap-x-3 mb-4 h-6 px-4 rounded-[5px] hover:bg-[#F6F6F6] dark:hover:bg-gray-600 items-center"
              >
                <div className="w-5 h-5 flex">
                  {!item.isFont ? (
                    <img
                      src={`https://app.arz8.com/api/images/currency/${item.icon}`}
                      alt={item.symbol}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i
                      className={`cf cf-${item.symbol.toLowerCase()} text-[20px] w-full h-full flex items-center justify-center object-cover`}
                      style={{ color: item.color }}
                    ></i>
                  )}
                </div>
                <span className="text-sm font-semibold">خرید {item.name}</span>
              </div>
            </Link>
          ))
        )}

        <Link href='/coins'>
          <div className="flex justify-center px-4 rounded-[10px] bg-[#D2D2D240] dark:bg-[#3C3B4180] text-sm font-bold py-2">
            همه ارز ها
          </div>
        </Link>
        <div className="mt-[10px] flex justify-center  px-4 rounded-[10px] text text-foreground bg-primary text-sm font-bold py-2">
          خرید و فروش سریع
        </div>
      </div>
      <div className="relative px-4 py-5 w-[400px]">
        <div className="flex justify-center items-center bg-primary absolute left-5 top-[26px] rounded-lg w-7 h-7 ">
          <div className="w-5 h-5 text-white">
            <Search />
          </div>
        </div>
        <CryptoTable infoMap={infoMap} infoLoading={infoLoading}  />
      </div>
    </div>
  );
}
