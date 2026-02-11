import AirLineLogo from "./AirLineLogo";
import FlighArrIcon from "./icons/FlighArrIcon";

export default function FlightDetails() {
  return (
    <div className="p-4 border-b-2 border-[#6164751F] flex flex-col gap-1">
      {/* Top */}
      <div className="flex gap-2 items-center ">
        <div>
          <span className=" text-[20px] font-regular leading-6 flex items-center">
            11:55
          </span>
        </div>
        <div className="flex items-center ">
          <FlighArrIcon />
        </div>
        <div>
          <span className=" text-[20px] font-regular leading-6 flex items-center">
            11:55
          </span>
        </div>
      </div>
      <div className="flex gap-17 text-[12px] font-normal ">
        <div><span>تهران (TEH)</span></div>
        <div><span>استانبول (IST)</span></div>
      </div>

      {/* Bottom */}
      <div className="flex items-center gap-2 font-medium text-[14px]">
        <div><AirLineLogo/></div>
        <div className="flex flex-col gap-1">
            <p>ایران ایر</p>
            <p>چهارشنبه، 31 اردیبهشت</p>
        </div>
      </div>
    </div>
  );
}
