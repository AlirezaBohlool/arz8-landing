"use client";
import ArrowDown from "@/assets/icons/arrrow/arrowDown";
import ArrowUp from "@/assets/icons/arrrow/arrowup";
import { Span } from "next/dist/trace";
import { space } from "postcss/lib/list";
import React, { useState } from "react";

const MoreDetails = ({firstTitle,secondTitle,text}:any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full mx-auto">
      <h1 className="mt-8 mb-4 text-2xl">
        <span className="text-primary"> {firstTitle}</span>
        {secondTitle}
      </h1>
      <div
        className={`relative overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isExpanded ? "max-h-[500px]" : "max-h-20"
        }`}
      >
        <p className="leading-10 text-justify">
            {text}
        </p>

        {/* Gradient Overlay */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#ffffff] to-[#3C3B4100] dark:from-[#3C3B41] dark:to-[#3C3B4100] pointer-events-none"></div>
        )}
      </div>
      <div>
        <button
          onClick={toggleExpand}
          className="w-full mt-2 hover:text-primary duration-300 focus:outline-none flex items-center justify-center gap-2 bg-opacity-0"
        >
          {isExpanded ? <ArrowUp /> : <span className="w-5 h-5"><ArrowDown /></span> }
          {isExpanded ? "نمایش کمتر" : "نمایش بیشتر"}
        </button>
      </div>
    </div>
  );
};

export default MoreDetails;
