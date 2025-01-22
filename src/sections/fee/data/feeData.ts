import Silver from "@/assets/images/wheelluck/Silver.png"
import Bronze from "@/assets/images/wheelluck/Bronze.png"
import Gold from "@/assets/images/wheelluck/Gold.png"
import Crystal from "@/assets/images/wheelluck/Crystal.png"

export const AccordionData = [
    {
        id: 1,
        title: "کارمزد واریز و برداشت رمز ارز",
        content: "ارز هشت برای واریز و برداشت و در کل انتقال رمز ارزها هیچ‌گونه کارمزدی دریافت نمی‌کند و تمامی کارمزدها متعلق به شبکه بلاکچین است و خارج از اختیار ارز هشت است."
    },
    {
        id: 2,
        title: "انتقال بین کاربری",
        content: "ارز هشت برای انتقال ارز و تومان بین کاربران خود کارمزدی دریافت نمیکند."
    },
    {
        id: 3,
        title: "کارمزد واریز و برداشت رمز ارز",
        content: "کارمزدهای برداشت بر اساس کارمزدهای جهانی شبکه بلاکچین رمز ارزها محاسبه شده است و برای هریک از رمزارزها متفاوت خواهد بود."
    },
    {
        id: 4,
        title: "واریز و برداشت ریال",
        content: "واریز ریال مشمول کارمزد نمی‌باشد. برداشت‌های ریالی به علت هزینه‌های درگاه‌های پرداخت مشمول حداقل هزار تومان و حداکثر 5 هزار تومان کارمزد می‌باشد. این مقدار برای تمامی برداشت‌های ریالی ثابت است."
    },
]

export const TransactionFeeListText = [
    {
        text: "سطح کاربری بر اساس حجم سفارشات خرید و فروش و ترید 30 روز گذشته بوده و هر روز راس ساعت 12 شب به روز رسانی می شود."
    },
    {
        text: "کارمزد معاملات از میزان دارایی معامله شده کسر می گردد."
    },
    {
        text: "واریز ارز به ارز هشت بدون کارمزد است."
    },
    {
        text: "برداشت ارز به کیف پول خارجی شامل کارمزد بلاکچین بوده و ارز هشت در کارمزد انتقال بلاکچین ذینفع نمی باشد."
    },
    {
        text: "انتقال بین کاربران ارز هشت با کارمزد صفر انجام می شود."
    }
];

export const TransactionFeesTableHeaders = [
    { label: "سطح کاربری", key: "0" },
    { label: "حجم معاملات (به تومان)", key: "1" },
    { label: "کارمزد ترید خرید", key: "2" },
    { label: "کارمزد ترید فروش", key: "3" },
    { label: "کارمزد سفارش خرید", key: "4" },
    { label: "کارمزد سفارش فروش", key: "5" },
];

export const TransactionFeesTableBody = [
    {
        "0": Bronze.src,
        "1": "0 تا 100 میلیون",
        "2": "0.35",
        "3": "0.35",
        "4": "0",
        "5": "0",
    },
    {
        "0": Silver.src,
        "1": "100 تا 400 میلیون",
        "2": "0.32",
        "3": "0.32",
        "4": "0",
        "5": "0",
    },
    {
        "0": Gold.src,
        "1": "400 میلیون تا یک میلیارد",
        "2": "0.3",
        "3": "0.3",
        "4": "0",
        "5": "0",
    },
    {
        "0": Crystal.src,
        "1": "بیش از یک میلیارد",
        "2": "0.27",
        "3": "0.27",
        "4": "0",
        "5": "0",
    },
];



export const ScheduleWithdrawListText = [
    {
        text: "برداشت ریال شامل 0.04 درصد از مبلغ درخواستی (حداقل 800 تومان و حداکثر 7500 تومان به ازای هر 100 میلیون می باشد) . برای مثال کارمزد برداشت 10 هزار تومان 800 تومن خواهد بود و مبلغ نه هزار و 200 تومان به حساب مقصد واریز میشود و اگر 100 میلیون برداشت شود کارمزدش 7500 تومان خواهد بود."
    },
    {
        text: " تسویه در روز های تعطیل انجام نمیشود."
    },

];

export const ScheduleWithdrawTableHeaders = [
    { label: "ساعت درخواست", key: "1" },
    { label: "00:00 تا 10 صبح", key: "2" },
    { label: "10 صبح تا 13", key: "3" },
    { label: "13 تا 18", key: "4" },
    { label: "18 تا 23:59", key: "5" },
    { label: "روز تعطیل", key: "6" },
];

export const ScheduleWithdrawTableBody = [
    {
        "1": "تمامی بانک ها",
        "2": "ساعت 11:30 تا 12:30",
        "3": "ساعت 13:30 تا 14:30",
        "4": "ساعت 19:30 الی 20:30",
        "5": "ساعت 05:30 الی 06:30",
        "6": "بدون واریز",
    },
];

