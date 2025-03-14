"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import banner1 from "@/assets/images/secondbanner/1.png";
import banner2 from "@/assets/images/secondbanner/2.png";
import banner3 from "@/assets/images/secondbanner/3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SecondBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(3);
  

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    initialSlide: 0,
     beforeChange: (oldIndex: number, newIndex: number) =>
        setCurrentSlide(newIndex),
      appendDots: (dots: any) => (
        <div
          style={{
            position: "absolute",
            bottom: "-36px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul style={{ display: "flex", gap: "4px", padding: "0", margin: "0" }}>
            {dots}
          </ul>
        </div>
      ),
      customPaging: (i: number) => (
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: i === currentSlide ? "#FFC107" : "#E0E0E0",
            transition: "background 0.3s ease",
          }}
        ></div>
      ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, 
          centerPadding: "0px"
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <Slider className="px-0 w-full" {...settings}>
          {[
            banner1,
            banner2,
            banner3,
            banner1,
            banner2,
            banner3,
          ].map((banner, index) => (
            <div
              key={index}
              className={`flex flex-wrap justify-center md:
                ${(index + 1) % 3 == 0 ? "ml-0 md:ml-5" : ""}
                ${(index + 1) % 3 == 2 ? "ml-0 md:ml-[10px]" : ""}
               `}
            >
              <Image
                alt={`banner ${index + 1}`}
                src={banner}
                width={380}
                height={180}
                className="object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
