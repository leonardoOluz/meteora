import { IGrid, IClassTypograph } from "@/interface/IU";
import {
  basicHeadingH2,
  basicHeadingH3,
  basicParagraphBold,
  basicParagraphLead,
  basicParagraphSmall,
  paragraph,
} from "@/styles/stylesGlobal";
import styled from "styled-components";

export const TypographyStyle = styled.div<{
  $classNameTypograph?: IClassTypograph;
  $isColor?: string;
  $isGrid?: IGrid;
}>`
  color: ${({ theme, $isColor }) => $isColor || theme.colorsPrimary.branco};
  box-sizing: border-box;

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
      default:
        return paragraph;
    }
  }}
`;
