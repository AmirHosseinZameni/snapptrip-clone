import AirLine from "./AirLine";
export default function AirLinesSection() {
  return (
    <div className="flex flex-col gap-4 mx-6 mt-12">
      <span className="font-medium text-[16px] leading-8">ایرلاین ها</span>
      <div className="bg-[#F8F9FD] py-4 pr-4 flex gap-4 rounded-2xl overflow-x-auto" >
        <AirLine />
        <AirLine />
        <AirLine />
        <AirLine />
        <AirLine />
        <AirLine />
        <AirLine />
        <AirLine />
      </div>
    </div>
  );
}
