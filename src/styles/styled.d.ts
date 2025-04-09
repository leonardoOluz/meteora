// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    spacing:{
      sm: string;
    };
    colorsPrimary: {
      cinza: string;
      cinzaChumbo: string;
      verde: string;
      roxo: string;
      preto: string;
      branco: string;
      coral: string;
      laranja: string;
      dropDown: string;
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
    fontFamily: string;
  }
}
