export default function PopularFlightRoutesSection() {
  return (
    <div className="flex flex-col gap-4 mx-6 mt-12 xl:max-w-300 xl:mx-auto">
      <h4 className="font-medium text-[16px] ">پرطرفدار ترین مسیر های پروازی</h4>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 font-regular text-[12px] sm:grid-cols-4">
        <a href="">بلیط هواپیما تهران مشهد</a>
        <a href="">بلیط هواپیما تهران شیراز</a>
        <a href="">بلیط هواپیما تهران کیش</a>
        <a href="">بلیط هواپیما شیراز مشهد</a>
        <a href="">بلیط هواپیما اصفهان کرمان</a>
        <a href="">بلیط هواپیما بندرعباس تهران</a>
        <a href="">بلیط هواپیما کیش مشهد</a>
        <a href="">بلیط هواپیما تهران کیش</a>
      </div>
    </div>
  );
}
