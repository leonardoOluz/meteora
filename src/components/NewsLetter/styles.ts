import { basicParagraphSmall } from "@/styles/stylesGlobal";
import styled from "styled-components";

export const FormStyle = styled.form`
  max-width: 72.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 2.4rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.colorsPrimary.preto};
  box-sizing: border-box;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    text-align: center;
    padding: 4rem 6rem;
  }
  @media screen and (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    padding: 4rem 1.6rem;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const InputStyle = styled.input`
  width: 60%;
  padding: 0.8rem 0 0.6rem 0;
  border: 1px solid ${({ theme }) => theme.colorsPrimary.preto};
  border-right: none;
  text-decoration: none;
  outline: none;
  ${basicParagraphSmall(false)}
  padding-left: 1.5rem;
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;
