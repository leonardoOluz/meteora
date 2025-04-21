import Cabecalho from "../Cabecalho";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";

const PageBase = () => {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PageBase;
