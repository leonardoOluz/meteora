// my-theme.ts
import { DefaultTheme } from "styled-components";

const thema: DefaultTheme = {
  spacing: {
    sm: "1.5rem",
  },
  colorsPrimary: {
    cinza: "#cccccc",
    coral: "#EE6471",
    laranja: "#F87F46",
    preto: "#000000",
    roxo: "#9353FF",
    verde: "#DAFF01",
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
    tablet: "768px",
    desktop: "1440px",
  },
};

export { thema };
