interface CalenderHeaderProps {
  onClose: () => void;
}
const CalenderHeader = ({ onClose }: CalenderHeaderProps) => {
  return (
    <div className="bg-[#171717] py-4 flex items-center px-6 justify-between mb-4">
      <div className="flex items-center gap-x-2">
        <img src="/src/assets/goBack.svg" alt="" />
        <h2 className="text-white font-semibold">Calendar</h2>
      </div>
      <img
        src="/src/assets/closeIcon.svg"
        alt=""
        onClick={onClose}
        className="cursor-pointer"
      />
    </div>
  );
};

export default CalenderHeader;
