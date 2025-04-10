import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
  padding: 1.7rem 6.4rem;

  p a {
    color: ${({ theme }) => theme.colorsPrimary.branco};
    text-decoration: none;
    cursor: pointer;
    font-weight: 800;
  }
`;
