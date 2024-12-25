'use client';
import BNB from '@/assets/icons/bnb';
import React, { useState } from 'react';

const cryptoData = [
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500',icon:<BNB/> },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500',icon:<BNB/> },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500' ,icon:<BNB/>},
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱۷۴۵۴۱۳", change: 8.21, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'شیبا', symbol: 'SHIB', price: "۱٬۷۴۵٬۴۱۳", change: -1.37, changeColor: 'text-red-500',icon:<BNB/> },
  { name: 'اتریوم', symbol: 'ETH', price: "۱٬۷۴۵٬۴۱۳", change: 2.52, changeColor: 'text-green-500',icon:<BNB/> },
  { name: 'آوالانچ', symbol: 'AVAX', price: "۱٬۷۴۵٬۴۱۳", change: 8.21, changeColor: 'text-green-500',icon:<BNB/> },
];

const CryptoTable: React.FC = () => {
  const [filter, setFilter] = useState<string>('most-popular'); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  const sortedData = [...cryptoData].sort((a:any, b:any) => {
    switch (filter) {
      case 'most-expensive':
        return b.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        ) - a.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        );
      case 'cheapest':
        return a.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        ) - b.price.replace(/[٬۱۲۳۴۵۶۷۸۹۰]/g, c => 
          '۰۱۲۳۴۵۶۷۸۹'.indexOf(c)
        );
      case 'highest-growth':
        return b.change - a.change;
      default:
        return 0;
    }
  });

  const filteredData = sortedData.filter((crypto) =>
    crypto.name.includes(searchQuery) || crypto.symbol.includes(searchQuery)
  );

  const filterButtons = [
    { key: 'most-popular', label: 'محبوب‌ترین' },
    { key: 'highest-growth', label: 'بیشترین رشد' },
    { key: 'cheapest', label: 'ارزان‌ترین' },
    { key: 'most-expensive', label: 'گران‌ترین' }
  ];

  return (
    <div className="w-full z-50">
      <div className="mb-4">
        <input
          type="text"
          placeholder="جستجو کنید..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-lg bg-background"
        />
      </div>
      <span className='w-9 block mb-4 pb-1 text-primary border-b-2 border-primary'>
        ارزها
      </span>
      {/* فیلتر‌ها */}
      <div className="flex justify-between items-center p-2 rounded-md mb-4 overflow-x-auto">
        {filterButtons.map((btn) => (
          <button
            key={btn.key}
            className={`px-4 py-2 text-[13px] rounded-lg font-bold ${
              filter === btn.key 
                ? 'bg-[#FFC107] text-white border-primary' 
                : 'bg-transparent'
            }`}
            onClick={() => setFilter(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* جدول */}
      <div className="w-full max-h-80 overflow-y-auto bg-background rounded-md  custom-scrollbar">
        <table className="table-auto w-full border-collapse text-right">
          <thead>
            <tr className="bg-[#F6F6F6] text-[#3C3B4180] border-b">
              <th className="sticky top-0 bg-[#F6F6F6] px-4 py-2 text-sm">نماد</th>
              <th className="sticky top-0 bg-[#F6F6F6] px-4 py-2 text-sm">24H تغییرات</th>
              <th className="sticky top-0 bg-[#F6F6F6] px-4 py-2 text-sm">قیمت به تومان</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((crypto, index) => (
                <tr key={index} className="border-b hover:bg-slate-100 dark:hover:bg-gray-600">
                  <td className="flex px-4 py-2 text-sm">
                    {crypto.icon}
                    {crypto.name}
                  </td>
                  <td className={`px-4 py-2 text-sm ${crypto.changeColor}`}>
                    % {crypto.change.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-sm">{crypto.price} تومان</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  هیچ داده‌ای پیدا نشد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;