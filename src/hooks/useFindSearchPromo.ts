import { KeyIdProduct } from "@/types/componentTypes";
import { IPromocoes } from "@/types/store";

const useFindSearchPromo = () => {
  const findSearchPromo = (productId: KeyIdProduct, promocoes: IPromocoes[]) => {
    const catPromo = promocoes.find((item) =>
      item.productId.some((id) => id === productId)
    );
    return catPromo?.catPromocao;
  };

  return findSearchPromo;
};

export default useFindSearchPromo;