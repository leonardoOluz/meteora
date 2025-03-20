import { basicParagraph } from "@/styles/stylesGlobal";
import styled from "styled-components";

const NavbarStyle = styled.nav``;
const ListaLinksStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;
const LinkStyle = styled.li`
  list-style: none;
  a {
    ${basicParagraph}
    color: #FFFFFF;
    text-decoration: none;
  }
`;
const Navbar = () => {
  return (
    <NavbarStyle>
      <ListaLinksStyle>
        <LinkStyle>
          <a href="#">Home</a>
        </LinkStyle>
        <LinkStyle>
          <a href="#">Nossas lojas</a>
        </LinkStyle>
        <LinkStyle>
          <a href="#">Novidades</a>
        </LinkStyle>
        <LinkStyle>
          <a href="#">Promoções</a>
        </LinkStyle>
      </ListaLinksStyle>
    </NavbarStyle>
  );
};

export default Navbar;
