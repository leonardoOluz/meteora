import { call, put, select, takeLatest } from "redux-saga/effects";
import { getOrder } from "@/service";
import { fetchGetPedidosSaga, getOrders } from "../reducers/pedidos";
import { RootState } from "../index";

function* fetchPedidosSaga() {
  const pedidos: import("@/types/store").IPedido[] = yield select(
    (state: RootState) => state.pedidos
  );
  if (pedidos && pedidos.length > 0) return;
  try {
    const data: import("@/types/store").IPedido[] = yield call(getOrder);
    yield put(getOrders(data));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
  }
};

export function* watchFetchGetPedidosSaga() {
  yield takeLatest(fetchGetPedidosSaga, fetchPedidosSaga);
};