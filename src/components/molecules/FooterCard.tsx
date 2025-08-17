interface FooterCardProps {
  text: string;
  title: string;
  progression: string;
  backgroundImg: string;
}

const FooterCard = ({
  text,
  title,
  progression,
  backgroundImg,
}: FooterCardProps) => {
  return (
    <div
      className="h-[17.875rem] w-[26.125rem] pl-4 pb-4 flex flex-col items-start justify-end grow rounded-xl"
      style={{
        backgroundImage: `url('${backgroundImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white text-sm mb-3">{text}</p>
      <img src={progression} alt="Progress indicator" className="mx-auto" />
    </div>
  );
};

export default FooterCard;
