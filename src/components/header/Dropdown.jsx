import DropIcon from "../DropIcon";
import Button from "../Button";
export default function Dropdown() {
  return (
    <li className="hidden sm:flex  sm:items-center" >
      <Button href="#" className="flex sm:gap-2">خدمات مسافرتی {<DropIcon/>}</Button>
      {/* <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul> */}
    </li>
  );
}
