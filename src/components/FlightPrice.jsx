import Button from "./Button";

export default function FlightPrice() {
  return (
    <div className="flex justify-between items-center pb-3.5 pt-3.5 pl-4 pr-4">
      <p className="text-[14px] font-medium">
        از <span className="text-[16px] ">555,555,000</span> تومان
      </p>
      <Button className="bg-[#ED071A] text-white rounded-lg pt-1.5 pb-1.5 pr-4 pl-4">
        <span className="text-[14px] font-medium">لیست پروازها</span>
      </Button>
    </div>
  );
}
