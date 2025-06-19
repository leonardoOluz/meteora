import { FormClass } from "@/types/componentTypes";
import styled, { css } from "styled-components";

const formBasic = css`
  width: 100%;
  padding: 1.6rem 1.6rem 0 1.6rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.6rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 76.9rem;
  }
`;
const formProductModal = css`
  padding: 1.6rem 1.6rem 0 1.6rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;
const formSelectedModal = css`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 0 auto;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colorsPrimary.verde};
  align-self: center;
  color: ${({ theme }) => theme.colorsPrimary.preto};
  border-radius: 0.8rem;
`;
const formAddress = css``;

export const FormStyle = styled.form<{
  $classForm?: FormClass;
}>`
  ${({ $classForm }) => {
    switch ($classForm) {
      case "selectedModal":
        return formSelectedModal;
      case "basic":
        return formBasic;
      case "addressForm":
        return formAddress;
      case "formProductModal":
        return formProductModal;
      default:
        break;
    }
  }}
`;
