import apiCep from "@/api";
import { v4 as uuidv4 } from "uuid";
import { IData } from "@/types/checkout";
import { Favorite, IFrete, IPedido } from "@/types/store";
import {
  DateUsuario,
  ILogin,
  UsuarioLocalStorage,
  UsuarioState,
} from "@/types/usuarios";
import { getSessionStorage, setSessionStorage } from "@/utils/session";
import { getStorage, setStorage } from "@/utils/starage";
import { generateSalt } from "./utils/generateSalt";
import { generateHash } from "./utils/generateHash";
import { verifyPassword } from "./utils/verifyPassword";
import { generateAccessToken } from "./utils/generateAccessToken";
import { storeTokens } from "./utils/storeTokens";
import { getAccessToken } from "./utils/getAccessToken";
import { generateRefreshToken } from "./utils/generateRefreshToken";

export const fetchConsultaCep = async (cep: string): Promise<IData> => {
  if (!cep || cep.length < 8) {
    throw new Error("O campo CEP é obrigatório");
  }
  try {
    const { data } = await apiCep.get<IData>(`/ws/${cep}/json/`);
    if (data.erro) {
      throw new Error("O CEP não existe ou é inválido");
    }
    return data;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Ocorreu um erro desconhecido");
    }
  }
};
export const simulateShipping = async (totCart: number): Promise<IFrete> => {
  if (totCart < 1) {
    return {
      service: "Sem produto",
      price: 0,
      deliveryTime: "N/A",
      isFrete: false,
    };
  }
  try {
    await new Promise((res) => setTimeout(res, 500));
    const price = [10.0, 15.0, 20.0, 25.0, 30.0, 50.0, 75.0, 100.0, 120.0, 150.0];
    const randomPrice = (
      price[totCart - 1] + (Math.random() * 100) / price[totCart - 1]
    ).toFixed(2);
    const minDeliveryDays = 2;
    const maxDeliveryDays = 15;
    const randomDeliveryDays = Math.floor(Math.random() * (maxDeliveryDays - minDeliveryDays + 1)) + minDeliveryDays;
    return {
      service: "Entrega Padrão",
      price: parseFloat(randomPrice),
      deliveryTime: `${randomDeliveryDays} dias úteis`,
      isFrete: true,
    };
  } catch (error) {
    console.error("Erro ao simular o frete:", error);
    return {
      service: "Erro na simulação",
      price: 0,
      deliveryTime: "N/A",
      isFrete: false,
    };
  }
};

/* Função para adicionar um novo usuário */
export const addNewUserFetch = async (userData: DateUsuario): Promise<UsuarioState> => {
  /* Gerando o hash e o salt */
  const salt = generateSalt();
  const hash = await generateHash(userData.password, salt);
  const newUser: UsuarioLocalStorage = {
    id: uuidv4(),
    nome: userData.nome,
    email: userData.email,
    createdAt: new Date(),
    hash,
    salt,
  };
  try {
    const user = getStorage("user") as UsuarioLocalStorage[];
    if (user && user.some((u: UsuarioLocalStorage) => u.email === userData.email)) {
      throw new Error("Email já cadastrado, tente outro email ou faça login");
    }
    if (user) {
      setStorage("user", [...user, newUser]);
    } else {
      setStorage("user", [newUser]);
    }
    const userState: UsuarioState = {
      id: newUser.id,
      nome: newUser.nome,
      refreshToken: generateRefreshToken(),
      accessToken: generateAccessToken(),
      isLogado: true,
    };
    storeTokens(userState.accessToken, userState.refreshToken);
    setSessionStorage("dataUser", {
      id: userState.id,
      nome: userState.nome,
      accessToken: userState.accessToken,
      refreshToken: userState.refreshToken,
    });
    return userState;
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
    throw error;
  }
};
/* Função para autenticar o usuário */
export const authenticateUserFetch = async (data: ILogin): Promise<UsuarioState> => {
  try {
    const usuarios = getStorage("user") as UsuarioLocalStorage[];
    if (!Array.isArray(usuarios) || !usuarios.some((u) => u.email === data.email)) {
      throw new Error("Email não cadastrado");
    }
    const user = usuarios.find((user) => user.email === data.email) as UsuarioLocalStorage;
    const isValid = await verifyPassword(data.password, user.salt, user.hash);
    if (!isValid) {
      throw new Error("Email ou senha incorretos");
    }
    const userState: UsuarioState = {
      id: user.id,
      nome: user.nome,
      refreshToken: generateRefreshToken(),
      accessToken: generateAccessToken(),
      isLogado: true,
    };
    storeTokens(userState.accessToken, userState.refreshToken);
    setSessionStorage("dataUser", {
      id: userState.id,
      nome: userState.nome,
      accessToken: userState.accessToken,
      refreshToken: userState.refreshToken,
    });
    return userState;
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    throw error;
  }
};
/* Função para verificar se o usuário está logado */
export const checkAuthenticated = async (): Promise<UsuarioState> => {
  try {
    const validToken = getAccessToken();
    const dataUser = getSessionStorage("dataUser") as UsuarioState;
    if (!validToken || validToken !== dataUser.accessToken) {
      return { isLogado: false } as UsuarioState;
    }
    return {
      id: dataUser.id,
      nome: dataUser.nome,
      accessToken: dataUser.accessToken,
      refreshToken: dataUser.refreshToken,
      isLogado: true,
    };
  } catch (error) {
    console.error("Erro ao verificar autenticação:", error);
    throw error;
  }
};

/* Api simular pedido */

export const getOrder = async (): Promise<IPedido[]> => {
  try {
    const user = getSessionStorage("dataUser") as UsuarioState;
    if (!user) {
      throw new Error("Usuário não autenticado");
    }
    const pedidos = getStorage("pedidos") as IPedido[];
    if (Array.isArray(pedidos)) {
      return pedidos.filter((p) => p.idUser === user.id);
    }
    return [];
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    throw error;
  }
};
export const createOrder = async (newPedidos: IPedido): Promise<IPedido[]> => {
  try {
    const user = getSessionStorage("dataUser") as UsuarioState;
    if (!user) {
      throw new Error("Usuário não autenticado");
    }
    const addUserPedido = {
      ...newPedidos,
      idUser: user.id,
      id: uuidv4(),
    };
    const pedidos = getStorage("pedidos") as IPedido[];
    let novosPedidos: IPedido[];
    if (Array.isArray(pedidos)) {
      novosPedidos = [...pedidos, addUserPedido];
    } else {
      novosPedidos = [addUserPedido];
    }
    setStorage("pedidos", novosPedidos);
    return novosPedidos.filter((p) => p.idUser === user.id);
  } catch (error) {
    console.error("Erro ao adicionar pedido:", error);
    throw error;
  }
};

/* Api simular favoritos */

export const getFavorites = async (): Promise<Favorite[]> => {
  try {
    const user = getSessionStorage("dataUser") as UsuarioState;
    if (!user) {
      throw new Error("Usuário não autenticado");
    }
    const favoritos = getStorage("favoritos") as Favorite[];
    if (Array.isArray(favoritos)) {
      return favoritos.filter((f) => f.idUser === user.id);
    }
    return [];
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    throw error;
  }
};

export const createFavorite = async (newFavorite: Favorite): Promise<Favorite[]> => {
  try {
    const user = getSessionStorage("dataUser") as UsuarioState;
    if (!user) {
      throw new Error("Usuário não autenticado");
    }

    const addUserFavorite = {
      ...newFavorite,
      idUser: user.id,
      id: uuidv4(),
    };

    const favoritos = getStorage("favoritos") as Favorite[];
    let novosFavoritos: Favorite[];
    if (Array.isArray(favoritos)) {
      novosFavoritos = [...favoritos, addUserFavorite];
    } else {
      novosFavoritos = [addUserFavorite];
    }
    setStorage("favoritos", novosFavoritos);
    return novosFavoritos.filter((f) => f.idUser === user.id);
  } catch (error) {
    console.error("Erro ao adicionar favorito:", error);
    throw error;
  }
}

export const deleteFavorite = async (idProduct: number): Promise<Favorite[]> => {
  try {
    const user = getSessionStorage("dataUser") as UsuarioState;
    if (!user) {
      throw new Error("Usuário não autenticado");
    }

    const favoritos = getStorage("favoritos") as Favorite[];
    if (!Array.isArray(favoritos)) {
      return [];
    }

    const restFavorites = favoritos.filter((f) => f.idUser !== user.id);
    const userFavorites = favoritos.filter((f) => f.idUser === user.id);
    const newFavoritosUser = userFavorites.filter((f) => f.idProduct !== idProduct);

    setStorage("favoritos", [
      ...restFavorites,
      ...newFavoritosUser
    ]);
    return newFavoritosUser;
  } catch (error) {
    console.error("Erro ao deletar favorito:", error);
    throw error;
  }
}