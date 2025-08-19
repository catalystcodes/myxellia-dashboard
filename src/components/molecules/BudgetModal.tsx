import Modal from "react-modal";
import { modalContent } from "../../constantData";
import ModalCard from "./ModalCard";

interface BudgetModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const BudgetModal: React.FC<BudgetModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      background: "white",
      border: "none",
      borderRadius: "16px",
      padding: "0",
      width: "27.375rem",
      height: "fit-content",
      margin: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={onRequestClose}
    >
      <div
        style={{
          backgroundImage: "url('/budgetImage.png')",
          height: "13.3125rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/calculator.svg" alt="" />
      </div>
      <div className="flex flex-col gap-y-6 px-12 py-6">
        {modalContent.map((item, index) => (
          <ModalCard key={index} {...item} />
        ))}
        <button className="text-[#FFFFFF] text-[1rem] font-medium py-3 bg-[#18181B] rounded-3xl">
          Create Budget
        </button>
      </div>
    </Modal>
  );
};
export default BudgetModal;
