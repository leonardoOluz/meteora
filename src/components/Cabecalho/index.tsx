import Logo from "@components/Logo";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import { Container, ContainerCart } from "./styles";
import CartProductsMobile from "./components/CartProductsMobile";
import DropDownOn from "./components/DropDownOn";
import FormSearchProducts from "./components/FormSearchProducts";

const Cabecalho = () => {
  return (
    <Header classeHeader="header">
      <Container>
        <Logo />
        <ContainerCart>
          <CartProductsMobile />
          <Navbar />
        </ContainerCart>
      </Container>
      <FormSearchProducts />
      <DropDownOn />
    </Header>
  );
};

export default Cabecalho;
