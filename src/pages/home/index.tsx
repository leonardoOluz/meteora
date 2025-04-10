import Banner from "@/components/Banner";
import Categoria from "@/pages/home/Categoria";
import Cabecalho from "@/components/Cabecalho";
import Facilidades from "./Facilidades";
import Produtos from "./Produtos";
import NewsLetter from "@/components/NewsLetter";
import { Footer } from "@/components/Footer";

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
