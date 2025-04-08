import Banner from "@/components/Banner";
import Categoria from "@/pages/home/Categoria";
import Cabecalho from "@/components/Cabecalho";
import Facilidades from "./Facilidades";
import Produtos from "./Produtos";

const Home = () => {
  return (
    <>
      <Cabecalho />
      <Banner />
      <Categoria />
      <Produtos />
      <Facilidades />
    </>
  );
};

export default Home;