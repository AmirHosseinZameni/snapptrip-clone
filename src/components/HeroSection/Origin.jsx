import { useEffect, useState } from "react";
import SwapVert from "../icons/SwapVert";
import Button from "../Button";
import LocationSelector from "./LocationSelector";

export default function Origin({ setOrigin, origin }) {
  const [isOriginOpen, setIsOriginOpen] = useState(false);
  const [originQuery, setOriginQuery] = useState("");
  const [origins, setOrigins] = useState([]);
//   const [originName, setOriginName] = useState("مبدا");
  function handleSetOrigin(e) {
    setOrigin(e);
    handleCloseOrigin();
  }

  //  function  handleSetOrigin (){
  //     setOrigin()
  //  }
  function handleOpenOrigin() {
    return setIsOriginOpen((curr) => !curr);
  }
  function handleCloseOrigin() {
    return setIsOriginOpen(false);
  }

  function handleInputChange(e) {
    setOriginQuery(e);
  }

  useEffect(
    function () {
      async function fetchOrigin() {
        const res = await fetch(
          `https://snapptrip-json-server.vercel.app/api/cities?search=${originQuery}`,
        );
        const data = await res.json();
        setOrigins(data);
      }
      fetchOrigin();
    },
    [originQuery],
  );
//   useEffect(
//     function () {
//       async function fetchOriginName() {
//         const res = await fetch(
//           `https://snapptrip-json-server.vercel.app/api/cities?search=${origin}`,
//         );
//         const data = await res.json();
//         console.log(data);
//         const [{ name, country }] = data;
//         setOriginName(`${name}, ${country}`);
//       }
//       fetchOriginName();
//     },
//     [origin],
//   );
  return (
    <div className="relative border border-[#a0a2aa] rounded-lg xl:flex  xl:w-120 xl:h-14 ">
      <span className="absolute top-11.5 right-3 text-[12px] font-normal text-[#040A1F99] bg-white pr-1 pl-1 xl:-top-3 xl:right-63">
        مقصد
      </span>
      <div className="border-b border-[#a0a2aa] p-4 xl:flex-1 xl:border-none ">
        <Button onClick={handleOpenOrigin} className="w-full text-right">
          {
            origin ? `${origin.city}، ${origin.country}` : "مبدا" 

          }
        </Button>
        {isOriginOpen ? (
          <>
            <LocationSelector
              handleInputChange={handleInputChange}
              origins={origins}
              handleSetOrigin={handleSetOrigin}
            />
            <div
              className="fixed inset-0 z-10 bg-black opacity-30 md:bg-none md:opacity-0"
              onClick={handleCloseOrigin}
            />
          </>
        ) : (
          ""
        )}
      </div>

      <Button className="absolute left-5 top-11 bg-white xl:top-4 xl:left-60 xl:rotate-90">
        <SwapVert />
      </Button>

      <div className=" p-4  xl:flex-1">
        <Button>مقصد</Button>
      </div>
    </div>
  );
}
