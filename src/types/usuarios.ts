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
