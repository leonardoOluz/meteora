export  function setStorage(key: string, value: string) {
  localStorage.setItem(key, value);
};

export  function getStorage(key: string) {
 const value = localStorage.getItem(key); 
  return value;
};

export  function removeStorage(key: string) {
  localStorage.removeItem(key);
};