import styled from "styled-components";
import { FadeIn } from "./animation";

export const FieldsetForm = styled.fieldset`
  width: 100%;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  row-gap: .4rem;
  border-color: ${({ theme }) => theme.colorsPrimary.preto};
  box-sizing: border-box;
`;
export const LegendForm = styled.legend`
  font-size: 2rem;
  line-height: 100%;
  padding: 0 0.5rem;
`;
export const DivFadeInForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  animation: ${FadeIn} 1s ease-in forwards;
`;
