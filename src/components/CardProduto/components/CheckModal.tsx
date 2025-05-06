import ModalProduto from "@/components/ModalProduto";
import { ICardProduto } from "@/types/componentTypes";
interface CkeckModalProps {
  modalOpen: boolean;
  openModalProduto: () => void;
  card: ICardProduto;
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
      {modalOpen && (
        <ModalProduto
          handleClose={openModalProduto}
          isSetOpen={setModalOpen}
          isOpen={modalOpen}
          card={card}
        />
      )}
    </>
  );
};

export default CheckModal;
