import Banner from "../Banner";
import Cabecalho from "../Cabecalho";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import Categorias from "../Categorias";

const PageBase = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Categorias />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageBase;
