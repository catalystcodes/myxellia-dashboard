interface ModalCardProps {
  title: string;
  desc: string;
  icon: string;
}

const ModalCard = ({ title, desc, icon }: ModalCardProps) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={icon} alt={title} />
      <div className="flex flex-col gap-y-1">
        <h3 className="text-[#191919] text-[1rem] font-semibold">{title}</h3>
        <p className="text-[#606060] text-[0.75rem]">{desc}</p>
      </div>
    </div>
  );
};

export default ModalCard;
