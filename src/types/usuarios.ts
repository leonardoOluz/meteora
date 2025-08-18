/* type de login */
export interface ILogin {
  email: string;
  password: string;
}
/* type de usuario */
export type Usuario = {
  id?: number;
  nome: string;
  email: string;
  password: string;
  verifyPassword: string;
};
/* type token */
export type Token = {
  email: string;
  token: string;
  refreshToken: string;
};

/* types de usuarios para salvar com localstorage versão atualizda*/
export type DateUsuario = {
  nome: string;
  email: string;
  password: string;
};
export type UsuarioState = {
  id: string;
  nome: string;
  accessToken: string;
  refreshToken: string;
  isLogado?: boolean;
};
export type UsuarioLocalStorage = {
  id: string;
  nome: string;
  email: string;
  hash: string;
  salt: string;
  createdAt: Date;
  updatedAt?: Date;
};
