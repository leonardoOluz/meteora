import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import MenuHamburguer from "../MenuHamburguer";
import { Link } from "react-router-dom";

const dropDownOpen = css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colorsPrimary.dropDown};
`;
const ContainerStyle = styled.div<{ $menuAberto: boolean }>`
  ${({ $menuAberto }) => ($menuAberto ? dropDownOpen : "")}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    background-color: transparent;
  }
`;
const NavbarStyle = styled.nav<{ $menuAberto: boolean }>`
  display: ${({ $menuAberto }) => ($menuAberto ? "block" : "none")};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;
const ListaLinksStyle = styled.ul`
  margin: 0;
  padding: 0 2.4rem 0.8rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 0;
    gap: 2rem;
  }
`;
const LinkStyle = styled.li`
  list-style: none;
  padding: 0.765rem 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.inputState.default};

  &:nth-last-child(1) {
    border-bottom: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    border-bottom: none;
  }

  a {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.3rem;
    letter-spacing: 0rem;
    color: #ffffff;
    text-decoration: none;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      line-height: 2rem;
      font-size: 1.3rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      line-height: 2.3rem;
      font-size: 1.6rem;
    }
  }
`;
const links = [
  { to: "/", name: "Home" },
  { to: "#", name: "Nossas lojas" },
  { to: "#", name: "Novidades" },
  { to: "#", name: "Promoções" },
];

interface IProps {
  menuAberto: boolean;
  setMenuAberto: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ menuAberto, setMenuAberto }: IProps) => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const navbarId = "navbar-links";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuAberto &&
        navBarRef.current &&
        !navBarRef.current.contains(event.target as Node)
      ) {
        setMenuAberto(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [menuAberto, setMenuAberto]);

  return (
    <ContainerStyle $menuAberto={menuAberto} ref={navBarRef}>
      <MenuHamburguer
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
        ariaControls={navbarId}
      />
      <NavbarStyle $menuAberto={menuAberto}>
        <ListaLinksStyle onBlur={() => setMenuAberto(false)} id={navbarId}>
          {links.map((link, index) => (
            <LinkStyle key={index} onClick={() => setMenuAberto(false)}>
              <Link to={link.to}>{link.name}</Link>
            </LinkStyle>
          ))}
        </ListaLinksStyle>
      </NavbarStyle>
    </ContainerStyle>
  );
};

export default Navbar;
