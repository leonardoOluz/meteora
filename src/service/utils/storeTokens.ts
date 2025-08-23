import { setSessionStorage } from "@/utils/session";

// Funções para gerenciar o localStorage
export const storeTokens = (accessToken: string, refreshToken: string) => {
  const expiresIn = Date.now() + 240 * 1000; // Simula 240 segundos de validade para o token de acesso
  setSessionStorage('accessToken', accessToken);
  setSessionStorage('refreshToken', refreshToken);
  setSessionStorage('accessTokenExpiresIn', String(expiresIn));
};