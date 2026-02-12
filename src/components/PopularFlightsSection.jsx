import PopularFlightCard from "./PopularFlightCard";

export default function PopularFlightsSection() {
  return (
    <div className="mt-12 mr-6">
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-[19px] text-[#040A1FDE]">پرطرفدار ترین پرواز های استانبول</h3>
        <div className="overflow-x-auto flex gap-4 ">
          <PopularFlightCard />
          <PopularFlightCard />
        </div>
      </div>
    </div>
  );
}
