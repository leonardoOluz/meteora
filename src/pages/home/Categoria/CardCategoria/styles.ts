import styled from "styled-components";

export const DivStyle = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const SpanStyle = styled.span`
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  text-align: center;
  padding: 0.95rem 0;
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 100%;
  color: ${({ theme }) => theme.colorsPrimary.branco};
`;