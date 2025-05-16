import styled from "styled-components";

export const DialogModal = styled.dialog`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DivModal = styled.div`
  background-color: ${({ theme }) => theme.colorsPrimary.branco};
  box-sizing: border-box;
  overflow: auto;
  
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: center;
    overflow: visible;
  }
`;

export const DivProdutoModal = styled.div`
  margin: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border: none;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ContainerModal = styled.div`
  max-width: 31.8rem;
`;
