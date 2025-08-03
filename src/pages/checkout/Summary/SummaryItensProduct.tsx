import Photo from "@/components/Photo";
import useCheckPrice from "@/hooks/useCheckPrice";
import useSelectCatPromocao from "@/hooks/useSelectCatPromocao";
import useSetImagens from "@/hooks/useSetImagens";
import { ICardProduto } from "@/types/componentTypes";
import * as S from "./styles";
import ItemList from "@/components/List/ItemList";
interface ItensProductSummaryProps {
  itemCard: ICardProduto;
  totQuanty: number;
}
const SummaryItensProduct = ({
  itemCard,
  totQuanty,
}: ItensProductSummaryProps) => {
  const { imagensCardProdutos } = useSetImagens();
  const checkPromocao = useSelectCatPromocao();
  const price = useCheckPrice(itemCard.preco, checkPromocao(itemCard.id));

  return (
    <ItemList>
      <S.CardContainer>
        <S.ImageWrapper>
          <Photo
            classeImg="imgCategoria"
            src={imagensCardProdutos(itemCard.imagem)}
            alt={`Foto do Produto: ${itemCard.titulo}`}
          />
        </S.ImageWrapper>

        <S.ContentWrapper>
          <S.ProductTitle>{itemCard.titulo}</S.ProductTitle>
          <S.ProductDescription>{itemCard.descricao}</S.ProductDescription>
          <S.ProductPrice>
            R$ <strong>Preço:</strong> R${" "}
            {(price * totQuanty).toFixed(2).replace(".", ",")}
          </S.ProductPrice>
          <S.ProductQuantity>
            <strong>Quantidade:</strong> {totQuanty}
          </S.ProductQuantity>
        </S.ContentWrapper>
      </S.CardContainer>
    </ItemList>
  );
};

export default SummaryItensProduct;
