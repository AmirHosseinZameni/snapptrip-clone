import Logo from "../Logo";
import Dropdown from "./Dropdown";
import SupportAgentIcon from "./SupportAgentIcon";
import PrsonIcon from "./PersonIcon";
import Luggage from "./Luggage";
import Button from "../Button";

export default function Header() {
  return (
    <nav className="pl-4 pr-4  h-16 flex items-center justify-end sm:justify-between xl:max-w-300 xl:mx-auto">
      {/* Right section */}
      <div className="sm:flex sm:gap-4 h-full sm:items-center">
        <Logo />
        <ul className="h-full sm:flex sm:items-center sm:gap-4 sm:text-[14px] sm:font-medium">
          <Dropdown />
          <li className="flex items-center cursor-pointer">
            <a className="hidden sm:block" href="#">
              آژانس ها و شرکت ها
            </a>
          </li>
        </ul>
      </div>
      {/* Left section */}
      <div className="">
        <ul className="flex justify-end items-center gap-2 sm:text-[14px] sm:font-medium sm:gap-4 sm:justify-between   ">
          <li className="hidden sm:block cursor-pointer ">سفر های من</li>
          <li className="cursor-pointer">
            <SupportAgentIcon />
          </li>
          <li>
            <Button className="hidden sm:block sm:gap-2 cursor-pointer bg-[#575EFF] text-white rounded-4xl px-4 py-2">ورود | ثبت نام</Button>
          </li>
          <li className="cursor-pointer">
            <Luggage size="w-6 h-6" />
          </li>
          <li className="cursor-pointer">
            <PrsonIcon size="w-6 h-6" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
