import AirLineLogoIcon from "./icons/AirLineLogoIcon";

export default function Table() {
  return (
    <div className="shrink-0 w-148 mx-6 mt-9 rounded-xl overflow-hidden">
      <table className="table-fixed border-collapse w-full font-regular text-[14px]">
        <thead className="font-bold text-[14px] bg-[#F8F9FD] text-right">
          <tr className="h-14">
            <th className="py-3.5 pr-4 ">نام ایرلاین</th>
            <th className="py-3.5 pr-4 ">کلاس پروازی</th>
            <th className="py-3.5 pr-4 ">بار کابین</th>
            <th className="py-3.5 pr-4 ">بار مجاز</th>
            <th className="py-3.5 pr-4 ">ابعاد بار</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-14 ">
            <td className="border border-[#EBECF2]">
              <div className="flex items-center gap-4 w-full p-2">
                <AirLineLogoIcon className="w-6 h-6" />
                <span className="max-w-15">Turkish Airlines</span>
              </div>
            </td>
            <td className="border border-[#EBECF2] pr-2 ">اکونومی / بیزنس</td>
            <td className="border border-[#EBECF2] pr-2 ">1 * 7 kg</td>
            <td className="border border-[#EBECF2] pr-2 ">اکونومی: ۱ × ۲۳ kg / بیزینس: ۱ × ۳۲ kg</td>
            <td className="border border-[#EBECF2] pr-2 ">بار کابین ≤۵۵×۴۰×۲۳ cm</td>
          </tr>
          <tr className="h-14">
            <td className="border border-[#EBECF2]">
              <div className="flex items-center gap-4 w-full p-2">
                <AirLineLogoIcon className="w-6 h-6" />
                <span className="">Kish Air</span>
              </div>
            </td>
            <td className="border border-[#EBECF2] pr-2">اکونومی</td>
            <td className="border border-[#EBECF2] pr-2">1 * 7 kg</td>
            <td className="border border-[#EBECF2] pr-2">اکونومی: ۱ × ۲۳ kg </td>
            <td className="border border-[#EBECF2] pr-2">بار کابین ≤۵۵×۴۰×۲۳ cm</td>
          </tr>
          <tr className="h-14 ">
            <td className="border border-[#EBECF2]">
              <div className="flex items-center gap-4 w-full p-2">
                <AirLineLogoIcon className="w-6 h-6" />
                <span className="">Iran Air</span>
              </div>
            </td>
            <td className="border border-[#EBECF2] pr-2">اکونومی / بیزنس</td>
            <td className="border border-[#EBECF2] pr-2">1 * 7 kg</td>
            <td className="border border-[#EBECF2] pr-2">اکونومی: ۱ × ۲۳ kg / بیزینس: ۱ × ۳۲ kg</td>
            <td className="border border-[#EBECF2] pr-2">بار کابین ≤۵۵×۴۰×۲۳ cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
