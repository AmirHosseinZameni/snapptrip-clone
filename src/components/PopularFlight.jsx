import DropIcon from "./DropIcon";

export default function PopularFlight() {
  return (
    <div className="flex items-center gap-4 py-1 cursor-pointer">
      <div>
        <img
          src="/assets/popularFlight.png"
          alt="popularFlight "
          className="w-16 h-16 rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-regular text-[10px] text-[#040A1F99]">بلیط</span>
        <span className="font-medium text-[16px] text-[#040A1FDE] ">مشهد به استانبول</span>
      </div>
      <div>
        <DropIcon style="rotate-90" />
      </div>
    </div>
  );
}
