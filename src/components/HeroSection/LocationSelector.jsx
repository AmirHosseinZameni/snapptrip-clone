import LocationItem from "./LocationItem";

export default function LocationSelector({ handleInputChange, locations ,handleSetLocation, name, handleCloseLocation}) {
  console.log(name)
  return (
    <div className="shadow-2xl rounded-lg bg-white fixed inset-0 z-50 flex flex-col md:absolute md:inset-auto md:right-0 md:w-80 md:h-96 md:-top-4">
      {/* Header */}
      <div className="flex items-center gap-6 h-16 mx-6 shrink-0 md:hidden">
        <span onClick={handleCloseLocation}>x</span>
        <span className="text-xl font-medium">{name}</span>
      </div>

      {/* Search field */}
      <div className="bg-[#f8f9fd] flex items-center gap-4 mx-6 px-4 rounded-lg shrink-0 md:bg-white md:mx-0 md:px-6">
        <img src="/assets/map-icon.svg" alt="yo" className="w-3 h-3 shrink-0" />
        <input
          type="text"
          placeholder={`جستجوی ${name}`}
          className="h-16 w-full bg-transparent outline-none font-medium"
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <img
          src="/assets/magnifying-icon.svg"
          alt="yo"
          className="w-4 h-4 shrink-0"
        />
      </div>

      {/* Results */}
      <ul className="flex flex-col gap-6 overflow-y-auto flex-1 mr-6 mt-8 md:mr-0 md:mt-4 md:pr-4">
        { locations.map(({ id, name: city, country, airports }) => (
          <LocationItem
            key={id}
            city={city}
            country={country}
            airport={airports?.[0]?.name}
            handleSetLocation={handleSetLocation}
            code={airports?.[0]?.code}
            
          />
        ))}
      </ul>
    </div>
  );
}
