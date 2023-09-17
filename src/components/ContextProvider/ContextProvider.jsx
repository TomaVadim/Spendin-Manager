import { createContext } from "react"

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const contextValue = {
    basename: '/my-app',
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider };