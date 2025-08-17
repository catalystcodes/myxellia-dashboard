import { useState } from "react";
import { headerData, navIcon } from "../../constantData";
import HeaderCard from "../molecules/HeaderCard";
import SearchArea from "../molecules/SearchArea";
import BudgetModal from "../molecules/BudgetModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border-b-1 border-[#f4f4f5]">
      <div className="bg-[#191919] flex justify-between px-[4.875rem]">
        <img src="/src/assets/Myxellia logo.svg" alt="logo" />
        <div className="flex items-center gap-x-6 py-5">
          {navIcon.map((icon, index) => (
            <img
              key={index}
              src={icon.icon}
              alt={icon.label}
              className=" cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="my-3.5 flex items-center justify-between px-[4.875rem]">
        <div className="flex items-center gap-x-5 ">
          {headerData.map((data, index) => (
            <HeaderCard {...data} key={index} />
          ))}
        </div>
        <SearchArea />
      </div>
      <div>
        <button onClick={handleModalOpen}>Open Modal</button>
        <div>
          <BudgetModal isOpen={isModalOpen} onRequestClose={handleModalClose} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
