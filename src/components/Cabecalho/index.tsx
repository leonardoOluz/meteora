import Botao from "@components/Botao";
import CartDropDown from "../CartDropDown";
import Logo from "@components/Logo";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Input from "@/components/Input";
import transformNumber from "@/utils/transformNumber";
import useResize from "@/hooks/useResize";
import { BsCart4 } from "react-icons/bs";
import { Container, ContainerCart, FormSearch, iconsProps } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/types/store";
import { thema } from "@/styles/thema";
import { setBuscador } from "@/store/reducers/buscador";

const Cabecalho = () => {
  const [cartDropDown, setCartDropDown] = useState(false);
  const [menuDropDrown, setMenuDropDown] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(true);
  const [search, setSearch] = useState<string>("");
  const { width } = useResize();
  const carrinho = useSelector((state: RootState) => state.carrinho);
  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setBuscador(search));
    navigation("/seach-products");
    setSearch("");
  };
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

      <FormSearch onSubmit={handleSearch}>
        <Input
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
          placeHolder="Digite o produto"
          tipo="text"
          classeInput="inputBuscador"
          aria-label="buscador"
        />
        <Botao
          classNameBtn="btnPrimary"
          title="Buscar"
          aria-label="buscar"
          type="submit"
        >
          Buscar
        </Botao>
        {cartProdutosDesktop}
      </FormSearch>

      {isDropDown}
    </Header>
  );
};

export default Cabecalho;
