import styled from "styled-components";
import logoMobile from "./assets/Logo mobile.png";
import logoTablet from "./assets/Logo tablet.png";
import logoDesktop from "./assets/Logo desktop.png";
import { Link } from "react-router-dom";

const LogoImg = styled.img`
  width: 12.6rem;
  height: 2.4rem;
  display: block;

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
    <Link to={"/"}>
      <h1 style={{ padding: "0", margin: "0" }} title="Logo Meteora" lang="pt-br">
        <LogoImg
          src={logoMobile}
          srcSet={`${logoTablet} 768w, ${logoDesktop} 1440w`}
          sizes="(max-width: 767px) 100px, (max-width: 1440px) 133px, 126px"
          alt="Logo Meteora"
        />
      </h1>
    </Link>
  );
};

export default Logo;
