import styled, { css } from "styled-components";
import Logo from "../Logo";
import Navbar from "../Navbar";
import Buscador from "../Buscador";
import { useState } from "react";
import Botao from "../Botao";

const buscadorMobile = css`
  background-color: ${({ theme }) => theme.colorsPrimary.branco};
  justify-content: center;
`;

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.colorsPrimary.preto};
    padding: 1rem 2.3rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Container = styled.div<{ $buscadorMobile?: boolean }>`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  position: relative;
  width: 100%;
  padding: 1.7rem 2.3rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  ${({ $buscadorMobile }) => $buscadorMobile && buscadorMobile}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    padding: 0;
    background-color: transparent;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }
`;
const Header = () => {
  const [texto, setTexto] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <HeaderStyle>
      <Container>
        <Logo />
        <Navbar menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
      </Container>
      <Container style={{ gap: "1rem" }} $buscadorMobile>
        <Buscador
          texto={texto}
          setTexto={setTexto}
          placeHolder="Digite o produto"
        />
        <Botao>Buscar</Botao>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
