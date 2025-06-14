import { IHeader } from "@/types/componentTypes";
import styled, { css } from "styled-components";

const header = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.colorsPrimary.preto};
    padding: 1rem;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const headerModal = css`
  padding: 1.6rem 2.3rem;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const headerDropDown = css`
  text-align: left;
  background-color: ${({ theme }) => theme.colorsPrimary.roxo};
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 3.2rem 2.4rem 8rem;
`;
const headerCheckout = css`
  margin: 1rem;
  display: flex;
  /* border-bottom: 2px solid ${({ theme }) => theme.colorsPrimary.verde}; */
`;

const hedersType = {
  header,
  headerModal,
  headerDropDown,
  headerCheckout,
};
export const HeaderStyle = styled.header<{
  $classHeader: IHeader;
}>`
  ${({ $classHeader }) => hedersType[$classHeader]}
`;
