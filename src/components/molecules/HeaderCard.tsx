interface HeaderCardProps {
  icon: string;
  label: string;
  backgroundColor: string;
}

const HeaderCard = ({ icon, label, backgroundColor }: HeaderCardProps) => {
  return (
    <div
      className="flex items-center justify-center gap-x-2 w-[10.625rem] h-[2.375rem] rounded-lg"
      style={{ backgroundColor: backgroundColor }}
    >
      <img src={icon} alt={label} />
      <h2 className="text-[#3D3D3D] text-[0.875rem] font-normal">{label}</h2>
    </div>
  );
};

export default HeaderCard;
