export function setStorage<T = unknown>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key: string) {
  const value = localStorage.getItem(key);
  return (value ? JSON.parse(value) : null) as unknown;
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}