
"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import usePostData from "@/hooks/usePostData";
import OrbitAnimation from "./animation/OrbitAnimation";
import PhotoContactSupport from "@/assets/images/contactUs/Asset 1@300x 2.png";
import Modal from "@/components/Modal";
import ErrorContactUs from "@/assets/icons/modal/errorContactUs";
import SuccessContactUs from "@/assets/icons/modal/successContactUs";
import { validationSchema } from "./yup/validationSchema";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Cookies from "js-cookie";
import { SHA256 } from "crypto-js";

interface ModalLine {
  text: string;
  highlightedWords?: { word: string; color: "green" | "red" }[];
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  message: string;
}

// Cookie will expire after 24 hours
const COOKIE_EXPIRY = 1;
const SUBMISSION_HISTORY_KEY = "contactSubmissionHistory";

export default function ContactUs() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const [modalLines, setModalLines] = useState<ModalLine[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionHistory, setSubmissionHistory] = useState<string[]>([]);
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  // Store the original ref for compatibility
  const formDataRef = useRef<FormData>(formData);

  // Keep ref in sync with state
  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);

  // Load submission history from cookies when component mounts
  useEffect(() => {
    const loadSubmissionHistory = () => {
      try {
        const storedHistory = localStorage.getItem(SUBMISSION_HISTORY_KEY);
        if (storedHistory) {
          setSubmissionHistory(JSON.parse(storedHistory));
        }
      } catch (error) {
        console.error("Error loading submission history:", error);
        // Fallback to cookies if localStorage fails
        const cookieHistory = Cookies.get(SUBMISSION_HISTORY_KEY);
        if (cookieHistory) {
          try {
            setSubmissionHistory(JSON.parse(cookieHistory));
          } catch (e) {
            console.error("Error parsing cookie history:", e);
          }
        }
      }
    };

    loadSubmissionHistory();
  }, []);

  const { mutate, isError, isSuccess, data, isPending } = usePostData(
    "contact-us",
    () => {
      setModalType("success");
      setModalLines([
        {
          text: "پیام شما با موفقیت ارسال شد.",
          highlightedWords: [{ word: "موفقیت", color: "green" }],
        },
      ]);
      setIsModalOpen(true);
      // Reset form after successful submission
      resetForm();
      setIsSubmitting(false);
    },
    () => {
      setModalType("error");
      setModalLines([
        {
          text: "ارسال پیام با مشکل روبرو شد",
          highlightedWords: [{ word: "مشکل", color: "red" }],
        },
      ]);
      setIsModalOpen(true);
      setIsSubmitting(false);
    }
  );

  const resetForm = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = useCallback(async () => {
    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });
      setErrors({});
      return true;
    } catch (err: any) {
      const newErrors: Record<string, string> = {};
      err.inner.forEach((error: Yup.ValidationError) => {
        if (error.path) newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  }, [formData]);

  // Create a secure hash of the submission
  const createSubmissionHash = (data: FormData): string => {
    const submissionString = `${data.fullName.trim()}-${data.phoneNumber.trim()}-${data.message.trim()}`;
    return SHA256(submissionString).toString();
  };

  // Save submission history to both localStorage and cookies for redundancy
  const saveSubmissionToHistory = (hash: string) => {
    const updatedHistory = [...submissionHistory, hash];
    
    // Keep only the last 10 submissions to prevent the history from growing too large
    const trimmedHistory = updatedHistory.slice(-10);
    
    setSubmissionHistory(trimmedHistory);
    
    try {
      // Primary storage: localStorage
      localStorage.setItem(SUBMISSION_HISTORY_KEY, JSON.stringify(trimmedHistory));
      
      // Backup storage: cookies (with expiration)
      Cookies.set(SUBMISSION_HISTORY_KEY, JSON.stringify(trimmedHistory), { 
        expires: COOKIE_EXPIRY,
        sameSite: 'strict' 
      });
    } catch (error) {
      console.error("Error saving submission history:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent duplicate submissions or multiple clicks
    if (isSubmitting || isPending) {
      return;
    }
    
    const isValid = await validateForm();
    if (!isValid) return;

    // Create hash of current submission
    const currentSubmissionHash = createSubmissionHash(formData);
    
    // Check if this is a duplicate submission by comparing against history
    if (submissionHistory.includes(currentSubmissionHash)) {
      setModalType("error");
      setModalLines([
        {
          text: "این پیام قبلاً ارسال شده است",
          highlightedWords: [{ word: "قبلاً", color: "red" }],
        },
      ]);
      setIsModalOpen(true);
      return;
    }

    if (!executeRecaptcha) {
      console.error("reCAPTCHA not loaded yet.");
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");

      // Add submission to history before making API call
      saveSubmissionToHistory(currentSubmissionHash);

      mutate({
        name: formData.fullName,
        mobile: formData.phoneNumber,
        msg: formData.message,
        recaptcha: recaptchaToken,
      });
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background base-style">
      <div className="flex flex-col lg:flex-row pt-[110px] lg:pt-[194px] w-full gap-8 justify-between">
        <div className="flex flex-col order-2 lg:order-1 gap-8 justify-center w-full lg:w-[60%] lg:max-w-[1000px] lg:min-w-[509px]">
          <div className="grid gap-[10px]">
            <h1 className="text-foreground xl:text-[40px] lg:text-4xl sm:text-2xl text-xl font-bold">
              تماس با پشتیبانی صرافی ارزهشت
            </h1>
            <span className="text-foreground text-justify text-xs sm:text-base font-semibold sm:leading-10 leading-7">
              ما در کنار شما هستیم تا پاسخگوی تمامی سوالات، پیشنهادات و نیازهای
              شما باشیم. اگر سوالی دارید، به مشاوره نیاز دارید یا پیشنهادی برای
              بهبود خدمات ما دارید، با ما در ارتباط باشید. تیم پشتیبانی ما آماده
              است تا در سریع‌ترین زمان ممکن به شما کمک کند.
            </span>
          </div>
        </div>
        <div className="flex w-full lg:w-[40%] order-1 lg:order-2 justify-center lg:justify-end">
          <Image
            src={PhotoContactSupport}
            alt="Contact Us Image"
            width={392}
            height={504}
            layout="intrinsic"
            priority
          />
        </div>
      </div>
      <div className="relative w-full h-[1100px] flex items-center justify-between overflow-hidden full-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full mx-4 md:mx-12 lg:mx-16 xl:mx-0 sm:w-[70%] bg-secondary p-5 rounded-xl z-10"
        >
          <span className="text-Seventh text-xl font-bold mb-7">
            ارسال پیام
          </span>
          <div className="flex w-full space-x-4 sm:gap-4 mb-5 flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col w-full sm:w-1/2 mb-4 sm:mb-0">
              <label
                htmlFor="fullName"
                className="block text-Seventh text-base font-normal"
              >
                نام خانوادگی
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none"
                onChange={handleChange}
              />
              {errors.fullName && (
                <div className="text-red-500 text-sm">{errors.fullName}</div>
              )}
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label
                htmlFor="phoneNumber"
                className="block text-Seventh text-base font-normal"
              >
                شماره تماس
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                className="w-full text-foreground bg-fifth h-12 mt-2 px-4 rounded-lg focus:outline-none"
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <div className="text-red-500 text-sm">{errors.phoneNumber}</div>
              )}
            </div>
          </div>

          <div className="flex flex-col h-[40%] mb-7">
            <label
              htmlFor="message"
              className="block text-Seventh text-base font-normal"
            >
              پیام
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              className="w-full sm:h-48 bg-fifth text-foreground mt-2 p-4 rounded-lg focus:outline-none"
              onChange={handleChange}
            />
            {errors.message && (
              <div className="text-red-500 text-sm">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isPending}
            className={`lg:w-60 w-full h-14 px-4 py-2 rounded-xl transition-colors self-end ${
              isSubmitting || isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            {isSubmitting || isPending ? "در حال ارسال..." : "ارسال درخواست"}
          </button>
        </form>
        <div className="absolute w-[50%] h-full left-0 top-0">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <OrbitAnimation />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          type={modalType}
          lines={modalLines}
          icon={
            modalType === "success" ? <div className="lg:w-24 lg:h-44 "><SuccessContactUs /></div> : <ErrorContactUs />
          }
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}