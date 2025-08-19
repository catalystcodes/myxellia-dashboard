interface HeaderCardProps {
  icon: string;
  label: string;
  backgroundColor: string;
}

const HeaderCard = ({ icon, label, backgroundColor }: HeaderCardProps) => {
  const isDashboard = label === "Dashboard";

  return (
    <div
      className={`flex items-center justify-center gap-x-2 w-[10.625rem] h-[2.375rem] rounded-lg transition-all duration-200 hover:bg-[#F5F5F5]  ${
        isDashboard ? "bg-[#F5F5F5]" : ""
      } cursor-pointer`}
      style={{ backgroundColor: !isDashboard ? backgroundColor : undefined }}
    >
      <img src={icon} alt={label} />
      <h2
        className={`text-[#3D3D3D] text-[0.875rem] transition-all duration-200 hover:font-semibold ${
          isDashboard ? "font-semibold" : "font-normal"
        }`}
      >
        {label}
      </h2>
    </div>
  );
};

export default HeaderCard;
