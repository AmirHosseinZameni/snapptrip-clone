import React, { useState, useEffect } from "react";
import { Calendar } from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Button from "../Button";
import "react-multi-date-picker/styles/layouts/prime.css";
// import persian_en from "react-date-object/locales/persian_en";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const today = new Date();

export default function Example({ range, setRange }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [tempRange, setTempRange] = useState(range);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // تبدیل تاریخ به فرمت ذخیره‌سازی
  const formatDateForStorage = (date) => {
    if (!date) return null;
    // تبدیل به تاریخ میلادی و ذخیره به صورت تایم‌استمپ یا رشته
    return {
      gregorian: date.toDate(), // تاریخ میلادی
      persian: date.format(), // تاریخ شمسی به صورت رشته
      timestamp: date.toDate().getTime(), // تایم‌استمپ برای مقایسه
    };
  };

  // تبدیل آرایه تاریخ به فرمت ذخیره‌سازی
  const formatRangeForStorage = (newRange) => {
    if (!newRange) return null;
    if (Array.isArray(newRange)) {
      return newRange.map((date) => formatDateForStorage(date));
    }
    return formatDateForStorage(newRange);
  };

  // تبدیل تاریخ ذخیره شده به فرمت تقویم
  const parseDateFromStorage = (storedDate) => {
    if (!storedDate) return null;
    // اگه storedDate آبجکت با خاصیت timestamp باشه
    if (storedDate.timestamp) {
      return new Date(storedDate.timestamp);
    }
    return storedDate;
  };

  // تبدیل رنج ذخیره شده به فرمت تقویم
  const parseRangeForCalendar = () => {
    if (!range) return null;
    if (Array.isArray(range)) {
      return range.map((date) => parseDateFromStorage(date));
    }
    return parseDateFromStorage(range);
  };

  // باز کردن تقویم
  const openCalendar = () => {
    setShowCalendar(true);
    setTempRange(parseRangeForCalendar()); // تبدیل state به فرمت تقویم
    if (isMobile) {
      document.body.style.overflow = "hidden";
    }
  };

  // بستن تقویم
  const closeCalendar = () => {
    setShowCalendar(false);
    if (isMobile) {
      document.body.style.overflow = "auto";
    }
  };

  // تایید انتخاب در موبایل
  const handleConfirm = () => {
    setRange(formatRangeForStorage(tempRange)); // ذخیره با فرمت مناسب
    closeCalendar();
  };
  // تایید انتخاب در دسکتاپ
  const handleDesktopConfirm = () => {
    setRange(formatRangeForStorage(tempRange));
    closeCalendar();
  };

  // انصراف در دسکتاپ
  const handleDesktopCancel = () => {
    closeCalendar();
  };

  // نمایش متن تاریخ انتخاب شده
  const getDateText = () => {
    if (!range) return "تاریخ رفت و برگشت";

    if (Array.isArray(range) && range.length === 2) {
      // اگه range به فرمت ذخیره‌سازی ما باشه
      if (range[0]?.persian && range[1]?.persian) {
        return `${range[0].persian} - ${range[1].persian}`;
      }
      // اگه range به فرمت پیش‌فرض باشه
      return `${range[0]?.format?.() || "..."} - ${range[1]?.format?.() || "..."}`;
    }

    return "تاریخ رفت و برگشت";
  };

  // هندل تغییر در حالت دسکتاپ
  const handleDesktopChange = (newRange) => {
    setTempRange(newRange); // فقط tempRange
  };

  return (
    <>
      {/* دکمه باز کردن تقویم */}
      <div onClick={openCalendar} className="cursor-pointer">
        <Button>
          <span>{getDateText()}</span>
        </Button>
      </div>

      {/* شرط نمایش تقویم */}
      {showCalendar && (
        <>
          {isMobile ? (
            // حالت موبایل: مودال تمام صفحه
            <div className="fixed inset-0 z-50 flex flex-col items-center bg-white">
              {/* هدر مودال */}
              <div className="flex w-full justify-between items-center p-4 border-b">
                <button
                  onClick={closeCalendar}
                  className="text-gray-600 text-lg"
                >
                  ✕
                </button>
                <h2 className="text-lg font-bold">انتخاب تاریخ</h2>
                <button
                  onClick={handleConfirm}
                  className="text-blue-600 font-medium"
                >
                  تایید
                </button>
              </div>

              {/* محتوای مودال - تقویم */}
              <div className="flex-1 overflow-y-auto  p-4 ">
                <Calendar
                  className="border-none! shadow-none! w-full"
                  plugins={[weekends()]}
                  weekDays={weekDays}
                  calendar={persian}
                  locale={persian_fa}
                  numberOfMonths={1}
                  range
                  value={tempRange}
                  onChange={setTempRange}
                  mapDays={({ date }) => {
                    const jsDate = date.toDate();
                    if (jsDate < today) {
                      return { disabled: true, style: { color: "#ccc" } };
                    }
                  }}
                />
              </div>

              {/* فوتر مودال با دکمه تایید */}
              <div className="p-4 border-t w-full">
                <button
                  onClick={handleConfirm}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                >
                  تایید تاریخ
                </button>
              </div>
            </div>
          ) : (
            // حالت دسکتاپ: ابسلوت
            <div className="absolute -top-2 left-0 p-3 rounded-lg shadow-2xl flex flex-col items-center w-136 bg-white z-50">
              <div className="p-1 w-full">
                <Calendar
                  className="border-none! shadow-none!"
                  plugins={[weekends()]}
                  weekDays={weekDays}
                  calendar={persian}
                  locale={persian_fa}
                  numberOfMonths={2}
                  range
                  value={tempRange}
                  onChange={handleDesktopChange}
                  mapDays={({ date }) => {
                    const jsDate = date.toDate();
                    if (jsDate < today) {
                      return { disabled: true, style: { color: "#ccc" } };
                    }
                  }}
                />
              </div>
              {/* دکمه‌های تایید و انصراف */}
              <div className="flex gap-3 w-full p-3 border-t">
                <button
                  onClick={handleDesktopConfirm}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  تایید
                </button>
                <button
                  onClick={handleDesktopCancel}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  انصراف
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
