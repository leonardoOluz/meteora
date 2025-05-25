import Botao from "@/components/Botao";
import Header from "@/components/Header";
import Typography from "@/components/Typography";
import { thema } from "@/styles/thema";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

const DivHeaderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
interface ModalProductHeaderProps {
  handleClose: () => void;
}
const ModalProductHeader = ({ handleClose }: ModalProductHeaderProps) => {
  return (
    <Header classeHeader="headerModal">
      <DivHeaderModal>
        <FaRegCheckCircle color={thema.colorsPrimary.verde} size={32} />
        <Typography elementoHtml="h2" classNameTypograph="typographyModal">
          Confira detalhes sobre o produto
        </Typography>
      </DivHeaderModal>
      <Botao
        aria-label="Fechar modal"
        classNameBtn="btnUnset"
        type="button"
        onClick={handleClose}
        tabIndex={0}
      >
        <IoIosClose color="#6C757D" size={32} />
      </Botao>
    </Header>
  );
};

export default ModalProductHeader;
