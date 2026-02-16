import { useEffect, useState } from "react";
import Button from "./Button";
import SwapVert from "./icons/SwapVert";
import RadioField from "./RadioField";
import LocationSelector from "./HeroSection/LocationSelector";

export default function HeroSection() {
  const [isTripTypeOpen, setIsTripTypeOpen] = useState(false);
  const [tripType, setTriptype] = useState("one-way");
  const [isOriginOpen, setIsOriginOpen] = useState(false);
  const [originQuery, setOriginQuery] = useState("");
  const [origins, setOrigins] = useState([])
  // const [origin, setOrigin] = useState("");

  // Handle TripType
  function handleOpenTripType() {
    return setIsTripTypeOpen((curr) => !curr);
  }
  function handleCloseTripType() {
    return setIsTripTypeOpen(false);
  }
  function handleSetTripType(e) {
    if (e === isTripTypeOpen) {
      setIsTripTypeOpen(false);
    } else {
      setTriptype(e);
      setIsTripTypeOpen(false);
    }
  }
  // Handle TripType //

  // Handle Input Change //
  function handleInputChange(e){
    setOriginQuery(e)
  }
  // Handle Input Change //

  //Handle Origin //
  function handleOpenOrigin() {
    return setIsOriginOpen((curr) => !curr);
  }
  function handleCloseOrigin() {
    return setIsOriginOpen(false);
  }
 
  useEffect(
    function () {
      async function fetchOrigin() {
        const res = await fetch(`https://snapptrip-json-server.vercel.app/api/cities?search=${originQuery}`)
        const data = await res.json()
        setOrigins(data)
        console.log(data)
      }
      fetchOrigin();
      
    },
    [originQuery],
  );
  //Handle Origin //

  return (
    <>
      {/* Mobile Hero Image */}
      <div className="w-full h-39.5 xs:hidden ">
        <img
          src="/assets/backgroud.png"
          alt="jj"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Hero flight Box */}
      <div className="pl-6 pr-6 pt-4 xs:p-0  xl:bg-[url('/assets/backgroud.png')] xl:bg-cover xs:flex xl:items-end xl:pb-18.75 xl:h-149.5">
        <div className=" xs:bg-white xs:w-full  xs:mx-6 xs:rounded-lg xl:h-60 xl:max-w-300 xl:mx-auto">
          <div className="xs:border-b xs:border-[#EBECF2]  xs:pt-3.5 xs:pb-3.5 xl:px-10 ">
            <h1>بلیط هواپیما استانبول</h1>
          </div>
          <div className="pt-6 xs:flex xs:flex-col xs:gap-6 xl:px-10">
            <div className="pb-6 xs:pb-0 md:relative">
              <Button
                onClick={handleOpenTripType}
                className="flex gap-2 items-center text-[#575EFF] border pt-1 rounded-4xl pb-1 pr-3 pl-2 text-[14px] font-medium h-8 max-w-33"
              >
                <span>
                  {tripType === "one-way" ? "یک‌طرفه" : "رفت و برگشت"}
                </span>
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2055_190)">
                      <path
                        d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z"
                        fill="#575EFF"
                        fill-opacity="0.6"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2055_190">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Button>
              {/* TripTypeSelector */}

              {isTripTypeOpen ? (
                <>
                  <div className="shadow-lg bg-white p-4 w-full fixed bottom-0 left-0 z-50 rounded-t-xl md:absolute md:max-w-56 md:top-full md:right-0 md:bg-white md:h-38 md:rounded-xl ">
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">نوع مسیر</span>
                      <span onClick={handleCloseTripType}>x</span>
                    </div>
                    <div className="flex flex-col gap-4">
                      <RadioField
                        id="one-way"
                        label="یک طرفه"
                        name="tripType"
                        value="one-way"
                        tripType={tripType}
                        handleSetTripType={handleSetTripType}
                      />
                      <RadioField
                        id="two-way"
                        label="رفت و برگشت"
                        name="tripType"
                        value="two-way"
                        tripType={tripType}
                        handleSetTripType={handleSetTripType}
                        handleCloseTripType={handleCloseTripType}
                      />
                    </div>
                  </div>
                  <div
                    className="fixed inset-0 z-10 bg-black opacity-30 md:bg-none md:opacity-0"
                    onClick={handleCloseTripType}
                  />
                </>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-4 xs:justify-between xl:flex-row ">
              {/* Choose origin and destination */}
              <div className="relative border border-[#a0a2aa] rounded-lg xl:flex  xl:w-120 xl:h-14 ">
                <span className="absolute top-11.5 right-3 text-[12px] font-normal text-[#040A1F99] bg-white pr-1 pl-1 xl:-top-3 xl:right-63">
                  مقصد
                </span>
                <div className="border-b border-[#a0a2aa] p-4 xl:flex-1 xl:border-none ">
                  <Button onClick={handleOpenOrigin} className="w-full text-right">مبدا</Button>
                  {isOriginOpen ? (
                    <>
                      <LocationSelector handleInputChange={handleInputChange} origins={origins}/>
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
              {/* Trip date */}
              <div className="border border-[#a0a2aa] rounded-lg p-4 xl:w-78 xl:h-14">
                <Button>
                  <span>تاریخ رفت</span>
                </Button>
              </div>
              {/* Number of passengers */}
              <div className="relative border border-[#a0a2aa] rounded-lg p-4 xl:w-46 xl:h-14">
                <span className="absolute -top-3 right-3 text-[12px] font-normal text-[#040A1F99] bg-white pr-1 pl-1">
                  تعداد مسافر
                </span>
                <Button>
                  <span>x مسافر</span>
                </Button>
              </div>
              <Button className="bg-[#ED071A] text-white pt-3 pb-3 pr-4 pl-4 border rounded-lg xl:w-24 xl:h-14">
                <span>جستجو</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
