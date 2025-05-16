import { IPromocoes } from "@/types/store";

const useFindSearchPromo = () => {
  const findSearchPromo = (productId: number, promocoes: IPromocoes[]) => {
    const catPromo = promocoes.find((item) =>
      item.productId.some((id) => id === productId)
    );
    return catPromo?.catPromocao;
  };
  return { findSearchPromo };
};

export default useFindSearchPromo;
