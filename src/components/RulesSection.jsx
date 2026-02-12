import Button from "./Button";
import DropIcon from "./DropIcon";
import Table from "./Table";
export default function RulesSection() {
  return (
    <div className="mt-12">
      <div className="mx-6 flex flex-col gap-2">
        <h4 className="font-medium text-[16px]">
          قوانین حمل بار ایرلاین های تهران لندن
        </h4>
        <div className="font-regular text-[14px] ">
          <p className="text-[#040A1F99]">
            اگر قصد سفر از تهران به لندن را دارید، آشنایی با قوانین حمل بار
            ایرلاین‌های مختلف یک ضرورت مهم پیش از خرید بلیط است. بسته به ایرلاین
            و کلاس پروازی، میزان مجاز بار کابین (همراه مسافر) و بار چک‌شده
            (تحویلی) تفاوت دارد. همچنین هر ایرلاین محدودیت‌هایی برای وزن، تعداد
            چمدان و ابعاد آن‌ها تعیین کرده است.
          </p>
          <br></br>
          <p className="text-[#040A1F99]">
            در این جدول، مشخصات کامل حمل بار در ایرلاین‌هایی که پرواز بین تهران
            و لندن را ارائه می‌دهند گردآوری شده است؛ از جمله Emirates، Turkish
            Airlines، Lufthansa، Flydubai و دیگر شرکت‌های معتبر. این اطلاعات به
            شما کمک می‌کند تا با در نظر گرفتن شرایط حمل بار، ایرلاین مناسب خود
            را انتخاب کرده و از هزینه‌های اضافی جلوگیری کنید.
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table />
      </div>
      <div className="mx-6 mt-6 flex flex-col gap-2">
        <h4 className="font-medium text-[16px]">Turkish Airlines</h4>
        <div className="font-regular text-[14px] ">
          <p className="text-[#040A1F99]">
            با یک توقف در استانبول، این ایرلاین ترکیه‌ای یکی از پرطرفدارترین
            گزینه‌ها برای سفر از تهران به لندن است. Turkish Airlines پروازهای
            روزانه با اتصالات مناسب به فرودگاه‌های هیترو و گتویک لندن ارائه
            می‌دهد. مزایا: کیفیت خدمات بالا، تنوع ساعت‌های پرواز، امکان توقف
            کوتاه در استانبول.
          </p>
        </div>
        <Button className="flex items-center text-[#575EFF] font-medium text-[14px]">
          <span>مشاهده کمتر</span>
          <DropIcon color="#575EFF" style="rotate-180" />
        </Button>
      </div>
    </div>
  );
}
