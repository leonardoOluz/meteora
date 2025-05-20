import { IKeyIdProduct } from "@/types/componentTypes";
import { IPromocoes } from "@/types/store";

const useFindSearchPromo = () => {
  const findSearchPromo = (productId: IKeyIdProduct, promocoes: IPromocoes[]) => {
    const catPromo = promocoes.find((item) =>
      item.productId.some((id) => id === productId)
    );
    return catPromo?.catPromocao;
  };

  return findSearchPromo;
};

export default useFindSearchPromo;