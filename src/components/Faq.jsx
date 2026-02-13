import { useState } from "react";
import DropIcon from "./DropIcon";

export default function Faq({ question, answer, id }) {
  const [isOpen, setIsOpen] = useState("");

  function handleIsOpen(id) {
    id === isOpen ? setIsOpen("") : setIsOpen(id);
  }
  return (
    <div className="cursor-pointer w-full  py-3 px-4 flex flex-col gap-2 justify-between items-center ring-1 ring-[#EBECF2] rounded-sm">
      <div
        className="flex justify-between w-full"
        onClick={() => handleIsOpen(id)}
      >
        <span className="font-medium text-sm">{question}</span>
        <DropIcon color="#575EFF" className={isOpen === id ? "rotate-180" : ""}/>
      </div>

      {isOpen === id && (
        <span className="w-full font-regular text-sm text-right">{answer}</span>
      )}
    </div>
  );
}
