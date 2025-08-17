interface SalesOverviewCardProps {
  percentage: number;
  icon: string;
  number: string;
  text: string;
  numberColor?: string;
  percentageColor?: string;
}

const SalesOverviewCard = ({
  percentage,
  icon,
  number,
  text,
  numberColor = "#000000",
  percentageColor = "#000000",
}: SalesOverviewCardProps) => {
  return (
    <div className="w-[11.8125rem] h-[4.5625rem] border-1 border-[#E4E4E4] rounded-xl flex flex-col justify-center px-3.5 ">
      <h1
        className="font-semibold text-[1.1875rem] mb-2"
        style={{ color: numberColor }}
      >
        {number}
      </h1>
      <span className="flex items-center gap-x-2">
        <p className="text-[#3D3D3D] text-[0.625rem]">{text}</p>
        <span className="flex items-center gap-x-1">
          <img src={icon} alt="" />
          <p className="text-[0.625rem]" style={{ color: percentageColor }}>
            {percentage}%
          </p>
        </span>
      </span>
    </div>
  );
};

export default SalesOverviewCard;
