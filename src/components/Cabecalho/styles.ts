import { thema } from "@/styles/thema";
import styled from "styled-components";
import { css } from "styled-components";

const headerStyles = css`
  position: relative;
  width: 100%;
  padding: 1.7rem 2.3rem;
  display: flex;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    padding: 0;
    background-color: transparent;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
`;
export const HeaderDivLogoNavbar = styled.div`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  justify-content: space-between;
  ${headerStyles}
`;
export const HeaderDivCart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const HeaderFormSearch = styled.form`
  background-color: ${({ theme }) => theme.colorsPrimary.branco};
  justify-content: center;
  ${headerStyles}
  gap: 0.82rem;
`;
export const HeaderDivFormBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;
export const iconsProps = {
  size: 25,
  color: thema.colorsPrimary.cinza,
};
export const SpanCart = styled.span`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colorsPrimary.verde};
`;