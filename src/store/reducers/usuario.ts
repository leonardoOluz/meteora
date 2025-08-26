// Retorna o primeiro nome com a primeira letra maiúscula
export function getFirstNameCapitalized(name: string): string {
  const firstName = name.split(" ")[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}
import { DateUsuario, ILogin, UsuarioState } from "@/types/usuarios";
import { clearSessionStorage } from "@/utils/session";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showSuccessNotification } from "@/utils/showSuccessNotification";
import {
  addNewUserFetch,
  authenticateUserFetch,
  checkAuthenticated,
} from "@/service";
import { showWrongToast } from "@/utils/showWrongToast";
import { showInfoToast } from "@/utils/showInfoToast";

const initialState = {
  isLogado: false,
} as UsuarioState;

export const addNewUser = createAsyncThunk<UsuarioState, DateUsuario>(
  "usuario/addUser",
  addNewUserFetch
);
export const loginUserFetch = createAsyncThunk<UsuarioState, ILogin>(
  "usuario/authenticateUser",
  authenticateUserFetch
);
export const checkAuthenticatedUser = createAsyncThunk<UsuarioState>(
  "usuario/checkAuthenticated",
  checkAuthenticated
);

import { getFavorites, getOrder } from "@/service";
import { clearFavorito, setFavorito } from "./favorito";
import { clearOrders, getOrders } from "./pedidos";
import { clearAddress } from "./address";
import { clearCart } from "./carrinho";
import { clearCredCard } from "./credCard";
import { resetFrete } from "./frete";
import { clearPay } from "./pay";

export const loginUser = createAsyncThunk<UsuarioState, ILogin>(
  "usuario/authenticateUser",
  async (loginData, { dispatch }) => {
    // Aqui você faz o login (ex: authenticateUserFetch)
    const user = await authenticateUserFetch(loginData);

    // Após login, carrega favoritos e pedidos
    const [favorites, orders] = await Promise.all([getFavorites(), getOrder()]);
    // Dispara actions para salvar no redux
    dispatch(setFavorito(favorites));
    dispatch(getOrders(orders));
    return user;
  }
);

export const logoutUser = createAsyncThunk(
  "usuario/logoutUser",
  async (_, { dispatch }) => {
    dispatch(clearAddress());
    dispatch(clearCart());
    dispatch(clearCredCard());
    dispatch(clearFavorito());
    dispatch(resetFrete());
    dispatch(clearPay());
    dispatch(clearOrders());
    dispatch(logout());
  }
);

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    logout() {
      clearSessionStorage();
      showInfoToast("Usuário deslogado com sucesso!");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNewUser.pending, () => {});
    builder.addCase(addNewUser.fulfilled, (_, { payload }) => {
      showSuccessNotification(
        `Seja bem vindo ${getFirstNameCapitalized(payload.nome)}`
      );
      return payload;
    });
    builder.addCase(addNewUser.rejected, (_, action) => {
      showWrongToast(action.error.message || "Erro ao cadastrar usuário");
      return initialState;
    });
    builder.addCase(checkAuthenticatedUser.pending, () => {});
    builder.addCase(checkAuthenticatedUser.fulfilled, (_, { payload }) => {
      if (!payload.isLogado) {
        clearSessionStorage();
      }
      return payload;
    });
    builder.addCase(checkAuthenticatedUser.rejected, (_, action) => {
      clearSessionStorage();
      showWrongToast(action.error.message || "Erro ao verificar autenticação");
      return initialState;
    });
    builder.addCase(loginUser.fulfilled, (_, { payload }) => {
      showSuccessNotification(
        `Seja bem vindo ${getFirstNameCapitalized(payload.nome)}`
      );
      return payload;
    });
    builder.addCase(loginUser.rejected, (_, action) => {
      showWrongToast(action.error.message || "Erro ao fazer login");
      return initialState;
    });
  },
});

export const { logout } = usuarioSlice.actions;
export default usuarioSlice.reducer;
