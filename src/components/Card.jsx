import FlightDetails from "./FlightDetails";
import FlightPrice from "./FlightPrice";
export default function Card() {
  return (
    <div
      className="border border-[#EBECF2] rounded-xl shadow-lg ring-2 ring-[#6164751F] max-w-75 w-75 mx-autow-full flex flex-col shrink-0"
    >
      <FlightDetails />
      <FlightPrice />
    </div>
  );
}
