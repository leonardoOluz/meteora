import { basicHeadingH5, basicParagraphSmallBold } from "@/styles/stylesGlobal";
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

export const DivHeaderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
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

export const DivDescricaoProduto = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.4rem;
  padding: 1.6rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 0;
  }
`;

export const DivPrecoProdutod = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
  border-top: 1px solid rgba(0, 0, 0, 1);
  padding-bottom: 1.6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SpanPreco = styled.span`
  color: ${({ theme }) => theme.colorsPrimary.cinzaChumbo};
  ${basicHeadingH5}
`;

export const FieldsetStyle = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const LegendStyle = styled.legend`
  ${basicParagraphSmallBold}
  display: block;
`;

export const DivRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding-top: 1.6rem;
`;
