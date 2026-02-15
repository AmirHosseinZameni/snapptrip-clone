import HotelIcon from "./HotelIcon";

export default function DropDownBox() {
  return (
    <div className="w-70 absolute top-full pt-2 invisible group-hover:visible">
      <div className="z-50 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100 p-2 bg-white rounded-lg">
        <ul>
          <li className="h-12 flex gap-1 items-center cursor-pointer">
            <HotelIcon />
            <span>هتل خارجی</span>
          </li>
          <li className="h-12 flex gap-1 items-center cursor-pointer">
            <HotelIcon />
            <span>هتل خارجی</span>
          </li>
          <li className="h-12 flex gap-1 items-center cursor-pointer">
            <HotelIcon />
            <span>هتل خارجی</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
