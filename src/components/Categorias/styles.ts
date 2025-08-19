import styled from "styled-components";

export const DivCategorias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  margin: 2.4rem  0 2.65rem 0;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 7.4rem;
  }
`;
