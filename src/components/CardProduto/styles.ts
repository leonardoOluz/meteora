import { basicParagraphBold } from "@/styles/stylesGlobal";
import styled from "styled-components";

export const ArticleStyle = styled.article`
  max-width: 32.3rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding-bottom: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 33rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 35rem;
  }

`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const FigStyle = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;
export const SpanPrecoStyle = styled.span`
  width: 100%;
  ${basicParagraphBold(false)}
`;
