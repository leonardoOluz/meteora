import { Token } from "@/types/usuarios";

export function getSessionStorage(key: string) {
  return sessionStorage.getItem(key);
}

export function setSessionStorage(key: string, value: Token) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function removeSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}
