import Banner from "@/components/Banner";
import Categorias from "@/components/Categorias";
import { Outlet } from "react-router-dom";

const LayoutHomeBase = () => {
  return (
    <>
      <Banner typeBanner="bannerSwiper" />
      <Categorias />
      <Outlet />
    </>
  );
};

export default LayoutHomeBase;
