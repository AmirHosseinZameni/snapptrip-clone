import { useEffect, useState } from "react";
import Button from "../Button";
export default function PassengerSelector({ setPassengers }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newBorn, setNewBorn] = useState(0);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(1);
  const [all, setAll] = useState(1);

  function handleSubmit() {
    setPassengers({ adults: adult, childs: child, newBorns: newBorn });
    handleIsOpen();
  }

  function handleIsOpen() {
    return setIsOpen((curr) => !curr);
  }

  // Handle All
  useEffect(() => {
    setAll(newBorn + child + adult);
  }, [newBorn, child, adult]);

  // Handle Adult
  function handleIncreaseAdult() {
    setAdult((curr) => (curr < 9 && all < 9 ? curr + 1 : curr));
  }

  function handleDecreaseAdult() {
    setAdult((curr) => (curr > 1 ? curr - 1 : curr));
  }

  // Handle Child
  function handleIncreaseChild() {
    // حداکثر کودک = (adult * 3) - newBorn
    // چون هر نوزاد یک ظرفیت از کودک را اشغال می‌کند
    const maxChild = adult * 3 - newBorn;

    if (child + 1 <= maxChild && all < 9) {
      setChild((curr) => curr + 1);
    }
  }

  function handleDecreaseChild() {
    setChild((curr) => (curr > 0 ? curr - 1 : 0));
  }

  // Handle NewBorn
  function handleIncreaseNewBorn() {
    // محدودیت 1: حداکثر ۱ نوزاد به ازای هر بزرگسال
    const maxNewBorn = adult;

    // محدودیت 2: هر نوزاد یک ظرفیت از (adult * 3) را اشغال می‌کند
    // یعنی با اضافه کردن نوزاد جدید، باید مطمئن شویم کودکان فعلی از ظرفیت جدید بیشتر نباشند
    const maxChildAfterAdd = adult * 3 - (newBorn + 1);

    if (newBorn + 1 <= maxNewBorn && child <= maxChildAfterAdd && all < 9) {
      setNewBorn((curr) => curr + 1);
    }
  }

  function handleDecreaseNewBorn() {
    setNewBorn((curr) => (curr > 0 ? curr - 1 : 0));
  }

  return (
    <>
      <Button onClick={handleIsOpen} className="w-full h-full cursor-pointer">
        {all} <span>مسافر</span>
      </Button>
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 z-10 bg-black opacity-30 md:bg-none md:opacity-0"
            onClick={handleIsOpen}
          />
          <div className="fixed top-0 z-20 left-0 w-screen h-screen bg-white p-6 flex flex-col justify-between gap-4 md:absolute md:size-auto md:w-84">
            <div className="flex gap-2">
              <Button className="md:hidden">
                <img
                  src="assets/back-arrow.svg"
                  alt="back"
                  className="w-6 h-6"
                />
              </Button>
              <p className="font-medium">تعداد مسافر</p>
            </div>
            {/* Body */}
            <div className="flex flex-col gap-4">
              {/* 1 */}
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-[#040a1fde] text-sm">
                    تعداد بزرگسال
                  </span>
                  <span className="text-[#040a1f99] text-sm">
                    12 سال به بالا
                  </span>
                </div>
                <div className="flex gap-3 items-center ">
                  <Button
                    onClick={handleIncreaseAdult}
                    className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer"
                  >
                    +
                  </Button>
                  <span className="flex items-center justify-center w-6 h-6 ">
                    {adult}
                  </span>
                  <Button
                    onClick={handleDecreaseAdult}
                    className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer"
                  >
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
                  <Button
                    onClick={handleIncreaseChild}
                    className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer"
                  >
                    +
                  </Button>
                  <span className="flex items-center justify-center w-6 h-6 ">
                    {child}
                  </span>
                  <Button
                    onClick={handleDecreaseChild}
                    className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer"
                  >
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
                  <Button
                    onClick={handleIncreaseNewBorn}
                    className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer"
                  >
                    +
                  </Button>
                  <span className="flex items-center justify-center w-6 h-6">
                    {newBorn}
                  </span>
                  <Button
                    onClick={handleDecreaseNewBorn}
                    className="text-[#575eff] border-2 border-[#575eff] rounded-lg size-10 cursor-pointer"
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Button
                onClick={handleSubmit}
                className="bg-[#575eff] text-white w-full p-3 rounded-md cursor-pointer"
              >
                تایید
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
