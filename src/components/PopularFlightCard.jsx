import PopularFlight from "./PopularFlight";
export default function PopularFlightCard() {
  return (
   
      <div className=" shrink-0 w-68.5 h-46-25 px-3 pt-3 pb-2 ring-1 ring-[#6164751F] ring-inset rounded-xl ">
        <div className="pb-2 border-b border-dashed border-[#6164751F]">
          <PopularFlight />
        </div>
        <div className="pt-2">
          <PopularFlight />
        </div>
      </div>
 
  );
}
