import styled from "styled-components";

export const DivCartDropDown = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: 8rem;
`;