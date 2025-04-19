import Logo from "@components/Logo";
import Navbar from "@components/Navbar";
import Input from "@/components/Input";
import { useState } from "react";
import Botao from "@components/Botao";
import Header from "@components/Header";
import { BsCart4 } from "react-icons/bs";
import { thema } from "@/styles/thema";
import useResize from "@/hooks/useResize";
import transformNumber from "@/utils/transformNumber";
import { Container, ContainerCart, iconsProps } from "./styles";

const Cabecalho = () => {
  const [texto, setTexto] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);
  const { width } = useResize();

  const cartProdutosDesktop = width >=
    transformNumber(thema.breakpoints.tablet) && (
    <ContainerCart>
      <BsCart4 {...iconsProps} />
      <span>4</span>
    </ContainerCart>
  );
  const cartProdutosMobile = width <
    transformNumber(thema.breakpoints.tablet) && (
    <>
      <BsCart4 {...iconsProps} />
      <span>4</span>
    </>
  );

  return (
    <Header classeHeader="cabecalho">
      <Container>
        <Logo />
        <ContainerCart>
          {cartProdutosMobile}
          <Navbar menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
        </ContainerCart>
      </Container>
      <Container style={{ gap: "1rem" }} $buscadorMobile>
        <Input
          value={texto}
          handleChange={(e) => setTexto(e.target.value)}
          placeHolder="Digite o produto"
          tipo="text"
          classeInput="inputBuscador"
        />
        <Botao classNameBtn="btnPrimary">Buscar</Botao>
        {cartProdutosDesktop}
      </Container>
    </Header>
  );
};

export default Cabecalho;
