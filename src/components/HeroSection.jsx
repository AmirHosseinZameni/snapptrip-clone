import { useState } from "react";
import Button from "./Button";
import Origin from "./HeroSection/Origin";
import TripTypeButton from "./HeroSection/TripTypeButton";

export default function HeroSection() {
  const [tripType, setTriptype] = useState("one-way");
  const[origin, setOrigin] = useState(null)




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
            <TripTypeButton tripType={tripType} setTriptype={setTriptype} />
            <div className="flex flex-col gap-4 xs:justify-between xl:flex-row ">
              {/* Choose origin and destination */}
              <Origin setOrigin={setOrigin} origin={origin} />
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
