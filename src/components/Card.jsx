import FlightDetails from "./FlightDetails";
import FlightPrice from "./FlightPrice";
export default function Card() {
  return (
    <div
      className=" rounded-xl ring-2 ring-[#6164751F] max-w-75 w-75 mx-autow-full flex flex-col shrink-0 cursor-pointer"
    >
      <FlightDetails />
      <FlightPrice />
    </div>
  );
}
