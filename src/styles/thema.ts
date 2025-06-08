// my-theme.ts
import { DefaultTheme } from "styled-components";

const thema: DefaultTheme = {
  spacing: {
    sm: "1rem",
  },
  colorsPrimary: {
    cinza: "#cccccc",
    cinzaChumbo: "#212529",
    coral: "#EE6471",
    laranja: "#F87F46",
    preto: "#000000",
    branco: "#ffffff",
    roxo: "#9353FF",
    verde: "#DAFF01",
    dropDown: "#343A40",
  },
  inputState: {
    error: "#DC3545",
    success: "#198754",
    disabled: "#E9ECEF",
    focus: "#80BDFF",
    hover: "#C9D1D7",
    active: "#80BDFF",
    default: "#CED4Da",
    onState: {
      disabled: "#0D6EFD",
      focus: "#0D6EFD",
      default: "#0D6EFD",
    },
    offState: {
      disabled: "#ADB5BD",
      focus: "#0D6EFD",
      default: "#ADB5BD",
    },
  },
  breakpoints: {
    mobile: "375px",
    tablet: "852px",
    desktop: "1440px",
  },
  fontFamily: '"Inter", sans-serif',
};

export { thema };
