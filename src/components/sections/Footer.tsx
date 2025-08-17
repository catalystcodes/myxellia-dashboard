import { footerData } from "../../constantData";
import FooterCard from "../molecules/FooterCard";

const Footer = () => {
  return (
    <div className="flex mt-5 gap-x-4 items-center px-[4.875rem] relative ">
      {footerData.map((item, index) => (
        <FooterCard key={index} {...item} />
      ))}
      <img
        src="/src/assets/msgIcon.svg"
        alt=""
        className="absolute top-8 right-17"
      />
    </div>
  );
};

export default Footer;
