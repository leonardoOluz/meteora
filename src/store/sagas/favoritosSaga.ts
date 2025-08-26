import { call, put, select, takeLatest } from "redux-saga/effects";
import { getFavorites } from "@/service";
import { RootState } from "../index";
import { fetchGetFavoritosSaga, setFavorito } from "../reducers/favorito";

function* fetchFavoritosSaga() {
  const favoritos: import("@/types/store").Favorite[] = yield select(
    (state: RootState) => state.favorito
  );
  if (favoritos && favoritos.length > 0) return;
  try {
    const data: import("@/types/store").Favorite[] = yield call(getFavorites);
    yield put(setFavorito(data));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
  }
}

export function* watchFetchGetFavoritosSaga() {
  yield takeLatest(fetchGetFavoritosSaga, fetchFavoritosSaga);
}
