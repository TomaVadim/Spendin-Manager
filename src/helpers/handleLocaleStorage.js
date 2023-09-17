export const handleLocaleStorage = (key, value) => {
  localStorage.setItem(key, value);
  return localStorage.getItem(key);
};
