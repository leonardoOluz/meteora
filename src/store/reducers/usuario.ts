import { ILogin, Usuario } from "@/types/usuarios";
import {
  getSessionStorage,
  removeSessionStorage,
  setSessionStorage,
} from "@/utils/session";
import { getStorage, setStorage } from "@/utils/starage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import token from "@/json/token.json";
import { toast } from "react-toastify";

const initialState = {
  usuario: {} as Usuario,
  isLogado: false,
};

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    createUser: (state, { payload }: PayloadAction<Usuario>) => {
      /* salvando usuarios no localStarage temporario ate criar um backend */
      /* Obs, não estou usando json-server pois não funciona em production */
      toast.success("Cadastro realizado com sucesso", {
        autoClose: 2000,
        theme: "colored",
        hideProgressBar: true,
      });
      const user = getStorage("user");
      if (user) {
        const usuarios: Usuario[] = JSON.parse(user);
        usuarios.push(payload);
        setStorage("user", JSON.stringify(usuarios));
        setSessionStorage("token", {
          email: payload.email,
          token: token[0].token,
          refreshToken: token[0].refreshToken,
        });

        return {
          ...state,
          isLogado: true,
          usuario: payload,
        }; // retorna o usuario que acabou de ser criado
      }
      setSessionStorage("token", {
        email: payload.email,
        token: token[0].token,
        refreshToken: token[0].refreshToken,
      });
      setStorage("user", JSON.stringify([payload]));
      return {
        ...state,
        isLogado: true,
        usuario: payload,
      }; // retorna o usuario que acabou de ser criado
    },
    authenticateUser(state, { payload }: PayloadAction<ILogin>) {
      const usuarios: Usuario[] = JSON.parse(getStorage("user") || "[]");
      const user = usuarios.find(
        (user) =>
          user.email === payload.email && user.password === payload.password
      );
      if (!user) {
        toast.error("Email ou senha incorretos", {
          autoClose: 2000,
          hideProgressBar: true,
          theme: "colored",
        });
        return {
          ...state,
          isLogado: false,
        };
      }

      toast.success("Logado com sucesso", {
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
      });

      setSessionStorage("token", {
        email: payload.email,
        token: token[0].token,
        refreshToken: token[0].refreshToken,
      });
      return {
        ...state,
        isLogado: true,
        usuario: user,
      };
    },
    logout(state) {
      toast.success("Logout realizado com sucesso", {
        autoClose: 1000,
        theme: "colored",
        hideProgressBar: true,
      });
      removeSessionStorage("token");
      return {
        ...state,
        isLogado: false,
        usuario: {} as Usuario,
      };
    },
    isCheckLogin(state) {
      const token = getSessionStorage("token");
      if (token) {
        return {
          ...state,
          isLogado: true,
        };
      }
      return {
        ...state,
        isLogado: false,
        usuario: {} as Usuario,
      };
    },
  },
});

export const { createUser, authenticateUser, logout, isCheckLogin } =
  usuarioSlice.actions;
export default usuarioSlice.reducer;
