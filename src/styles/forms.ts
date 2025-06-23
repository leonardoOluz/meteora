import styled from "styled-components";
import { FadeIn } from "./animation";

export const FieldsetForm = styled.fieldset`
  width: 100%;
  max-width: 32.2rem;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  border-color: ${({ theme }) => theme.colorsPrimary.preto};
  border-radius: 0.8rem;
  background-color: rgba(255, 255, 255, 0.2);
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
export const LabelForm = styled.label`
  font-size: 1.5rem;
  line-height: 100%;
  color: ${({ theme }) => theme.colorsPrimary.preto};
`;
export const DivForm = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  box-sizing: border-box;
`;
export const ContainerForm = styled.div`
  position: relative;
  width: 100%;
`;
