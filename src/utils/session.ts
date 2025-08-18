export function getSessionStorage(key: string) {
  const value = sessionStorage.getItem(key);
  return (value ? JSON.parse(value) : null) as unknown;
}

export function setSessionStorage<T = unknown>(key: string, value: T) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function removeSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}

export function clearSessionStorage() {
  sessionStorage.clear();
}