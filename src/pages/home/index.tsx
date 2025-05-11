import Banner from "@/components/Banner";
import Facilidades from "@/components/Facilidades";
import NewsLetter from "@/components/NewsLetter";
import Produtos from "@/components/Produtos";

const Home = () => {
  return (
    <>
      <Banner typeBanner="bannerSwiper" />
      <Produtos />
      <Facilidades />
      <NewsLetter />
    </>
  );
};

export default Home;
