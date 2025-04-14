import Banner from "@/components/Banner";
import Categoria from "@/pages/Home/Categoria";
import Cabecalho from "@/components/Cabecalho";
import NewsLetter from "@/components/NewsLetter";
import { Footer } from "@/components/Footer";
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
