import HalfCircle from "@/assets/icons/halfCircle";
import React, { useState } from "react";
import flag from "@/assets/images/Flag of Iran.png";
import Image from "next/image";
import CryptoModal from "../cryptoModal";
import ArrowChange from "@/assets/icons/arrrow/arrowcChange";
import { usePathname } from "next/navigation";
import { useFormattedNumber } from "@/hooks/useFormattedNumber";

export default function Sell({
  toggle,
  currencies,
  width,
}: {
  toggle: any;
  currencies: any;
  width: any;
}) {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState<any | null>(currencies[0]);
  const [money, setMoney] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const route = usePathname().split("/")[1];
  const { formatNumber, unformatNumber } = useFormattedNumber();

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const handleMoneyChange = (value: string) => {
    const rawValue = unformatNumber(value);
    setMoney(formatNumber(rawValue));

    if (currency) {
      const calculatedAmount = parseFloat(rawValue) / currency.price;
      setAmount(calculatedAmount ? calculatedAmount.toFixed(8) : "");
    }
  };

  const handleAmountChange = (value: string) => {
    const rawValue = unformatNumber(value);
    setAmount(formatNumber(rawValue));

    if (currency) {
      const calculatedMoney = parseFloat(rawValue) * currency.price;
      setMoney(formatNumber(calculatedMoney.toString()));
    }
  };

  return (
    <div className="w-full ">
      <div className="absolute -top-[11px] right-40 text-background ">
        <HalfCircle />
      </div>
      <div
        className={`flex flex-col justify-between items-center bg-background rounded-xl py-8 px-10 ${
          width < 700 ? "lg:flex" : "xl:flex-row"
        }`}
      >
        <div className="relative w-full lg:w-auto  ">
          <p className="text-sm">مقدار (دریافت می‌کنید)</p>
          <input
            className="mb-10 text-[25px] font-normal bg-background outline-none h-[58px] w-full lg:w-[414px] border rounded-xl mt-5 pr-4"
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="مثال: 0.005"
          />
          <div
            onClick={toggleOpen}
            className="absolute group cursor-pointer flex gap-3 left-1 top-[44px] bg-secondary px-4 py-3 rounded-xl"
          >
            <div>{currency.icon}</div>
            <p className="mt-1">{currency.symbol}</p>
          </div>
        </div>
        <div
          onClick={toggle}
          className="cursor-pointer my-5 lg:mt-0 self-end mb-10"
        >
          <ArrowChange />
        </div>
        <div className="relative w-full lg:w-auto ">
          <p>مبلغ (پرداخت می‌کنید)</p>
          <input
            className="outline-none bg-background text-[25px] font-normal  h-[58px] w-full lg:w-[414px]  border rounded-xl mt-5 pr-4"
            type="text"
            value={money}
            onChange={(e) => handleMoneyChange(e.target.value)}
            placeholder="مثال: 500,000"
          />
          <div className="absolute flex gap-3 left-1 top-11 bg-secondary  px-4 py-3 rounded-xl ">
            <Image alt="iran" src={flag} />
            <p className="mt-1">IRT</p>
          </div>
          <div className="flex gap-5 mt-5 text-xs md:text-sm ">
            <p>
              قیمت خرید: {formatNumber(currency.price.toString())} تومان
            </p>
            <p>
              قیمت فروش: {formatNumber(currency.price.toString())} تومان
            </p>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center pb-2 ">
          {open && (
            <CryptoModal
              currencies={currencies}
              setCurrency={setCurrency}
              toggle={toggleOpen}
            />
          )}
          <button className="px-12 py-[18px] mt-2 rounded-xl bg-[#F00500] w-full lg:w-auto">
            شروع فروش
          </button>
        </div>
      </div>
    </div>
  );
}
