import { useRef, useLayoutEffect, useState } from "react";
import ArrowBottom from "@/assets/icons/arrrow/arrow-bottom";
import ArrowTop from "@/assets/icons/arrrow/arrow-top";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  videoLink: string | null | undefined;
  isOpen: boolean;
  onToggle: (id: number) => void;
  titleBgColor?: string;
  contentBgColor?: string;
  highlightEnabled?: boolean;
  titleClasses: any;
  contentClasses: any;
}

const sanitizeApparatUrl = (url: string) => {
  const videoId = new URL(url).pathname.split("/").pop();
  return `https://www.aparat.com/video/video/embed/videohash/${videoId}/vt/frame`;
};

export const AccordionItem = ({
  id,
  title,
  content,
  videoLink,
  isOpen,
  onToggle,
  titleBgColor = "bg-secondary",
  contentBgColor = "bg-secondary",
  highlightEnabled = true,
  titleClasses,
  contentClasses,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(0);
  const dynamicTitleClasses = titleClasses;
  const dynamicContentClasses = videoLink
    ? "text-xs sm:text-[15px] lg:text-[14px] leading-[25px] sm:leading-[14.9px] lg:leading-[30px]"
    : contentClasses;

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, videoLink, content]); // Recalculate when content changes or isOpen changes

  const handleIframeLoad = () => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  };

  return (
    <div
      ref={undefined}
      className="relative rounded-xl sm:rounded-[20px]  flex w-full"
    >
      {isOpen && highlightEnabled && (
        <div
          className="absolute -inset-px rounded-xl sm:rounded-[20px] transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)",
          }}
          aria-hidden="true"
        ></div>
      )}

      <div
        className="absolute inset-0 bg-secondary rounded-xl sm:rounded-[20px]"
        aria-hidden="true"
      ></div>

      <div
        className={`relative w-full z-10 flex flex-col rounded-xl sm:rounded-[20px] ${contentBgColor} `}
      >
        <button
          onClick={() => onToggle(id)}
          className={`w-full text-left font-medium flex justify-between  px-4 py-2 sm:py-4 md:py-6 rounded-xl sm:rounded-[20px] ${titleBgColor} `}
        >
          <span
            className={`w-full text-start self-center font-semibold ml-[5px] !leading-[33.8px] sm:leading-[38.8px] ${dynamicTitleClasses}`}
          >
            {title}
          </span>
          <div className=" min-w-7 max-w-7 lg:min-w-11 lg:max-w-11  flex items-start justify-end self-start  my-1 lg:my-0">
            <span className="w[17.6px] h-[17.6px] lg:w[33px] lg:h-[33px]">
              {isOpen ? <ArrowTop /> : <ArrowBottom />}
            </span>
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 px-8`}
          style={{
            height: isOpen ? contentHeight : 0,
          }}
          ref={contentRef}
        >
          <div
            className={`justify-between text-sm ${
              videoLink ? "flex flex-col sm:flex-row items-start gap-4" : ""
            }`}
          >
            {videoLink && isOpen && (
              <div className="flex-shrink-0 sm:w-2/5 w-full">
                <iframe
                  src={sanitizeApparatUrl(videoLink)}
                  title="آموزش ویدئویی"
                  className="w-full aspect-video rounded-xl mb-2 sm:mb-5"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={handleIframeLoad} 
                ></iframe>
              </div>
            )}
            {content && (
              <div
                className={`flex-1 text-justify  font-normal ${dynamicContentClasses}  mb-2 sm:mb-5 ${
                  videoLink ? "sm:w-2/5 w-full" : ""
                }`}
              >
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
