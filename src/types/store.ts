import store from "@/store";

export type RootState = ReturnType<typeof store.getState>;

/* interface de promocoes */
export interface IPromocoes {
  listProductsPromo: IProductPromo[];
  categories: ICatDesc;
}

/* Type de promocoes */
type ICatDesc = {
  nOne: number;
  nTwo: number;
  nThree: number;
  nFour: number;
  nFive: number;
};
type IProductPromo = {
  id: number;
  catDesc: number;
};

/* interface de carrinho */
export interface IDetails {
  id: string;
  cor: string;
  tamanho: string;
}
export interface ICart {
  id: number;
  quantity: number;
  details: IDetails[];
}
export interface ICartSlice {
  data: ICart[];
  totProduct: number;
  totValue: number;
}
/* type de Payload */
export type AddProductCart = {
  id: number;
  details: IDetails;
  price: number;
};
export type DeleteProduct = {
  id: number;
  price: number;
};
export type UpdateProduct = {
  id: number;
  details: IDetails;
  price: number;
};
