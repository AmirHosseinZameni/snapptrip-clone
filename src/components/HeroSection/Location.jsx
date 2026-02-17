import { useEffect, useState } from "react";
import Button from "../Button";
import LocationSelector from "./LocationSelector";

export default function Location({
  setOrigin = null,
  origin = null,
  setDestiation = null,
  destination = null,
  name = null,
}) {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const [locations, setLocations] = useState([]);
  //   const [originName, setOriginName] = useState("مبدا");
  function handleSetLocation(e) {
    // setOrigin(e)
    setOrigin ? setOrigin(e) : setDestiation(e);
    handleCloseLocation();
  }

  //  function  handleSetOrigin (){
  //     setOrigin()
  //  }
  function handleOpenLocation() {
    return setIsLocationOpen((curr) => !curr);
  }
  function handleCloseLocation() {
    return setIsLocationOpen(false);
  }

  function handleInputChange(e) {
    setLocationQuery(e);
  }

  useEffect(
    function () {
      async function fetchLocation() {
        const res = await fetch(
          `https://snapptrip-json-server.vercel.app/api/cities?search=${locationQuery}`,
        );
        const data = await res.json();
        setLocations(data);
      }
      fetchLocation();
    },
    [locationQuery],
  );

  return (
    <div className="border-b border-[#a0a2aa] p-4 xl:flex-1 xl:border-none ">
      <Button onClick={handleOpenLocation} className="w-full text-right">
        {/* {origin || destiation
          ? origin
            ? `${origin.city}، ${origin.country}`
            : `${destiation.city}، ${destiation.country}`
          : name} */
         origin? `${origin.city}، ${origin.country}`: name &&
         destination ? `${destination.city}، ${destination.country}`: name
          
          }
         
         



      </Button>
      {isLocationOpen ? (
        <>
          <LocationSelector
            handleInputChange={handleInputChange}
            locations={locations}
            handleSetLocation={handleSetLocation}
            name={name}
            handleCloseLocation={handleCloseLocation}
          />
          <div
            className="fixed inset-0 z-10 bg-black opacity-30 md:bg-none md:opacity-0"
            onClick={handleCloseLocation}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
