import store from "@/store";
import { CatPromocao, ProductCard } from "./componentTypes";
import { IFormInputEndereco } from "./checkout";

export type RootState = ReturnType<typeof store.getState>;
/* interface de promocoes */
export interface IPromocoes {
  catPromocao: CatPromocao;
  productId: number[];
}
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
  isCartDropDown: boolean;
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
/* type de selectors */
export type KeysIProductString = Extract<
  keyof ProductCard,
  "titulo" | "categoria" | "descricao"
>;
/* IFrete */
export interface IFrete {
  service: string;
  price: number;
  deliveryTime: string;
  isFrete: boolean;
}
export interface IPayment {
  method: "Pix" | "Cartão de Crédito" | "Boleto" | "";
  checkedPay: boolean;
}
export interface ICredCard {
  numberCard: string;
  name: string;
  validity: string;
  cvv: string;
}

/* Enum */
export enum PaymentMethod {
  Pix = "Pix",
  CartaoDeCredito = "Cartão de Crédito",
  Boleto = "Boleto",
  Nenhum = "",
}

export enum CheckoutSteps {
  ADDRESS = "address",
  PAY = "pay",
  SUMMARY = "summary",
  CHECKOUT = "checkout",
  PEDIDOS = "pedidos",
}

/* IPedido */

export interface IPedido {
  id?: string;
  status: "pendente" | "concluido" | "cancelado";
  date: ICart[];
  totValue: number;
  frete: IFrete;
  payment: IPayment;
  address: IFormInputEndereco;
}

/* IFavorito */
export type Favorite = {
  idProduct: number;
  id?: string;
};
