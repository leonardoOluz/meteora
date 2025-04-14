import CardProduto from "@/components/CardProduto";
import Lista from "@/components/LIsta";
import Item from "@/components/LIsta/Item";
import ModalProduto from "@/components/ModalProduto";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import store from "@/store";
import { useState } from "react";
import { useSelector } from "react-redux";

type RootState = ReturnType<typeof store.getState>

const Produtos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const produtos = useSelector((state: RootState) => state.produtos);
  const openModalProduto = () => {
      setModalOpen(!modalOpen);
    };
  

  return (
    <Section classNameSection="secaoProdutos">
      {modalOpen && <ModalProduto  handleClose={openModalProduto} isOpen={modalOpen}/>}
      <Typography elementoHtml="h2" classNameTypograph="basicHeadingH3">
        Produtos que estão bombando!
      </Typography>
      <Lista classe="listaProdutos" ariaLabel="Lista de produtos">
        { produtos.map((card) => (
          <Item  key={card.id} aria-label={`card de produto ${card.categoria}`}>
            <CardProduto card={card} openModalProduto={openModalProduto} />
          </Item>
        ))}
      </Lista>
    </Section>
  );
};

export default Produtos;
