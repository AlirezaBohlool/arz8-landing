import ArrowBottom from "@/assets/icons/arrow-bottom";
import ArrowTop from "@/assets/icons/arrow-top";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  videoLink: string | null | undefined;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

// تابع تبدیل لینک آپارات به لینک embed
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
}: AccordionItemProps) => (
  <div ref={undefined} className="relative rounded-xl p-8 mb-4 flex  w-full">
    {isOpen && (
      <div
        className="absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(255, 193, 7, 0), #FFC107)",
        }}
        aria-hidden="true"
      ></div>
    )}

    <div
      className="absolute inset-0 bg-secondary px-8 py-6 rounded-xl"
      aria-hidden="true"
    ></div>

    <div className="relative w-full z-10">
      <button
        onClick={() => onToggle(id)}
        className="w-full text-left font-medium flex justify-between items-center"
      >
        <span className=" text-start text-base sm:text-xl font-semibold">
          {title}
        </span>
        <span>{isOpen ? <ArrowBottom /> : <ArrowTop />}</span>
      </button>

      {isOpen && (
        <div
          className={`mt-6 justify-between text-sm ${
            videoLink
              ? "flex flex-col sm:flex-row items-start gap-4"
              : ""
          }`}
        >
          {videoLink && (
            <div className="flex-shrink-0 sm:w-2/5 w-full">
              <iframe
                src={sanitizeApparatUrl(videoLink)}
                title="آموزش ویدئویی"
                className="w-full aspect-video rounded-xl "
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {content && (
            <div
              className={`flex-1 leading-7 font-normal text-sm ${
                videoLink ? "sm:w-2/5 w-full" : ""
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);
