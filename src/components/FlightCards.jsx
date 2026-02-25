import Card from "./Card";

export default function FlightCards() {
  return (
    <div className="overflow-x-auto flex gap-4 p-1 scrollbar-hide">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
