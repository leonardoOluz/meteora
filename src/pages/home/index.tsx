import Cabecalho from "@/components/Cabecalho";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import { Footer } from "@/components/Footer";
import Categoria from "./Categoria";
import Produtos from "./Produtos";
import Facilidades from "./Facilidades";

const Home = () => {
  return (
    <>
      <Cabecalho />
      <Banner />
      <Categoria />
      <Produtos />
      <Facilidades />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
