import { IGrid, IClassTypograph } from "@/interface/IU";
import {
  basicHeadingH2,
  basicHeadingH3,
  basicParagraphBold,
  basicParagraphSmall,
  paragraph,
} from "@/styles/stylesGlobal";
import styled from "styled-components";

export const TypographyStyle = styled.div<{
  $classTypograph?: IClassTypograph;
  $isColor?: string;
  $isGrid?: IGrid;
}>`
  color: ${({ theme, $isColor }) => $isColor || theme.colorsPrimary.branco};
  box-sizing: border-box;
  ${({ $classTypograph: $nameClass, $isGrid }) => {
    switch ($nameClass) {
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
      default:
        return paragraph;
    }
  }}
`;
