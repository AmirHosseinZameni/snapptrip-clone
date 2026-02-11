import FlightCards from "./FlightCards";
import Button from "./Button";

export default function CardSection() {
  return (
    <div className="mx-6 flex flex-col gap-4 ">
      {/* Section Header */}
      <div>
        <p className="font-medium text-[16px] leading-6">
          پرواز های یک طرفه به مقصد <span>x</span>
        </p>
        <p className="font-medium text-[12px] leading-6 text-[#040A1F99]">برای دیدن آفر های هر شهر لطفا مبدا خود را انتخاب کنید</p>
      </div>

      {/* Tab bar */}
      <div className="flex gap-2">
        <Button className=" bg-[#575EFF] text-white rounded-3xl  pt-2 pb-2 pr-4 pl-4">
          <span className="text-[14px] font-medium p-0">تهران</span>
        </Button>
        <Button className="  rounded-3xl  pt-2 pb-2 pr-4 pl-4">
          <span className="text-[14px] font-medium p-0">شیراز</span>
        </Button>
        <Button className="  rounded-3xl  pt-2 pb-2 pr-4 pl-4">
          <span className="text-[14px] font-medium p-0">تبریز</span>
        </Button>
        <Button className="  rounded-3xl  pt-2 pb-2 pr-4 pl-4">
          <span className="text-[14px] font-medium p-0">اصفهان</span>
        </Button>
        <Button className="  rounded-3xl  pt-2 pb-2 pr-4 pl-4">
          <span className="text-[14px] font-medium p-0">یزد</span>
        </Button>
      </div>

      {/* Cards */}
      <FlightCards />
    </div>
  );
}
