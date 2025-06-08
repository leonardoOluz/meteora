import styled from "styled-components";

export const MessageError = styled.span`
  color: ${({theme}) => theme.inputState.error};
  font-size: 1.4rem;
  font-weight: bold;
`