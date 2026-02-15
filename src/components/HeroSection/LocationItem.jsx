export default function LocationItem() {
  return (
    <li className="h-12 flex gap-4 justify-start items-center shrink-0 cursor-pointer">
      {/* Location icon */}
      <div>
        <img src="/assets/map-icon.svg" alt="yo" className="w-4 h-4" />
      </div>
      {/* item detalis */}
      <div>
        {/* Country and Province */}
        <div className="font-medium">
          <span className="text-[#040a1fde]">استان، </span>
          <span>کشور</span>
        </div>
        {/* Airports */}
        <div>
          <span className="font-medium text-sm text-[#040a1f99]">فوردگاه</span>
        </div>
      </div>
    </li>
  );
}
