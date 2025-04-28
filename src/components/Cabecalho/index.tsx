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
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/types/store";
import CartDropDown from "../CartDropDown";

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
      console.log("dentro da rota carrinho");
      return setCartDropDown(false);
    }

    if (isOpenDropDown) {
      return setTimeout(() => {
        console.log("fora da rota carrinho");
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
      <Link to="carrinho">
        <BsCart4 {...iconsProps} />
        <span>{carrinho.data.length}</span>
      </Link>
    </ContainerCart>
  );

  const cartProdutosMobile = width <
    transformNumber(thema.breakpoints.tablet) && (
    <Link to="carrinho">
      <BsCart4 {...iconsProps} />
      <span>{carrinho.data.length}</span>
    </Link>
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
        <Botao classNameBtn="btnPrimary">Buscar</Botao>
        {cartProdutosDesktop}
      </Container>
      {isDropDown}
    </Header>
  );
};

export default Cabecalho;
