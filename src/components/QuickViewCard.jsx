export default function QuickViewCard({text, subText, img}) {
  return (
    <div className="w-full h-20 bg-white pt-4 pb-4 pr-4 flex items-center gap-2 rounded-lg">
      <div>
        <img src={img} alt="yo" className="w-12 h-12" />
      </div>

      <div>
        <p className="font-regular text-[14px] text-[#040A1F99]">
         {text}
        </p>
        <span className="font-medium text-[16px]">{subText}</span>
      </div>
    </div>
  );
}
