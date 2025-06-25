import styled from "styled-components";

export const iconsProps = {
  size: 20,
  style: { position: "absolute" as const, right: 10, top: 10 },
};
export const DivFieldInput = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivInput = styled.div`
  position: relative;
`;
export const LabelInput = styled.label`
  font-size: 1.6rem;
  padding-bottom: 1rem;
`;