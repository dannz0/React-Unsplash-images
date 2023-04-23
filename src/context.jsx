import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = function ({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = function () {
    const toggleTheme = !isDarkTheme;

    setIsDarkTheme(toggleTheme);

    document.body.classList.toggle('dark-theme', toggleTheme);
  };

  return (
    <AppContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
