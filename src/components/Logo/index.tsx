import styled from "styled-components";
import logoMobile from "@assets/Mobile/Logo mobile.png";
import logoTablet from "@assets/Tablet/Logo tablet.png";
import logoDesktop from "@assets/Desktop/Logo desktop.png";

const LogoImg = styled.img`
  width: 12.6rem;
  height: 2.4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 10rem;
    height: 2.4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 13.3rem;
    height: 3.2rem;
  }
`;

const Logo = () => {
  return (
    <LogoImg
      src={logoMobile}
      srcSet={`${logoTablet} 768w, ${logoDesktop} 1440w`}
      sizes="(max-width: 767px) 100px, (max-width: 1440px) 133px, 126px"
      alt="Logo Meteora"
    />
  );
};

export default Logo;
