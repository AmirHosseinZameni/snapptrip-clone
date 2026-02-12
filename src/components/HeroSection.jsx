import Button from "./Button";
import SwapVert from "./icons/SwapVert";
export default function HeroSection() {
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
      <div className="pl-6 pr-6 pt-4 xs:p-0 xs:h-100 sm:bg-[url('/assets/backgroud.png')] xs:bg-cover xs:flex xs:items-end xs:mt-25">
        <div className=" xs:bg-white xs:w-full  xs:mx-6 xs:rounded-lg">
          <div className="xs:border-b xs:border-[#EBECF2]  xs:pt-3.5 xs:pb-3.5 ">
            <h1>بلیط هواپیما X</h1>
          </div>
          <div className="pt-6   xs:flex xs:flex-col xs:gap-6">
            <div className="pb-6 xs:pb-0">
              <Button className="flex gap-2 items-center text-[#575EFF] border pt-1 rounded-4xl pb-1 pr-3 pl-2 text-[14px] font-medium h-8 max-w-23">
                <span>یک‌طرفه</span>
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
            </div>
            <div className="flex flex-col gap-4 xs:justify-between ">
              {/* Choose origin and destination */}
              <div className="relative border border-[#a0a2aa] rounded-lg sm:flex-col sm:gap-6   sm:h-14 ">
                <span className="absolute top-11.5 right-3 text-[12px] font-normal text-[#040A1F99] bg-white pr-1 pl-1 sm:-top-3 sm:right-66">مقصد</span>
                <div className="border-b border-[#a0a2aa] p-4 sm:border-none sm:w-full ">
                  <Button>مبدا</Button>
                </div>

                <Button className="absolute left-5 top-11 bg-white sm:top-4 sm:left-57 sm:rotate-90">
                  <SwapVert />
                </Button>

                <div className=" p-4 sm:w-full">
                  <Button>مقصد</Button>
                </div>
              </div>
              {/* Trip date */}
              <div className="border border-[#a0a2aa] rounded-lg p-4 sm:w-78 sm:h-14">
                <Button>
                  <span>تاریخ رفت</span>
                </Button>
              </div>
              {/* Number of passengers */}
              <div className="relative border border-[#a0a2aa] rounded-lg p-4 sm:w-46 sm:h-14">
                <span className="absolute -top-3 right-3 text-[12px] font-normal text-[#040A1F99] bg-white pr-1 pl-1">تعداد مسافر</span>
                <Button>
                  <span>x مسافر</span>
                </Button>
              </div>
              <Button className="bg-[#ED071A] text-white pt-3 pb-3 pr-4 pl-4 border rounded-lg sm:w-24 sm:h-14">
                <span>جستجو</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
