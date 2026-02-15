import DropIcon from "../DropIcon";
import Button from "../Button";
import DropDownBox from "./dropDown/DropDownBox";
export default function Dropdown() {
  return (
    <li className="hidden h-full group relative md:flex  md:items-center  " >
      <Button href="#" className="flex sm:gap-2  items-center cursor-pointer">خدمات مسافرتی {<DropIcon/>}</Button>

      <DropDownBox/>
      {/* <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul> */}
    </li>
  );
}
