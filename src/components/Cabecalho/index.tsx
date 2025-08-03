import Logo from "@components/Logo";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import {
  HeaderDivLogoNavbar,
  HeaderDivCart,
  HeaderDivFormBtns,
} from "./styles";
import DropDownOn from "./components/DropDownOn";
import FormSearchProducts from "./components/FormSearchProducts";
import BtnLogar from "../BtnLogar";
import HeaderProductsCart from "./components/HeaderProductsCart";
import useCheckLogin from "@/hooks/useCheckLogin";

const Cabecalho = () => {
  useCheckLogin();
  return (
    <Header classeHeader="header">
      <HeaderDivLogoNavbar>
        <Logo />
        <HeaderDivCart>
          <HeaderProductsCart cartProducts="mobile" />
          <Navbar />
        </HeaderDivCart>
      </HeaderDivLogoNavbar>
      <FormSearchProducts />
      <HeaderDivFormBtns>
        <HeaderProductsCart cartProducts="desktop" />
        <BtnLogar />
      </HeaderDivFormBtns>
      <DropDownOn />
    </Header>
  );
};

export default Cabecalho;
