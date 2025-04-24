import styled from "styled-components";

export const DivCart = styled.div`
  margin: 0 0 3.2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: start;
  }
`;

export const DivCartList = styled.div`
  margin: 0;
  h2 {
    padding: 3.2rem 0;
    background-color: ${({ theme }) => theme.colorsPrimary.preto};
  }
  width: 100%;
  max-width: 62rem;
`;

export const DivCartSumare = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 34.8rem;
  }
`;

export const DivCartBtn = styled.div`
  padding: 0 2.4rem;
  width: 100%;
  max-width: 62rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;
