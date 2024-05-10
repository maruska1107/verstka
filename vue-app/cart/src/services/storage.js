export default function storageService() {
  const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (key) => {
    localStorage.removeItem(key);
  };

  const has = (key) => {
    return !!localStorage[key];
  };

  const clear = (key) => {
    localStorage.clear();
  };

  return { get, set, remove, has, clear };
}
