"use client";
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // برای استایل‌دهی به اسکللت‌ها

interface HomeCurrency {
  symbol: string;
  priceToman: string;
  quoteVolume: string
  priceChangePercent: string;
  lastPrice?: string;
}

interface HomeData {
  profit: Array<HomeCurrency>;
  loss: Array<HomeCurrency>;
}

interface CryptocurrencyInfo {
  id: number;
  symbol: string;
  name: { fa: string; en?: string };
  icon?: string;
  color?: string;
  isFont: boolean;
  percent: number;
}

interface InfoData {
  cryptocurrency: CryptocurrencyInfo[];
}

interface MergedData {
  id: number;
  symbol: string;
  name: string;
  icon: string | undefined;
  color: string | undefined;
  isFont: boolean;
  priceToman: number;
  priceChangePercent: string;
}

const chunkArray = (array: any[], size: number) => {
  return array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, [] as any[][]);
};

export default function BannerSlider({ homeData, infoData,infoLoading,homeLoading }: { homeData: HomeData; infoData: InfoData;infoLoading:boolean;homeLoading:boolean }) {

  const [mergedData, setMergedData] = useState<MergedData[]>([]);

  useEffect(() => {
    const newMergedData =
      (homeData?.profit || []).concat(homeData?.loss || [])
        .map((item, index) => {
          const matchedInfo = infoData?.cryptocurrency.find(crypto => crypto.symbol === item.symbol);

          return {
            id: index + 1,
            symbol: item.symbol,
            name: matchedInfo?.name?.fa || item.symbol,
            icon: matchedInfo?.icon,
            color: matchedInfo?.color,
            isFont: matchedInfo?.isFont || false,
            priceToman: parseFloat(item.priceToman),
            priceChangePercent: item.priceChangePercent,
          };
        });

    setMergedData(newMergedData);
  }, [homeData, infoData]);

  const chunkedData = useMemo(() => chunkArray(mergedData, 4), [mergedData]);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {infoLoading || homeLoading ? (
          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 text-[10px] md:text-sm w-full gap-y-[14px] lg:gap-y-3">
              {Array(4).fill(0).map((_, index) => (
                <div key={index} className="flex justify-between w-full h-full pl-3 md:pl-4">
                  {/* قیمت و درصد تغییر */}
                  <div className="flex flex-col justify-center">
                    <Skeleton width={60} height={12} />
                    <Skeleton width={40} height={10} />
                  </div>

                  {/* آیکون و اطلاعات ارز */}
                  <div
                    className={`flex items-center dark:border-10 ${(index + 1) % 4 !== 0
                      ? "md:border-r-[3px] md:border-[#ADADAD80] md:pr-4"
                      : "pr-0"
                      }
                  ${(index + 1) % 2 !== 0
                        ? "border-r-[3px] border-[#ADADAD80] pr-3"
                        : "pr-0"
                      }
                  `}
                  >
                    <div className="flex flex-col justify-center items-end mr-1 sm:mr-3 md:mr-2">
                      <Skeleton width={50} height={10} />
                      <Skeleton width={30} height={10} />
                    </div>
                    <div className="w-[22px] h-[22px] md:w-[33px] md:h-[33px] my-auto">
                      <Skeleton width="100%" height="100%" circle={true} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          chunkedData.map((group: MergedData[], pageIndex: number) => (
            <div className="w-full" key={pageIndex}>
              <div className="grid grid-cols-2 lg:grid-cols-4 text-[10px] md:text-sm w-full gap-y-[14px] lg:gap-y-3 ">
                {group.map((card, index) => (
                  <Link href={`/coins/${card.symbol}`} key={card.id} className="flex justify-between w-full h-full  pl-3 md:pl-4">
                    <div className="flex flex-col justify-center">
                      <div className="flex pb-1 gap-x-1 text-[10px] md:text-[13.5px] font-semibold">
                        <span className="text-[8px]">تومان</span>
                        <p>{card.priceToman}</p>
                      </div>
                      <p
                        className={`${parseFloat(card.priceChangePercent) < 0 ? "text-red-500" : "text-green-500"
                          } text-[10px] md:text-[11px] font-semibold`}
                      >
                        <span>{card.priceChangePercent}</span> <span>%</span>
                      </p>
                    </div>
                    <div
                      className={`flex items-center dark:border-10 ${(index + 1) % 4 !== 0
                        ? "md:border-r-[3px] md:border-[#ADADAD80] md:pr-4"
                        : "pr-0"
                        }
                      ${(index + 1) % 2 !== 0
                          ? "border-r-[3px] border-[#ADADAD80] pr-3"
                          : "pr-0"
                        }
                    `}>
                      <div className="flex flex-col justify-center items-end mr-1 sm:mr-3 md:mr-2">
                        <p className="text-[10px] md:text-[12px] pb-1">
                          {card.name.length > 8 ? "..." + card.name.slice(0, 8) : card.name}
                        </p>
                        <p className="text-[10px] md:text-[12px] opacity-50">{card.symbol}</p>
                      </div>
                      <div className="w-[22px] h-[22px] md:w-[33px] md:h-[33px] object-cover">
                        {!card.isFont ? (
                          <img
                            src={`https://app.arz8.com/api/images/currency/${card.icon}`}
                            alt={card.symbol}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <i
                            className={`cf cf-${card.symbol.toLowerCase()} text-[22px] md:text-[33px] w-full h-full flex items-center justify-center`}
                            style={{ color: card.color }}
                          ></i>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
