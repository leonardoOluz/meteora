import apiCep from "@/api";
import { v4 as uuidv4 } from "uuid";
import { IData } from "@/types/checkout";
import { IFrete, IPedido } from "@/types/store";
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
export const simulateShipping = (totCart: number): Promise<IFrete> => {
  // Simula um atraso na "resposta da API" para tornar mais realista
  return new Promise((resolve) => {
    try {
      if (totCart < 1) {
        resolve({
          service: "Sem produto",
          price: 0,
          deliveryTime: "N/A",
          isFrete: false,
        });
      }
      setTimeout(() => {
        const price = [
          10.0, 15.0, 20.0, 25.0, 30.0, 50.0, 75.0, 100.0, 120.0, 150.0,
        ];
        const randomPrice = (
          price[totCart - 1] +
          (Math.random() * 100) / price[totCart - 1]
        ).toFixed(2); //; Gera um valor entre 10 e 150
        const minDeliveryDays = 2;
        const maxDeliveryDays = 15;
        const randomDeliveryDays =
          Math.floor(Math.random() * (maxDeliveryDays - minDeliveryDays + 1)) +
          minDeliveryDays; // Gera um número inteiro de dias

        resolve({
          service: "Entrega Padrão",
          price: parseFloat(randomPrice),
          deliveryTime: `${randomDeliveryDays} dias úteis`,
          isFrete: true,
          // Você pode adicionar mais campos aqui, como transportadora, tipo de frete, etc.
        });
      }, 500); // Simula 500ms de atraso
    } catch (error) {
      console.error("Erro ao simular o frete:", error);
      resolve({
        service: "Erro na simulação",
        price: 0,
        deliveryTime: "N/A",
        isFrete: false,
      });
    }
  });
};

/* Função para adicionar um novo usuário */
export const addNewUserFetch = async (
  userData: DateUsuario
): Promise<UsuarioState> => {
  return new Promise((resolve, reject) => {
    const process = async () => {
      /* Gerando o hash e o salt */
      const salt = generateSalt();
      const hash = await generateHash(userData.password, salt);
      /* Criando um novo usuário */
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
        // Verifica se já existe um usuário com o mesmo email
        if (
          user &&
          user.some((u: UsuarioLocalStorage) => u.email === userData.email)
        ) {
          reject(
            new Error("Email já cadastrado, tente outro email ou faça login")
          );
          return;
        }
        /* Adicionando o usuário */
        if (user) {
          const usuarios: UsuarioLocalStorage[] = user as UsuarioLocalStorage[];
          usuarios.push(newUser);
          setStorage("user", usuarios);
        } else {
          setStorage("user", [newUser]);
        }

        /* Criando o estado do usuário */
        const userState: UsuarioState = {
          id: newUser.id,
          nome: newUser.nome,
          refreshToken: generateRefreshToken(), // Substitua por um refresh token real se necessário
          accessToken: generateAccessToken(), // Substitua por um token real se necessário
          isLogado: true,
        };
        // Armazena os tokens no localStorage
        storeTokens(userState.accessToken, userState.refreshToken);
        /* Salvando o estado do usuário */
        setSessionStorage("dataUser", {
          id: userState.id,
          nome: userState.nome,
          accessToken: userState.accessToken,
          refreshToken: userState.refreshToken,
        });
        /* Resolvendo a promessa com o estado do usuário */
        resolve(userState);
      } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
        reject(error);
      }
    };
    process();
  });
};
/* Função para autenticar o usuário */
export const authenticateUserFetch = async (
  data: ILogin
): Promise<UsuarioState> => {
  return new Promise((resolve, reject) => {
    const process = async () => {
      try {
        const usuarios = getStorage("user") as UsuarioLocalStorage[];
        /* verifica se o email existe */
        if (
          !Array.isArray(usuarios) ||
          !usuarios.some((u) => u.email === data.email)
        ) {
          reject(new Error("Email não cadastrado"));
          return;
        }

        const user = usuarios.find(
          (user) => user.email === data.email
        ) as UsuarioLocalStorage;
        const isValid = await verifyPassword(
          data.password,
          user.salt,
          user.hash
        );
        // Verifica se a senha está correta
        if (!isValid) {
          reject(new Error("Email ou senha incorretos"));
          return;
        }
        /* const userState: UsuarioState = */
        const userState: UsuarioState = {
          id: user.id,
          nome: user.nome,
          refreshToken: generateRefreshToken(), // token fictício para simulação
          accessToken: generateAccessToken(), // refreshToken fictício para simulação
          isLogado: true,
        };
        // Armazena os tokens no localStorage
        storeTokens(userState.accessToken, userState.refreshToken);
        // Se a senha estiver correta, armazena os dados do usuário na sessão
        setSessionStorage("dataUser", {
          id: userState.id,
          nome: userState.nome,
          accessToken: userState.accessToken,
          refreshToken: userState.refreshToken,
        });
        resolve(userState);
      } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
        reject(error);
      }
    };
    process();
  });
};
/* Função para verificar se o usuário está logado */
export const checkAuthenticated = async (): Promise<UsuarioState> => {
  return new Promise((resolve, reject) => {
    try {
      const validToken = getAccessToken();
      const dataUser = getSessionStorage("dataUser") as UsuarioState;

      if (!validToken || validToken !== dataUser.accessToken) {
        console.warn("Token inválido ou expirado");
        resolve({ isLogado: false } as UsuarioState);
        return;
      }
      console.warn("Usuário autenticado:", dataUser);
      resolve({
        id: dataUser.id,
        nome: dataUser.nome,
        accessToken: dataUser.accessToken,
        refreshToken: dataUser.refreshToken,
        isLogado: true,
      });
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      reject(error);
    }
  });
};

/* Api simular pedido */

export const getOrder = async (): Promise<IPedido[]> => {
  return new Promise((resolve, reject) => {
    try {
      /* Verifica se o usuário está logado */
      const user = getSessionStorage("dataUser") as UsuarioState;
      if (!user) {
        console.warn("Usuário nao autenticado", user);
        reject(new Error("Usuário não autenticado"));
        return;
      }
      /* Pegando os pedidos do localStorage */
      const pedidos = getStorage("pedidos") as IPedido[];
      if (Array.isArray(pedidos)) {
        resolve(pedidos.filter((p) => p.idUser === user.id));
        return;
      }
      resolve([]);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
      reject(error);
    }
  });
}
export const createOrder = async (newPedidos: IPedido): Promise<IPedido[]> => {
  return new Promise((resolve, reject) => {
    try {
      console.log("Criando pedido:", newPedidos);
      /* Verifica se o usuário está logado */
      const user = getSessionStorage("dataUser") as UsuarioState;
      if (!user) {
        console.warn("Usuário nao autenticado", user);
        reject(new Error("Usuário não autenticado"));
        return;
      }
      
      /* Adicionando o id do usuário */
      const addUserPedido = {
        ...newPedidos,
        idUser: user.id,
        id: uuidv4(),
      };
      
      /* Adicionando o pedido */
      const pedidos = getStorage("pedidos") as IPedido[];
      if (Array.isArray(pedidos)) {
        pedidos.push(addUserPedido);
        setStorage("pedidos", pedidos);
        resolve(pedidos.filter((p) => p.idUser === user.id));
        return;
      }
      setStorage("pedidos", [addUserPedido]);
      resolve([addUserPedido]);
    } catch (error) {
      console.error("Erro ao adicionar pedido:", error);
      reject(error);
    }
  });
};
