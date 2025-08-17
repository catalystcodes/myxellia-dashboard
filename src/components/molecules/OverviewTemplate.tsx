interface AdditionalItem {
  label: string;
  value: string;
}

interface OverviewTemplateProps {
  title: string;
  iconSrc: string;
  totalValue: string;
  additionalItems?: AdditionalItem[];
}

const OverviewTemplate: React.FC<OverviewTemplateProps> = ({
  title,
  iconSrc,
  totalValue,
  additionalItems = [],
}) => {
  return (
    <div className="rounded-2xl border-1 border-[#E4E4E4]  w-[25.4375rem] ">
      <div className="bg-[#F9FAFB] flex p-4 justify-between rounded-tl-2xl rounded-tr-2xl">
        <span className="flex items-center gap-x-2.5">
          <img src={iconSrc} alt="" />
          <h2 className="text-[#292929] text-[0.875rem] font-medium">
            {title}
          </h2>
        </span>
        <span className="flex items-center gap-x-2">
          <p className="text-[#4545FE] text-[0.75rem]"> View all</p>
          <img src="/src/assets/arrowRight.svg" alt="" />
        </span>
      </div>
      <div className="flex justify-between p-4">
        <div>
          <h2 className="text-[#525252] text-[0.875rem] font-medium">Total</h2>
          <p className="text-[#141414] text-[1.5rem] font-semibold mt-2">
            {totalValue}
          </p>
        </div>

        {additionalItems.map((item, index) => (
          <div key={index}>
            <h2 className="text-[#525252] text-[0.875rem] font-medium">
              {item.label}
            </h2>
            <p className="text-[#141414] text-[1.5rem] font-semibold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewTemplate;
