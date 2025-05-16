import ModalProduto from "@/components/ModalProduto";
import { ICardProduto } from "@/types/componentTypes";
import { createPortal } from "react-dom";
interface CkeckModalProps {
  modalOpen: boolean;
  openModalProduto: () => void;
  card: ICardProduto;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  valueCatPromo?: number;
}
const CheckModal = ({
  card,
  modalOpen,
  openModalProduto,
  setModalOpen,
  valueCatPromo
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
            valueCatPromo={valueCatPromo}
          />,
          document.getElementById("modal-root") as HTMLElement
        )}
    </>
  );
};

export default CheckModal;
