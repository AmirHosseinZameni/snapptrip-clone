import { useState } from "react";
import RadioField from "../RadioField";
import Button from "../Button";

export default function TripTypeButton({ tripType, setTriptype }) {
  const [isTripTypeOpen, setIsTripTypeOpen] = useState(false);
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
  return (
    <div className="pb-6 xs:pb-0 md:relative">
      <Button
        onClick={handleOpenTripType}
        className="flex gap-2 items-center text-[#575EFF] border pt-1 rounded-4xl pb-1 pr-3 pl-2 text-[14px] font-medium h-8 max-w-33 cursor-pointer"
      >
        <span>{tripType === "one-way" ? "یک‌طرفه" : "رفت و برگشت"}</span>
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
        <div>
          <div className="shadow-lg bg-white p-4 w-full fixed bottom-0 left-0 z-50 rounded-t-xl md:absolute md:max-w-56 md:top-full md:right-0 md:bg-white md:h-38 md:rounded-xl ">
            <div className="flex justify-between mb-4">
              <span className="font-medium">نوع مسیر</span>
              <span onClick={handleCloseTripType} className="cursor-pointer">x</span>
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
