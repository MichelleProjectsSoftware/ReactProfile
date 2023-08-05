import React, { useState, useContext } from 'react';

// Create the ThemeContext and provide default values
const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Custom hook to use the ThemeContext in other components
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeContext provider component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;