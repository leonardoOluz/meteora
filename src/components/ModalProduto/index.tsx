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
import { ICardProduto } from "@/types/componentTypes";
import useSetImagens from "@/hooks/useSetImagens";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/reducers/carrinho";
interface IProps {
  handleClose: () => void;
  isOpen: boolean;
  card: ICardProduto;
}

const ModalProduto = ({ handleClose, isOpen, card }: IProps) => {
  const { imagensCardProdutos } = useSetImagens();
  const [cor, setCor] = useState("");
  const [tamanho, setTamanho] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Produto adicionado ao carrinho");
    dispatch(
      addProduct({
        id: card.id,
        details: {
          cor,
          tamanho
        }
      })
    );
    handleClose();
  };

  return (
    <DialogModal open={isOpen} tabIndex={0}>
      <DivModal>
        <Header classeHeader="headerModal">
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
            photo={imagensCardProdutos(card.imagem)}
            alt={card.alt}
            classeImg="imgProdutoCard"
          />
          <ContainerModal>
            <DivDescricaoProduto>
              <Typography
                elementoHtml="h2"
                classNameTypograph="basicParagraphBold"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                {card.titulo}
              </Typography>
              <Typography
                classNameTypograph="basicParagraphSmall"
                elementoHtml="p"
                isColor={thema.colorsPrimary.cinzaChumbo}
              >
                {card.descricao}
              </Typography>
              <DivPrecoProdutod>
                <SpanPreco>R$ {card.preco.toFixed(2)}</SpanPreco>
                <Typography
                  elementoHtml="p"
                  classNameTypograph="basicParagraphSmall"
                  isColor={thema.inputState.offState.default}
                >
                  Vendido e entregue por Riachuelo
                </Typography>
              </DivPrecoProdutod>
            </DivDescricaoProduto>
            <Form ariaLabel="itens opcionais" handleSubmit={handleSubmit}>
              <FieldsetStyle>
                <LegendStyle>Cores:</LegendStyle>
                <DivRadio>
                  {card.cor.map((cor) => (
                    <RadioSelect
                      key={cor}
                      nome="cor"
                      texto={cor}
                      handleChange={(e) => {
                        setCor(e.target.value);
                      }}
                    />
                  ))}
                </DivRadio>
              </FieldsetStyle>
              <FieldsetStyle>
                <LegendStyle>Tamanho:</LegendStyle>
                <DivRadio>
                  {card.tamanho.map((tamanho) => (
                    <RadioSelect
                      key={tamanho}
                      nome="tamanho"
                      texto={tamanho}
                      handleChange={(e) => {
                        setTamanho(e.target.value);
                      }}
                    />
                  ))}
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
