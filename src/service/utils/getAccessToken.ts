import { getSessionStorage } from "@/utils/session";

export const getAccessToken = (): string | null => {
  const accessToken = getSessionStorage('accessToken') as string | null;
  const expiresIn = getSessionStorage('accessTokenExpiresIn') as string | null;
  if (!accessToken || !expiresIn) {
    return null;
  }
  // Se o token expirou, retorne nulo
  if (Date.now() > parseInt(expiresIn, 10)) {
    return null;
  }
  return accessToken;
};