import { IGrid, IClassTypograph } from "@/types/componentTypes";
import {
  basicHeadingH2,
  basicHeadingH3,
  basicHendingH4,
  basicParagraphBold,
  basicParagraphLead,
  basicParagraphSmall,
  paragraph,
  typographyModal,
} from "@/styles/stylesGlobal";
import styled from "styled-components";

export const TypographyStyle = styled.div<{
  $classNameTypograph?: IClassTypograph;
  $isColor?: string;
  $isGrid?: IGrid;
}>`
  ${({ $classNameTypograph, $isGrid }) => {
    switch ($classNameTypograph) {
      case "paragraph":
        return paragraph;
      case "basicParagraphBold":
        return basicParagraphBold($isGrid);
      case "basicParagraphSmall":
        return basicParagraphSmall($isGrid);
      case "basicHeadingH3":
        return basicHeadingH3;
      case "basicHeadingH2":
        return basicHeadingH2;
      case "basicParagraphLead":
        return basicParagraphLead;
      case "typographyModal":
        return typographyModal;
      case "basicHendingH4":
        return basicHendingH4;
      default:
        return paragraph;
    }
  }}

  color: ${({ theme, $isColor }) => $isColor || theme.colorsPrimary.branco};
  box-sizing: border-box;
`;
