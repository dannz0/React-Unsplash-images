import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const checkDarkMode = function () {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;

  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

  return prefersDarkMode && storedDarkMode;
};

export const AppProvider = function ({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDarkMode());
  const [searchTerm, setSearchTerm] = useState('cats');

  const toggleDarkTheme = function () {
    const toggleTheme = !isDarkTheme;

    setIsDarkTheme(toggleTheme);

    localStorage.setItem('darkTheme', toggleTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ toggleDarkTheme, isDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = function () {
  return useContext(AppContext);
};
