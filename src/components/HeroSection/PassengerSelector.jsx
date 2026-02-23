import Button from "../Button";
export default function PassengerSelector() {
  return (
    <>
      <div>
        <div className="fixed top-0 z-20 left-0 w-screen h-screen bg-white p-6 flex flex-col justify-between gap-4 md:absolute md:size-auto md:w-84">
          <div className="flex gap-2">
            <Button className="md:hidden">
              <img src="assets/back-arrow.svg" alt="back" className="w-6 h-6" />
            </Button>
            <p className="font-medium">تعداد مسافر</p>
          </div>
          {/* Body */}
          <div className="flex flex-col gap-4">
            {/* 1 */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-[#040a1fde] text-sm">تعداد بزرگسال</span>
                <span className="text-[#040a1f99] text-sm">12 سال به بالا</span>
              </div>
              <div className="flex gap-3 items-center ">
                <Button className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer">
                  +
                </Button>
                <span className="flex items-center justify-center w-6 h-6 ">
                  1
                </span>
                <Button className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer">
                  -
                </Button>
              </div>
            </div>
            {/* 2 */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-[#040a1fde] text-sm">تعداد کودک</span>
                <span className="text-[#040a1f99] text-sm">2 تا 12 سال</span>
              </div>
              <div className="flex gap-3 items-center ">
                <Button className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer">
                  +
                </Button>
                <span className="flex items-center justify-center w-6 h-6 ">
                  1
                </span>
                <Button className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer">
                  -
                </Button>
              </div>
            </div>
            {/* 3 */}
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-[#040a1fde] text-sm">تعداد نوزاد</span>
                <span className="text-[#040a1f99] text-sm">0 تا 2 سال</span>
              </div>
              <div className="flex gap-3 items-center ">
                <Button className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer">
                  +
                </Button>
                <span className="flex items-center justify-center w-6 h-6">
                  1
                </span>
                <Button className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer">
                  -
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Button className="bg-[#575eff] text-white w-full p-3 rounded-md cursor-pointer">تایید</Button>
          </div>
        </div>
      </div>
    </>
  );
}
