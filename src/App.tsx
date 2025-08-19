import { useRef, useState } from "react";
import Calender from "./components/molecules/Calender";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import OverviewSec from "./components/sections/OverviewSec";
import { useClickAway } from "@uidotdev/usehooks";

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const buttonRef = useRef<HTMLImageElement>(null);

  const calendarRef = useClickAway<HTMLDivElement>((event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      return;
    }
    setShowCalendar(false);
  });

  return (
    <div>
      <Navbar onCalendarClick={() => setShowCalendar((prev) => !prev)} />
      <OverviewSec />
      <Footer />
      <Calender
        calendarRef={calendarRef}
        show={showCalendar}
        close={() => setShowCalendar(false)}
      />
    </div>
  );
};

export default App;
