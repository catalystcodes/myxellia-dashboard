import Calendar from "react-calendar";
import PrevIcon from "./PrevIcon";
import NextIcon from "./NextIcon";
import { useClickAway } from "@uidotdev/usehooks";

interface AppCalenderProps {
  close: () => void;
}

const AppCalender = ({ close }: AppCalenderProps) => {
  const calendarRef = useClickAway<HTMLDivElement>(() => {
    close();
  });
  return (
    <div ref={calendarRef}>
      <Calendar
        calendarType="gregory"
        className="bg-[#0D0D0D] w-[25rem] flex flex-col items-center gap-y-[1.6rem] px-6 font-semibold text-white uppercase text-[0.5rem] calenderContainer"
        nextLabel={<NextIcon className="cursor-pointer" />}
        prevLabel={<PrevIcon className="cursor-pointer" />}
        next2Label={null}
        prev2Label={null}
        showFixedNumberOfWeeks={true}
        tileClassName={({ date, view }: { date: Date; view: string }) =>
          view === "month" &&
          date.getDate() === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
            ? " tiles"
            : date.getDate() > -1
            ? "flex grow  h-[6rem] w-[3.125rem] border-[0.47px] border-[#242424] pt-[0.3rem] pl-[0.3rem]  font-medium  text-[0.625rem]"
            : view === "month" && date.getDate() === 1
            ? "first-day"
            : null
        }
        tileContent={({ date, view }) =>
          view === "month" &&
          date.getDate() === new Date().getDate() &&
          date.getMonth() === new Date().getMonth() ? (
            <p className="text-white py-[2px] px-[8px] bg-[#2525E6] rounded-[10px] ">
              {new Date().getDate()}
            </p>
          ) : null
        }
      />
    </div>
  );
};

export default AppCalender;
