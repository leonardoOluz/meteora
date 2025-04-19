import { thema } from "@/styles/thema";
import styled from "styled-components";
import { css } from "styled-components";

const buscadorMobile = css`
  background-color: ${({ theme }) => theme.colorsPrimary.branco};
  justify-content: center;
`;

export const Container = styled.div<{ $buscadorMobile?: boolean }>`
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
export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;

  span {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colorsPrimary.verde};
    padding-right: 1.6rem;
  }
`;

export const iconsProps = {
  size: 25,
  color: thema.colorsPrimary.cinza,
};
