import styled, { css } from "styled-components";

const cabecalho = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-color: ${({ theme }) => theme.colorsPrimary.preto};
    padding: 1rem 2.3rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const HeaderStyle = styled.header<{ $classHeader: "cabecalho" }>`
  ${({ $classHeader }) => {
    switch ($classHeader) {
      case "cabecalho":
        return cabecalho;
      default:
        break;
    }
  }}
`;

interface IProps {
  children: React.ReactNode;
  classeHeader: "cabecalho";
}

const Header = ({ children, classeHeader: classe }: IProps) => {
  return <HeaderStyle $classHeader={classe}>{children}</HeaderStyle>;
};

export default Header;
