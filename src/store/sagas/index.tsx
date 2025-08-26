import { all } from "redux-saga/effects";
import { watchFetchGetPedidosSaga } from "./pedidosSaga";
import { watchFetchGetFavoritosSaga } from "./favoritosSaga";

export default function* rootSaga (){
  yield all([watchFetchGetFavoritosSaga(),watchFetchGetPedidosSaga()]);
}