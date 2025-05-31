import styled, { css } from "styled-components";

const dropDownOpen = css`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colorsPrimary.dropDown};
`;
export const ContainerNavbar = styled.div<{ $menuAberto: boolean }>`
  ${({ $menuAberto }) => ($menuAberto ? dropDownOpen : "")}

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    background-color: transparent;
  }
`;
export const NavbarStyle = styled.nav<{ $menuAberto: boolean }>`
  display: ${({ $menuAberto }) => ($menuAberto ? "block" : "none")};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;
export const ListLinks = styled.ul`
  margin: 0;
  padding: 0 4.4rem 0.8rem 4.4rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 0;
    gap: 2rem;
  }
`;
export const ItemLink = styled.li`
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
