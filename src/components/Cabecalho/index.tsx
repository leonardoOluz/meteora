import Logo from "@components/Logo";
import Navbar from "@components/Navbar";
import Input from "@/components/Input";
import { useState } from "react";
import Botao from "@components/Botao";
import Header from "@components/Header";
import { BsCart4 } from "react-icons/bs";
import { thema } from "@/styles/thema";
import transformNumber from "@/utils/transformNumber";
import { Container, ContainerCart, iconsProps } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import CartDropDown from "../CartDropDown";
import useResize from "@/hooks/useResize";

const Cabecalho = () => {
  const [cartDropDown, setCartDropDown] = useState(false);
  const [menuDropDrown, setMenuDropDown] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(true);
  const [texto, setTexto] = useState("");
  const { width } = useResize();
  const carrinho = useSelector((state: RootState) => state.carrinho);
  const location = useLocation();

  const handleCartDropDown = () => {
    if (location.pathname === "/carrinho") {
      return setCartDropDown(false);
    }
    if (isOpenDropDown) {
      return setTimeout(() => {
        setCartDropDown(!cartDropDown);
        setIsOpenDropDown(false);
      }, 500);
    }
    setIsOpenDropDown(true);
  };

  const isDropDown =
    location.pathname !== "/carrinho" &&
    cartDropDown &&
    width >= transformNumber(thema.breakpoints.tablet) ? (
      <CartDropDown setDropDown={setCartDropDown} dropDown={cartDropDown} />
    ) : null;

  const cartProdutosDesktop = width >=
    transformNumber(thema.breakpoints.tablet) && (
    <ContainerCart onMouseEnter={() => handleCartDropDown()}>
      <Botao classNameBtn="btnUnset" aria-label="carrinho" title="carrinho">
        <Link to="carrinho">
          <BsCart4 {...iconsProps} />
          <span>{carrinho.totProduct}</span>
        </Link>
      </Botao>
    </ContainerCart>
  );

  const cartProdutosMobile = width <
    transformNumber(thema.breakpoints.tablet) && (
    <Botao classNameBtn="btnUnset" aria-label="carrinho" title="carrinho">
      <Link to="carrinho">
        <BsCart4 {...iconsProps} />
        <span>{carrinho.data.length}</span>
      </Link>
    </Botao>
  );

  return (
    <Header classeHeader="header">
      <Container>
        <Logo />
        <ContainerCart>
          {cartProdutosMobile}
          <Navbar
            menuDropDrown={menuDropDrown}
            handleMenuDropDrown={setMenuDropDown}
          />
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
        <Botao classNameBtn="btnPrimary" title="Buscar" aria-label="buscar">
          Buscar
        </Botao>
        {cartProdutosDesktop}
      </Container>
      {isDropDown}
    </Header>
  );
};

export default Cabecalho;
