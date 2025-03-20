// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colorsPrimary: {
      cinza: string;
      verde: string;
      roxo: string;
      preto: string;
      coral: string;
      laranja: string;
    };
    inputState: {
      error: string;
      success: string;
      disabled: string;
      focus: string;
      hover: string;
      active: string;
      default: string;
      onState: {
        disabled: string;
        focus: string;
        default: string;
      };
      offState: {
        disabled: string;
        focus: string;
        default: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
