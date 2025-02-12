import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import LongArrow from "@/assets/icons/arrrow/long-arrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fetchBlogs = async () => {
  const res = await fetch("https://arz8.com/blog/wp-json/wp/v2/posts?per_page=4&_fields=id,title,link,yoast_head_json");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export default function Blog() {
  const sliderRef = useRef<Slider>(null);

  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 449, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="flex flex-col gap-y-[14px] md:gap-y-[60px] sm:mt-16">
      <div className="flex gap-y-5 w-full justify-between items-center flex-col xl:flex-row">
        <div className="font-bold text-lg md:text-4xl w-full">
          <span className="flex justify-center xl:justify-start">بلاگ ارز هشت</span>
        </div>
      </div>

      {/* Scrollable Cards Section */}
      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="ml-14">
          {isLoading
            ? [...Array(4)].map((_, index) => (
                <BlogCard key={index} title="در حال بارگذاری..." link="#" imageUrl={null} />
              ))
            : blogs?.map((blog: any) => {
                const imageUrl = blog.yoast_head_json?.og_image?.[0]?.url || "/fallback-image.jpg";
                return (
                  <BlogCard key={blog.id} title={blog.title.rendered} link={blog.link} imageUrl={imageUrl} />
                );
              })}
        </Slider>
        <div className="absolute top-20 -left-0 md:-left-10 w-[37px] h-[37px] text-foreground cursor-pointer" onClick={() => sliderRef.current?.slickNext()}>
          <LongArrow />
        </div>
      </div>
    </div>
  );
}

// Blog Card Component
function BlogCard({ title, link, imageUrl }: { title: string; link: string; imageUrl: string | null }) {
  return (
    <div className="text-xs bg-background rounded-lg max-w-[277px] max-h-[286px] transition-all duration-300 px-2">
      <Image className="rounded-3xl" alt={title} src={imageUrl || "/fallback-image.jpg"} width={276} height={180} />
      <p dir="rtl" className="text-xs flex justify-center md:text-sm text-wrap text-justify font-bold leading-[38px] md:leading-[30px] py-2 px-1 md:py-[11px]">
        {title}
      </p>
      <div className="flex justify-between items-center w-full">
        <a href={link} className="text-primary text-sm md:text-base font-bold">
          ...ادامه مطلب
        </a>
        <div className="border border-foreground px-2 py-1 rounded-[15px] text-sm leading-6">مقالات</div>
      </div>
    </div>
    
  );
}
