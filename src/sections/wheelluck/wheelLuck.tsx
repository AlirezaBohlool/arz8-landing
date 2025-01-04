"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import wheel from "@/assets/images/wheelluck/wheell.png"
import ImageCarousel from './ImageCarousel'
import Discount from "@/assets/icons/wheel/discount"
import Arz from "@/assets/icons/wheel/arz"
import Awards from "@/assets/icons/wheel/awards"
import Accordion from '@/components/Accordion'
import Ghar from '@/assets/images/wheelluck/ghar.png'



const awards = [
  {
    icon: "https://s3-alpha-sig.figma.com/img/5c65/bbf1/84105cccbfd0ed0fb7a33f6ecc801e64?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ld7S4FaAjCo6t3FoQDlbteq4o0d4mgST6BBCnVyu8VIPO3PX7JQA~X1N97yrAyCThp1gfKKFr6gXbcSwX3ZQAFXZAPfmIn-gykcF2d-5Uv84JCmTgBB78rku6JnslLB5sYS9ayLmEiyWhXFqfs-DhDJX7HYUYsFJtLv3gaAoHVPRC5MR8~m-KhWn7mAkcc4KOF91NTeCUQ1ZLySNBc4hPD4G7tOZlAlyyP15dxN08H3rmgstds86r0iaJ8y1TCdtzG8PRb7eHeqDZVSfQ0NkO0JYqCXOQV7oK74JXPRbHUg1UFSmGXeBz7S5ffkLqA5mQZi-aBLls4dDTzLjspAYnA__",
    title: "سطح برنزی",
    description: "سطح برنزی ارز هشت مخصوص کاربرانی است که احراز هویت اولیه (اطلاعات هویتی) خود را تکمیل کرده و حجم معاملات ماهانه آن‌ها بین ۰ تا ۱۰۰ میلیون تومان باشد."
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/cb43/6e57/5a7207bd79e871dd2753a87cb269948c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFNpLRpppTHr17UPypUppdXsfgnX-~iRFNvi3G4sEzuUbVKjW1yHVR7cZHtKEtKRU8Z4r2509gcP-o8vNhnf8YYqWETrP0nvgvmgydawmiGznCU2yBUTdTljxqU0CTpVRnmQvpwe8QwP6tZPPVfpXkDALkRHLy1S5SA3LNThHdATnfJa8b4JEXkwKauI35e~4J5wz2WNBBCcoyoVaa34b7NvZnksI~DI6W5-jhU2A9XylaTyEzsX-G2dFk1ElZwMJtLdQy0ZYp7r9LJNu7LujzaI3vqJougqddG2VdV0xS-x5Sv7HqOkIiCkqSL1t25QYs4AMlJ7JeLItFlrZ-4RWw__",
    title: "سطح نقره ای",
    description: "گردونه شانس سطح نقره‌ای برای کاربرانی فعال می‌شود که حجم معاملات ماه گذشته آن‌ها بین ۱۰۰ تا ۴۰۰ میلیون تومان باشد."
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/2950/0b9c/f274163daaa2cbee6f4daf2694248927?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-vMkyCCZT4vppfi1VEfaa4gxleDUUBbHvn8MkH9AvdYGTFbvmjwbS~L5iyDh5jsN1kHBie~rgBSlweP0yHp9kekuj2LVYuRlIrXIH2QzhAdgZEOIdKAMrBOPNjNaH9nYjn7YABUixjRXCkQx8AI9w7AIteRRmlwgceCR9QTPBA8xWadgF0JXWBMlNafxlvLutGjdM39GXXRoiaQCpLb8Kr705j2ZYM2bdNBM73unJlqTfiMKHFLW2XrrwKBb6AEFMFOWizJZwJ~T8bawNJzGNWIiFZHxPIW~PzxLXAwE7LAMHrEl~DPJ6zF6NF3da5O-T~d4sUzJaJ2RVdEPQNQag__",
    title: "سطح طلایی",
    description: "در این سطح، گردش معاملاتی ماهانه شما باید بین ۴۰۰ میلیون تا ۱ میلیارد تومان باشد تا امکان چرخاندن گردونه طلایی را داشته باشید."
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/2aa3/eaa7/0d083895f74ed18453196e96a6a69e5c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoMm2r6cvf0t~A4NrKhJxYAurAN9oGp30QNTcUv3cAuxcNQlarR3dsEhzu2qzmGcyPaVO0SdmWeIVffv7x5hV-twOMRIDNjVRWLAkqA2nxjRr6--pWlX7D27-7gl9Ljoqpc2Sqs~OiHzZIXBIPZhIrjE9f1CoLZClXWFJns1WaeauxRp7WYCoooovWH-AyBukgu-xgGXAmWuDy4T8cv3zuDrw-R5bPGSxVd0~ggChxMt4f-bR~WgOxXbIE5LYeL-JnalIzfoCbf98vRnRaz5XaYifiyXLDo81JMaJN6enYBTVfPUV9ezKpJZUdgw~R00ItGDzqtQYRfBtoZfFjbRVQ__",
    title: "سطح نقره ای",
    description: "سطح کریستالی با جوایز ویژه مستلزم حجم معاملات ماهانه بیش از یک میلیارد تومان است."
  },
]

const imageUrls = [
  "https://s3-alpha-sig.figma.com/img/3e07/82d9/632cfec37a582be1adbc94cc8debe9d4?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EIPjsXamaXno55bLySnhJegmCxi-DDjzVr5DIdC7w19MORn~gCEERlSsZZz7nZ-cwFqpfAl~CsLoRo497Vqn1FD84kIFfvqao1edyXAWmE1VBP2RhywEACMtutxIRwl2hL0O4tOH5q6lvdWPHn6H8dTQUtuc53w0Kj1QjITckjrK-UAaVfD3zMGlQ2WxJpitkKaiHFiK2OWllI2oFPbLudz7gcPGuzWA73gJqHrYyfiqDN4VkzGmnEwj8c9YbFoQZdgy1jCVNpmY~xkQZYQ7HuxSy2TY50UUgD26f--5aKYcSIH9bZxKoFYit~WizV9vQJeBzWBtzub3ZXJxnOKjbQ__",
  "https://www.figma.com/file/ISvCAnSJ4v8v4WiJDR8Mbv/image/d95afd7b1f9e2f22eb4196813d21186541176cf4",
  "https://www.figma.com/file/ISvCAnSJ4v8v4WiJDR8Mbv/image/4cf83304753e6482f1a0903a3c232e0497d88692",
  "https://www.figma.com/file/ISvCAnSJ4v8v4WiJDR8Mbv/image/4ae525b132534767e9c50d4630af3966c8777fa0",
  "https://www.figma.com/file/ISvCAnSJ4v8v4WiJDR8Mbv/image/0c424179d106f1aa2b9b744e5dfbdb5a8c48f729",
  "https://www.figma.com/file/ISvCAnSJ4v8v4WiJDR8Mbv/image/ee68cf2d0b9e59e25042f49fd8d87527f044f98e",
  "https://s3-alpha-sig.figma.com/img/7a90/d1ac/504e3def584a267856e2be3a906e0e67?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kMU9mfigiMIe5vQWeAk2X-EyLIFh1Bf438q7bfOGYtFp8a97azMINFkuf6qkyvStCIwLj8S3kdmr0nB9jNO5vnA7I8NSS-ahHbHl2X5LkI76clhYi6mF6Z7vfbR1zl8gmqd20QuEhspRXRntEgRte6xxkYDerLKTJYm4gIWshuqua8sNZEBP88LmSuZipZLIqr5o-Xrtgex2fSo63vPEtOBb-FiujNnm-bFp6~y21ZwWK0AsWkYa1k4~rIXsYrApe~jmrqdInoM4AMihKFXWb419njZl18x5CN0a5J93NUQlgQy~EE~oaxTrwAVv-BuDgHDN~4Bap8sksCdzDUDQNQ__",
  "https://www.figma.com/file/ISvCAnSJ4v8v4WiJDR8Mbv/image/3263bcb1b56d738321e2a80b2ac7eb0d52afc229",
  "https://www.figma.com/file/ISvCAnSJ4v8v4WiJDR8Mbv/image/88594dcdc12359587dfb5eb4b83c4ca1b462aa48",
];

export const AccordionData = [
  {
    id: 1,
    title: " چطور میتونیم جایزه ای که در گردونه برنده شدیم رو برداشت کنیم؟",
    content: "به محض چرخش گردونه و برنده شدن جایزه، مبلغ جایزه نقدی یا ارز دیجیتال به کیف پولتون اضافه میشه و قابل برداشت به حساب بانکی هست . حتی بدون فعالیت در صرافی می‌تونید مبلغ رو برداشت کنید."
  },

  {
    id: 2,
    title: "در هر ۲۴ ساعت چندبار میتونیم گردونه شانش را بچرخونیم؟",
    content: "در هر ۲۴ ساعت فقط یک بار می‌تونید اقدام به چرخش گردونه کنید. در صورتی که همین الان گردونه رو بچرخونید، فردا همین موقع دوباره می‌تونید شانس خودتون رو مجدد امتحان کنید."
  },
  {
    "id": 3,
    "title": "آیا سطح حساب کاربری در برنده شدن جایزه گردونه شانس تأثیرگذار است؟",
    "content": "بله، در گردونه شانس جدید «ارز هشت»، جوایزی که برای هر سطح در نظر گرفته شده متفاوت است و این موضوع وابسته به حجم معاملات و گردش 30 روزه شما در سایت است. سطوح کاربری برای چرخش گردونه به شرح زیر است:\n\n1. **سطح برنزی:** برای کاربرانی که احراز هویت اولیه (اطلاعات هویتی) را کامل کرده و حجم معاملات آن‌ها در طی 1 ماه بین 0 تا 100 میلیون تومان بوده است.\n\n2. **سطح نقره‌ای:** گردونه شانس برای کاربرانی قابل چرخش است که حجم معاملاتی یک ماه اخیرشان از 100 میلیون تا 400 میلیون تومان باشد.\n\n3. **سطح طلایی:** در این سطح، مبلغ گردش معاملاتی شما باید در یک ماه از 400 میلیون تا 1 میلیارد تومان باشد تا بتوانید گردونه طلایی را بچرخانید.\n\n4. **سطح کریستالی:** آخرین سطح، سطح کریستالی است که جوایز ویژه‌ای برای آن در نظر گرفته شده. برای چرخاندن گردونه در این سطح، حجم معاملات شما در یک ماه باید بیشتر از 1 میلیارد تومان باشد.\n\n**نکته:** در سطح‌های طلایی و کریستالی گزینه پوچ وجود ندارد و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد."
  },
  {
    id: 4,
    title: "کد تخفیف ترید به چه صورت اعمال میشود؟",
    content: "تخفیف کارمزد و سایر جوایز نقدی بصورت خودکار در حساب کاربری اعمال میشود."
  },
  {
    "id": 5,
    "title": "گردونه شانس در کدام قسمت است؟",
    "content": "برای چرخش گردونه شانس وارد پنل شده و به قسمت گردونه شانس مراجعه کنید. دسترسی به این صفحه از طریق لینک زیر هم امکان پذیر است:  https://app.arz8.com/tools/wheel "
  },
  {
    id: 6,
    title: "تایمر گردونه برای من کار نمیکند؟",
    content: "برای رفع این مشکل از آخرین نسخه مرورگر گوگل کروم و فایرفاکس استفاده کنید و چک کنید که حتما آخرین نسخه مرورگر روی گوشی یا کامپیوتر شما نصب باشد."
  },
]

export default function WheelLuck() {

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0)



  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };




  return (
    <div className='base-style' style={{ gap: "0" }}>
      <div className='flex flex-col gap-10 lg:gap-24 mt-28'>



        <div className="flex flex-col xl:flex-row gap-y-10   w-full justify-between  ">
          <div className=" w-full flex flex-col justify-center order-2">
            <h1 className='text-base md:text-2xl lg:text-3xl xl:text-[40px] font-bold text-Seventh'>گردونه شانس صرافی ارز هشت</h1>
            <p className='text-sm md:text-[18.94px] font-semibold  text-sixth text-justify mb-[20px] lg:mb-[33px] mt-[11px] lg:mt-[25px] leading-[33.65px] lg:leading-[60.36px]'>گردونه شانس یکی از امکانات جدید و هیجان‌انگیز پلتفرم ارز هشت است که به تازگی رونمایی شده و فرصت ویژه‌ای برای کاربران فراهم کرده است. با این قابلیت، تمامی کاربران می‌توانند هر ۲۴ ساعت یک‌بار گردونه را به صورت کاملاً رایگان بچرخانند و شانس خود را برای دریافت جوایز ارز دیجیتال امتحان کنند.</p>


            <Link className='self-end w-full lg:w-56 h-[47px] lg:h-[61px]' href={"#"}>
              <button className=' bg-primary w-full h-full text-white text-[15px] lg:text-xl font-bold rounded-[15.3px] xl:rounded-[20px]'>گرداندن گردونه</button>
            </Link>
          </div>
          <div className="w-full order-1 xl:order-3 flex justify-center xl:justify-end items-center ">
            <Image
              src={wheel}
              alt="image"     
            />
          </div>
        </div>

        <div className='flex flex-col gap-5 lg:gap-10'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>جوایز گزدونه شانس ارزهشت</h2>
          <div className='w-full overflow-x-auto custom-scrollbar' ref={containerRef}>
            <div className='flex flex-row gap-4 w-full'
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >

              <div className='w-[33%] min-w-40 md:min-w-[195px] '>
                <div className='w-40 h-40 md:w-[195px] md:h-[195px] bg-third flex flex-col gap-4 rounded-xl justify-center items-center  lg:shadow-[0_0_10px_#9B9B9B26] shadow-[0_0_8.34px_#9B9B9B26] dark:shadow-[0_0_8.34px_#24242838]'>
                  <div className='w-[82px] h-[82px] md:w-[69px] md:h-[69px]'>
                    <Awards />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>جوایز نقدی</span>
                </div>
              </div>

              <div className='w-[33%] min-w-40 md:min-w-[195px]  '>
                <div className='w-40 h-40 md:w-[195px] md:h-[195px] bg-third flex mx-auto flex-col gap-4 rounded-xl justify-center items-center lg:shadow-[0_0_10px_#9B9B9B26] shadow-[0_0_8.34px_#9B9B9B26] dark:shadow-[0_0_8.34px_#24242838]'>
                  <div className='w-[82px] h-[82px] md:w-[69px] md:h-[69px]'>
                    <Arz />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>ارزدیجیتال رایگان</span>
                </div>
              </div>

              <div className='w-[33%] min-w-40 md:min-w-[195px] '>
                <div className='w-40 h-40 md:w-[195px] md:h-[195px] bg-third flex mr-auto flex-col gap-4 rounded-xl justify-center items-center lg:shadow-[0_0_10px_#9B9B9B26] shadow-[0_0_8.34px_#9B9B9B26] dark:shadow-[0_0_8.34px_#24242838]'>
                  <div className='w-20 h-20 md:w-16 md:h-16'>
                    <Discount />
                  </div>
                  <span className='text-base md:text-lg font-semibold'>جایزه تخفیف کارمزد</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className='flex flex-col lg:flex-row'>
          <div className='w-[388px]  lg:w-[489px] h-[479px] lg:h-[604px] self-center'>
            <ImageCarousel imageUrls={imageUrls} />
          </div>
          <div className='flex flex-col w-full mt-12 lg:mt-0 lg:mr-[75px] justify-center '>
            <h3 className='text-xl md-text-2xl  xl:text-3xl font-bold mb-[16px] lg:mb-[28px]'>همین الان ثبت نام کن و گردونه رو بچرخون!</h3>
            <p className='text-sm md:text-base  xl:text-xl font-semibold text-sixth text-justify leading-9 lg:leading-[63px] xl:leading-[63px] '>با گردونه شانس، ارز دیجیتال رایگان دریافت کنید! پس از برنده شدن، می‌توانید مبلغ جایزه را به‌راحتی به حساب بانکی خود برداشت کنید و از این طریق به‌سادگی از یک صرافی ارز دیجیتال درآمد دلاری کسب کنید.
            </p>
            <div className='flex justify-end w-full  h-[53px] lg:h-16 '>
              <Link className='md:mt-[26px] rounded-[15px] lg:rounded-[21px] w-full  lg:w-[230px] h-full' href={"https://app.arz8.com/auth/register"}>
              <button className='text-xl lg:text-3xl rounded-[15px] lg:rounded-[21px]  w-full   h-full font-bold text-white bg-primary  text-center '>ثبت نام سریع</button>
              </Link>
            </div>
          </div>


        </div>

        <div className='flex flex-col'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>جوایز طبق سطح کاربری</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-[26px] lg:mt-10'>
            {awards.map((item, index) => (
              <div key={index} className='flex flex-col w-full py-[15px] px-[18px]  sm:px-3  bg-third rounded-xl'>
                <div className='flex gap-4 items-center mb-2 sm:mb-3'>
                  <img src={item.icon} alt='icon' className='w-10 h-10 md:w-[60px] md:h-[60px]' />
                  <span className='text-base sm:text-[18.9px] font-bold'>{item.title}</span>
                </div>
                <span className='text-sm sm:text-base font-normal text-justify mt-xl leading-[30px] sm:leading-[45px]'>{item.description}</span>
              </div>
            ))}
          </div>

          <div className='flex w-full py-[15px] px-[18px] mt-5 bg-third rounded-xl '>
            <span className='flex w-full text-sm sm:text-xl font-normal text-center justify-center items-center leading-[30px]' >نکته: در سطح طلایی و کریستال گزینه پوچ وجود نداره و شما در هر صورت به صورت روزانه برنده جایزه خواهید شد.</span>
          </div>
        </div>


        <div className='flex flex-col lg:flex-row  justify-between '>
          <div className=" w-full lg:w-[55%] flex flex-col justify-center order-3 lg:order-1  ">
            <h2 className='text-xl md:text-2xl lg:text-3xl leading-[35px] lg:leading-[39px] font-bold text-Seventh mb-[16px] lg:mb-[28px] text-justify w-[100%]'>چگونه از گردونه شانس صرافی ارز 8 استفاده کنیم؟</h2>
            <p className='text-xs md:text-xl font-semibold leading-[37px] md:leading-[63px]  text-sixth text-justify md:mb-[26px]'>به طور کلی استفاده از گردونه صرافی ارز هشت، شرایط پیچیده ای ندارد، فقط کافی است تا در صرافی ثبت نام کنید و هر روز شانس‌تان را برای برنده شدن امتحان کنید.</p>


            <Link className='self-end w-full lg:w-[230px] sm:h-16 h-[53px] mt-5 lg:mt-0 ' href="#">
              <button className=' bg-primary w-full h-full text-white text-xl lg:text-3xl font-bold rounded-[15px]  lg:rounded-[20px]'>چرخش گردونه</button>
            </Link>
          </div>
          <div className='w-full lg:w-[45%] order-2 flex justify-center'>
            <Image className='' src={Ghar} alt='Ghar' width={305} height={633} />
          </div>

        </div>


        <div className='flex flex-col gap-10'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-Seventh'>سوالات متداول گردونه شانس ارزهشت</h2>
          <div className='flex flex-col gap-5'>
            <Accordion items={AccordionData} />
          </div>

        </div>
      </div>
    </div>
  )
}
