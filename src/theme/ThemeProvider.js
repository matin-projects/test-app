import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a context for theme management
const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Check if user has a preference stored in localStorage or prefers dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Update localStorage when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    // Add or remove dark class from document for Tailwind dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Create Material UI theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#203732',
        light: '#4a7d76',
        dark: '#152521',
      },
      secondary: {
        main: '#6c757d',
        light: '#868e96',
        dark: '#495057',
      },
      background: {
        default: darkMode ? '#121212' : '#ffffff',
        paper: darkMode ? '#1e1e1e' : '#f8f9fa',
      },
      text: {
        primary: darkMode ? '#e0e0e0' : '#203732',
      },
    },
    typography: {
      fontFamily: '"Yanone Kaffeesatz", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '9999px', // Rounded full for buttons
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '0.75rem', // Rounded-xl for cards
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;