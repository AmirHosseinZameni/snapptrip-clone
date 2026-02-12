import DropIcon from "./DropIcon";
import Button from "./Button";

export default function Info() {
  return (
    <div className="bg-[#F8F9FD] p-4 grid  grid-cols-1 rounded-2xl gap-4 mx-6 mt-12 lg:grid-cols-2 xl:max-w-300 xl:mx-auto">
      {/* Image Section */}
      <div className="flex justify-center w-full lg:order-2">
        <img
          src="/assets/ist-info.png"
          alt="ist image"
          className=" rounded-lg sm:object-cover w-full"
        />
      </div>
      {/* Details Section */}
      <div className="flex flex-col gap-4 lg:order-1">
        {/* Text Section */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-[19px]">درباره استانبول</h2>
            <p className="line-clamp-7 font-regular text-[14px] text-[#040A1F99]">
              خرید بلیط هواپیما به‌عنوان نخستین گام سفر لازم است که بهترین
              تجربه‌ی خرید آنلاین خدمات سفر باشد تا با خیالی راحت به مراحل بعدی
              سفر قدم بگذارید. با خرید آنلاین بلیط هواپیما از اسنپ‌تریپ، راحت و
              ارزان تنها با چند کلیک بلیط سفرتان با بهترین قیمت، در کمترین زمان
              و به مطمئن‌ترین روش خریداری کنید.خرید بلیط هواپیما به‌عنوان نخستین
              گام سفر لازم است که بهترین تجربه‌ی خرید آنلاین خدمات سفر باشد تا
              با خیالی راحت به مراحل بعدی سفر قدم بگذارید. با خرید آنلاین بلیط
              هواپیما از اسنپ‌تریپ، راحت و ارزان تنها با چند کلیک بلیط سفرتان با
              بهترین قیمت، در کمترین زمان و به مطمئن‌ترین روش خریداری کنید.خرید
              بلیط هواپیما به‌عنوان نخستین گام سفر لازم است که بهترین تجربه‌ی
              خرید آنلاین خدمات سفر باشد تا با خیالی راحت به مراحل بعدی سفر قدم
              بگذارید. با خرید آنلاین بلیط هواپیما از اسنپ‌تریپ، راحت و ارزان
              تنها با چند کلیک بلیط سفرتان با بهترین قیمت، در کمترین زمان و به
              مطمئن‌ترین روش خریداری کنید.خرید بلیط هواپیما به‌عنوان نخستین گام
              سفر لازم است که بهترین تجربه‌ی خرید آنلاین خدمات سفر باشد تا با
              خیالی راحت به مراحل بعدی سفر قدم بگذارید. با خرید آنلاین بلیط
              هواپیما از اسنپ‌تریپ، راحت و ارزان تنها با چند کلیک بلیط سفرتان با
              بهترین قیمت، در کمترین زمان و به مطمئن‌ترین روش خریداری کنید.
            </p>
          </div>
          <Button className="flex items-center font-medium text-[14px]">
            <span className="text-[#575EFF]">مشاهده بیشتر</span>
            <DropIcon color="#575EFF" />
          </Button>
        </div>
        {/* BoX Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* 1 */}
          <div className="bg-white p-4 rounded-lg flex gap-2">
            <div>
              <img src="/assets/lunchdining.svg" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-8">
                معروف ترین غذا
              </span>
              <span className="font-regular text-[14px] text-[#040A1F99] leading-5 tracking-[0%]">
                کباب ترکی، باقلوا، سیمیت (نان حلقه ای)
              </span>
            </div>
          </div>
          {/* 2 */}
          <div className="bg-white p-4 rounded-lg flex gap-2">
            <div>
              <img src="/assets/watchlater.svg" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-8">
                اختلاف زمانی
              </span>
              <span className="font-regular text-[14px] text-[#040A1F99] leading-5 tracking-[0%]">
                30 دقیقه عقب تر از ایران
              </span>
            </div>
          </div>
          {/* 3 */}
          <div className="bg-white p-4 rounded-lg flex gap-2">
            <div>
              <img src="/assets/redeem.svg" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-8">
                معروفترین سوغات
              </span>
              <span className="font-regular text-[14px] text-[#040A1F99] leading-5 tracking-[0%]">
                باقلوا، فرش و گلیم، ظروف چینی و قهوه ترک
              </span>
            </div>
          </div>
          {/* 4 */}
          <div className="bg-white p-4 rounded-lg flex gap-2">
            <div>
              <img src="/assets/map.svg" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-8">
               پربازدید ترین محله
              </span>
              <span className="font-regular text-[14px] text-[#040A1F99] leading-5 tracking-[0%]">
               ایاصوفیه، تقسیم  
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
