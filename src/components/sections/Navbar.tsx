import { useState } from "react";
import { headerData, navIcon } from "../../constantData";
import HeaderCard from "../molecules/HeaderCard";
import SearchArea from "../molecules/SearchArea";
import BudgetModal from "../molecules/BudgetModal";

interface NavbarProps {
  onCalendarClick: () => void;
  btnRef?: React.RefObject<HTMLImageElement>;
}

const Navbar = ({ onCalendarClick, btnRef }: NavbarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (label: (typeof navIcon)[number]["label"]) => {
    if (label == "Budget") {
      handleModalOpen();
    } else if (label === "Calendar") {
      onCalendarClick();
    }
    return;
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border-b-1 border-[#f4f4f5]">
      <div className="bg-[#191919] flex justify-between px-[4.875rem]">
        <img src="/Myxellia logo.svg" alt="logo" />
        <div className="flex items-center gap-x-6 py-5">
          {navIcon.map((icon, index) => (
            <img
              key={index}
              src={icon.icon}
              alt={icon.label}
              className=" cursor-pointer"
              onClick={() => handleClick(icon.label)}
              ref={index === 2 ? btnRef : null}
            />
          ))}
        </div>
      </div>
      <div className="my-3.5 flex items-center gap-x-7.5 px-[4.875rem]">
        <div className="flex items-center gap-x-5 ">
          {headerData.map((data, index) => (
            <HeaderCard {...data} key={index} />
          ))}
        </div>
        <SearchArea />
      </div>
      <div>
        <div>
          <BudgetModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
