import List from "@/components/List";
import ItemList from "@/components/List/ItemList";
import Photo from "@/components/Photo";
import Section from "@/components/Section";

const Novidades = () => {
  return (
    <Section classNameSection="secao novidades">
      <Photo src="/novidades.jpeg" classeImg="imgNovidades" />
      <List classeLista="listPromocoes">
        <ItemList>
          <Photo
            classeImg="imgNovidades"
            alt=""
            src="/assets/mobile/banner/bannerPromoOne.png"
          />
        </ItemList>
        <ItemList>
          <Photo
            classeImg="imgNovidades"
            alt=""
            src="/assets/mobile/banner/bannerPromoTwo.png"
          />
        </ItemList>
        <ItemList>
          <Photo
            classeImg="imgNovidades"
            alt=""
            src="/assets/mobile/banner/bannerPromoThree.png"
          />
        </ItemList>
      </List>
    </Section>
  );
};

export default Novidades;
