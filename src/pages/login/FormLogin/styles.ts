import styled from "styled-components";

export const LoginFieldset = styled.fieldset`
  width: 100%;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-color: ${({theme}) => theme.colorsPrimary.preto};
  box-sizing: border-box;
`
export const LoginLegend = styled.legend`
  font-size: 1.6rem;
  line-height: 100%;
  padding: 0 0.5rem;
`