import Logo from "../Logo";
import Dropdown from "./Dropdown";
import SupportAgentIcon from "./SupportAgentIcon";
import PrsonIcon from "./PersonIcon";
import Luggage from "./Luggage";
import Button from "../Button";

export default function Header() {
  return (
    <nav className="pl-4 pr-4 pt-3 pb-3 h-16 flex items-center justify-end sm:justify-between">
      {/* Right section */}
      <div className="sm:flex sm:gap-4">
        <Logo />
        <ul className="sm:flex sm:gap-4 sm:text-[14px] sm:font-medium">
          <Dropdown />
          <li className="flex items-center">
            <a className="hidden sm:block" href="#">
              آژانس ها و شرکت ها
            </a>
          </li>
        </ul>
      </div>
      {/* Left section */}
      <div className="">
        <ul className="flex justify-end gap-2 sm:text-[14px] sm:font-medium sm:gap-4 sm:justify-between   ">
          <li className="hidden sm:block ">سفر های من</li>
          <li>
            <SupportAgentIcon />
          </li>
          <li>
            <Button className="hidden sm:block sm:gap-2">ورود | ثبت نام</Button>
          </li>
          <li>
            <Luggage size="w-6 h-6" />
          </li>
          <li>
            <PrsonIcon size="w-6 h-6" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
