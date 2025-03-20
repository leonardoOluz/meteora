import { basicParagraph } from "@/styles/stylesGlobal";
import styled from "styled-components";

const NavbarStyle = styled.nav``;
const ListaLinksStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;
const LinkStyle = styled.li`
  ${basicParagraph}
  color: #FFFFFF;
  list-style: none;
`;
const Navbar = () => {
  return (
    <NavbarStyle>
      <ListaLinksStyle>
        <LinkStyle>Home</LinkStyle>
        <LinkStyle>Nossas lojas</LinkStyle>
        <LinkStyle>Novidades</LinkStyle>
        <LinkStyle>Promoções</LinkStyle>
      </ListaLinksStyle>
    </NavbarStyle>
  );
};

export default Navbar;
