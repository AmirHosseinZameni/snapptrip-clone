import AirLineLogoIcon from "./icons/AirLineLogoIcon";

export default function AirLine() {
  return (
    <div className="shrink-0 w-26.25 h-30 bg-white rounded-2xl flex flex-col items-center justify-center gap-2 ring-1 ring-[#EBECF2] cursor-pointer">
      <AirLineLogoIcon className="w-14 h-14" />
      <span className="font-medium text-[14px]">ایران ایر</span>
    </div>
  );
}
