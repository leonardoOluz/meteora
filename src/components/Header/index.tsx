import styled from "styled-components";
import Logo from "../Logo";
import Navbar from "../Navbar";

const HeaderStyle = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 1.3rem 2.3rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colorsPrimary.preto};
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Logo />
        <Navbar />
      </Container>
    </HeaderStyle>
  );
};

export default Header;
