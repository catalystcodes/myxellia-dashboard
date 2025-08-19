import { salesOverviewData } from "../../constantData";
import MonthlyBarChart from "./MonthlyBarChart";
import SalesOverviewCard from "./SalesOverviewCard";

const SalesOverview = () => {
  return (
    <div className=" border-1 border-[#E4E4E4] w-[53.5rem] rounded-2xl flex grow flex-col ">
      <div className="flex justify-between items-center px-5">
        <div className=" mt-4">
          <h1 className="font-semibold text-[#191919] text-[1.25rem]">
            Sales Overview
          </h1>
          <p className="text-[#606060] text-[0.75rem] mt-3">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <div>
          <button className="py-4 px-9 rounded-[4.5rem] border-1 border-[#D6D6D6] text-[#191919] text-[0.75rem]">
            View Transactions
          </button>
        </div>
      </div>
      <div className="flex justify-end px-5 border-b-1 border-[#E4E4E4] pb-3">
        <h2 className="py-2 px-5 rounded-lg text-[0.875rem]">1 Week</h2>
        <h2 className="py-2 px-5 rounded-lg text-[0.875rem]">1 Month</h2>
        <h2 className="py-2 px-5 rounded-lg bg-[#F5F5F5] text-[0.875rem]">
          1 Year
        </h2>
      </div>
      <div className="flex items-center h-full ">
        <div className="w-[63%] pt-4 flex  px-2.5 ">
          <img src="/leftIcon.svg" alt="" />
          <MonthlyBarChart />
          <img src="/rightIcon.svg" alt="" />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-5 w-[37%]">
          {salesOverviewData.map((item, index) => (
            <SalesOverviewCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
