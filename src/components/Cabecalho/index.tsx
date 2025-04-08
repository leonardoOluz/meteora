import styled, { css } from "styled-components";
import Logo from "@components/Logo";
import Navbar from "@components/Navbar";
import Buscador from "@components/Buscador";
import { useState } from "react";
import Botao from "@components/Botao";
import Header from "@components/Header";

const buscadorMobile = css`
  background-color: ${({ theme }) => theme.colorsPrimary.branco};
  justify-content: center;
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
const Cabecalho = () => {
  const [texto, setTexto] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <Header classeHeader="cabecalho">
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
        <Botao classBotao="botaoCabecalho">Buscar</Botao>
      </Container>
    </Header>
  );
};

export default Cabecalho;
