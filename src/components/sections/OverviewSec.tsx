import { overviewData } from "../../constantData";
import OverviewTemplate from "../molecules/OverviewTemplate";
import SalesOverview from "../molecules/SalesOverview";

const OverviewSec = () => {
  return (
    <div className="px-[4.875rem]">
      <h1 className="text-[1.25rem] text-[#191919] font-semibold mb-4 mt-3">
        Welcome, Ahmed
      </h1>
      <div className="flex items-center gap-x-5 ">
        <div className="flex grow  ">
          <SalesOverview />
        </div>
        <div className="flex flex-col gap-y-13 ">
          {overviewData.map((data, index) => (
            <OverviewTemplate key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewSec;
