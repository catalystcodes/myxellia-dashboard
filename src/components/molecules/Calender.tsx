import type { Ref } from "react";
import AppCalender from "./AppCalender";
import CalenderHeader from "./CalenderHeader";

interface CalenderProps {
  show: boolean;
  close: () => void;
  calendarRef: Ref<HTMLDivElement>;
}

const Calender = ({ show, close }: CalenderProps) => {
  return (
    <div
      className={`flex flex-col bg-[#0D0D0D] fixed top-20 h-[calc(100vh-5rem)] w-[25rem]
      transition-all duration-500 ease-in-out ${
        show ? "right-0" : "-right-[25rem]"
      }`}
    >
      <CalenderHeader onClose={close} />
      <AppCalender close={close} />
    </div>
  );
};

export default Calender;
