import styled from "styled-components";
import Logo from "../Logo";
import Navbar from "../Navbar";
import Buscador from "../Buscador";
import { useState } from "react";

const HeaderStyle = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 1.3rem 2.3rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Header = () => {
  const [texto, setTexto] = useState("");
  return (
    <HeaderStyle>
      <Container>
        <Logo />
        <Navbar />
      </Container>
      <Container>
        <Buscador
          texto={texto}
          setTexto={setTexto}
          placeHolder="Digite o produto"
        />
        <button />
      </Container>
    </HeaderStyle>
  );
};

export default Header;
