import ModalProduto from "@/components/ModalProduto";
import { ProductCard } from "@/types/componentTypes";
import { createPortal } from "react-dom";
interface CkeckModalProps {
  modalOpen: boolean;
  openModalProduto: () => void;
  card: ProductCard;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CheckModal = ({
  card,
  modalOpen,
  openModalProduto,
  setModalOpen,
}: CkeckModalProps) => {
  return (
    <>
      {modalOpen &&
        createPortal(
          <ModalProduto
            handleClose={openModalProduto}
            isSetOpen={setModalOpen}
            isOpen={modalOpen}
            card={card}
          />,
          document.getElementById("modal-root") as HTMLElement
        )}
    </>
  );
};

export default CheckModal;
