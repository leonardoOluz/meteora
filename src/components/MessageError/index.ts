import styled from "styled-components";

export const MessageError = styled.span`
  text-align: center;
  background-color: #460101;
  color: ${({theme}) => theme.inputState.error};
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
`;