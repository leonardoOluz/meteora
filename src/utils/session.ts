import { Token } from "@/types/usuarios";

export function getSessionStorage(key: string) {
  const token = sessionStorage.getItem(key);
  return token ? JSON.parse(token) : null;
}

export function setSessionStorage(key: string, value: Token) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function removeSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}
