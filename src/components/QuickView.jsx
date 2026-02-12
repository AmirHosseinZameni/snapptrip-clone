import QuickViewCard from "./QuickViewCard";
export default function QuickView() {
  return (
    <div className="mx-6 mt-12 flex flex-col gap-4 xl:max-w-300 xl:mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <p className="font-medium text-[16px]">استانبول در یک نگاه</p>
        <p className="font-regular text-[14px] text-[#040A1F99]">
          استانبول، بزرگترین و پرجمعیت ترین شهر ترکیه است
        </p>
      </div>
      {/* Body */}
      <div className="bg-[#F8F9FD] p-4 grid  grid-cols-1 rounded-2xl gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        <QuickViewCard text="جاذبه گردشگری" subText="+200" img="/assets/vector1.png"/>
        <QuickViewCard text="پرواز روزانه" subText="+100" img="/assets/vector2.png"/>
        <QuickViewCard text="اقامتگاه" subText="+500" img="/assets/vector3.png"/>
        <QuickViewCard text="جمعیت" subText="15 میلیون" img="/assets/vector4.png"/>
        <QuickViewCard text="بهترین زمان سفر" subText="فروردین، اردیبهشت" img="/assets/vector5.png"/>
        <QuickViewCard text="یکاری پول" subText="لیر TRY" img="/assets/vector6.png"/>
      </div>
    </div>
  );
}
