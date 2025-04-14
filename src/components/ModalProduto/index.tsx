import Header from "../Header";
import Typography from "../Typography";
import {
  DialogModal,
  DivHeaderModal,
  DivModal,
  DivDescricaoProduto,
  DivProdutoModal,
  FieldsetStyle,
  DivPrecoProdutod,
  SpanPreco,
  LegendStyle,
  DivRadio,
  ContainerModal,
} from "./styles";
import { FaRegCheckCircle } from "react-icons/fa";
import { thema } from "@/styles/thema";
import Botao from "../Botao";
import { IoIosClose } from "react-icons/io";
import Form from "../Form";
import Photo from "../Photo";
import RadioSelect from "./RadioSelect";
interface IProps {
  handleClose: () => void;
  isOpen: boolean;
}

const ModalProduto = ({ handleClose, isOpen }: IProps) => {
  return (
    <DialogModal open={isOpen} >
      <DivModal>
        <Header classeHeader="cabecalhoModal">
          <DivHeaderModal>
            <FaRegCheckCircle color={thema.colorsPrimary.verde} size={32} />
            <Typography elementoHtml="h2" classNameTypograph="typographyModal">
              Confira detalhes sobre o produto
            </Typography>
          </DivHeaderModal>
          <Botao
            classNameBtn="btnTerciario"
            tipo="reset"
            handleClick={handleClose}
          >
            <IoIosClose color="#6C757D" size={32} />
          </Botao>
        </Header>
        <DivProdutoModal>
          <Photo
            photo="assets/mobile/cards/Bolsa1.png"
            alt="teste"
            classeImg="imgProdutoCard"
          />
          <ContainerModal>
            <DivDescricaoProduto>
              <Typography
                elementoHtml="h2"
                classNameTypograph="basicParagraphBold"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                Jaqueta Jeans
              </Typography>
              <Typography
                classNameTypograph="basicParagraphSmall"
                elementoHtml="p"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                Modelo unissex oversized com gola de camurça. Atemporal e
                autêntica!
              </Typography>
              <DivPrecoProdutod>
                <SpanPreco>R$ 75.00</SpanPreco>
                <Typography
                  elementoHtml="p"
                  classNameTypograph="basicParagraphSmall"
                  isColor={thema.inputState.offState.default}
                >
                  Vendido e entregue por Riachuelo
                </Typography>
              </DivPrecoProdutod>
            </DivDescricaoProduto>
            <Form>
              <FieldsetStyle>
                <LegendStyle>Cores:</LegendStyle>
                <DivRadio>
                  <RadioSelect nome="cores" texto="azulClaro" />
                  <RadioSelect nome="cores" texto="Offwhite" />
                  <RadioSelect nome="cores" texto="Preto" />
                </DivRadio>
              </FieldsetStyle>
              <FieldsetStyle>
                <LegendStyle>Tamanho:</LegendStyle>
                <DivRadio>
                  <RadioSelect nome="tamanho" texto="P" />
                  <RadioSelect nome="tamanho" texto="PP" />
                  <RadioSelect nome="tamanho" texto="M" />
                  <RadioSelect nome="tamanho" texto="G" />
                  <RadioSelect nome="tamanho" texto="GG" />
                </DivRadio>
              </FieldsetStyle>
              <Botao classNameBtn="btnSecundary" tipo="submit">
                Adicionar à sacola
              </Botao>
            </Form>
          </ContainerModal>
        </DivProdutoModal>
      </DivModal>
    </DialogModal>
  );
};

export default ModalProduto;
