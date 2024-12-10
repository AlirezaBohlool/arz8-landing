import React from 'react';
import Image from 'next/image';
import Bot from "@/assets/images/about/bot.png"
import { aboutData } from './data/aboutData';

export default function About() {
    return (
        <div className="flex flex-col bg-background px-5 py-20 lg:px-[120px] lg:py-[30px]">
            <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="lg:w-2/3 w-full flex flex-col justify-center order-2">
                    <h1 className='text-4xl font-bold text-Seventh mt-7 lg:mt-0'>درباره صرافی ارزهشت</h1>
                    <p className='text-lg font-semibold  text-sixth mt-10 leading-9'>صرافی ارزهشت با هدف ایجاد یک پلتفرم مطمئن و پیشرفته برای معامله‌گران و سرمایه‌گذاران ارزهای دیجیتال راه‌اندازی شده است. تیم ما از متخصصین با تجربه در حوزه فناوری بلاکچین، امنیت اطلاعات و بازارهای مالی تشکیل شده و متعهد است بهترین خدمات ممکن را به شما ارائه دهد.</p>
                </div>
                <div  className="lg:w-1/3  w-full  order-1 lg:order-3 flex justify-center items-center self-center">
                <Image
                    src={Bot}
                    alt="image"
                />
                </div>
                
            </div>


            <span className='text-3xl font-semibold text-Seventh mb-12 mt-11'>چرا صرافی ارز هشت</span>

            <div className='flex flex-wrap justify-center'>
                {aboutData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='mb-10 mx-auto w-52 h-52 bg-fourth flex flex-col items-center justify-center rounded-xl shadow-lg'
                        >
                            <div className='w-[105px] h-[105px] flex items-center justify-center '>
                                <item.src />
                            </div>

                            <span className='py-2 text-lg font-semibold text-Seventh'>{item.text}</span>
                        </div>
                    );
                })}
            </div>


            <div className='flex flex-col md:flex-row justify-between mt-24'>
                <div className='w-full md:w-1/2 flex flex-col ml-2'>
                    <span className='mb-7 text-Seventh text-2xl font-semibold '>ماموریت صرافی ارز هشت</span>
                    <div className='w-full  rounded-xl p-7 bg-third'>
                        <span className='text-Seventh text-lg font-normal leading-9'>ایجاد فضایی امن، شفاف و کاربرپسند برای همه افرادی که به آینده ارزهای دیجیتال اعتقاد دارند.</span>
                    </div>

                </div>
                <div className='w-full md:w-1/2 flex flex-col mr-2 mt-7 md:mt-0'>
                    <span className='mb-7 text-Seventh text-2xl font-semibold '>ماموریت صرافی ارز هشت</span>
                    <div className='w-full mb-2  rounded-xl p-7 bg-third'>
                        <span className='text-Seventh text-lg font-normal'>شفافیت در تمامی مراحل و فرآیندها</span>
                    </div>
                    <div className='w-full mb-2  rounded-xl p-7 bg-third'>
                        <span className='text-Seventh text-lg font-normal leading-9'> ارائه راهکارهای جدید و پیشرفته برای آسان‌تر کردن معاملات</span>
                    </div>
                    <div className='w-full mb-2 rounded-xl p-7 bg-third'>
                        <span className='text-Seventh text-lg font-normal leading-9'>همیشه گوش به نیازها و بازخوردهای شما هستیم</span>
                    </div>

                </div>
            </div>




        </div>
    );
}
