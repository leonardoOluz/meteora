import store from "@/store";

export type RootState = ReturnType<typeof store.getState>;


/* interface de carrinho */
export interface IDetails {
  cor: string;
  tamanho: string
}
export interface ICart {
  id: number;
  quantity: number;
  details: IDetails[];
}

export interface IProductCart {
  id: number;
  details: IDetails
}