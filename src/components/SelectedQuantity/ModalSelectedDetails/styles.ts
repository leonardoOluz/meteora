import styled from "styled-components";

export const ModalSelectedDetailsStyle = styled.dialog`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  text-align: center;
`;
export const DivModalContent = styled.div`
  width: 50%;
  display: flex;
  gap: 1.6rem;
`;