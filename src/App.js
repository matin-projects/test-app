import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import menuItems from './Menu-Items';
import Tab from './components/tab/Tab';
import DarkModeToggle from './components/darkMode/DarkModeToggle';
import { useTheme } from './theme/ThemeProvider';

function App() {
  const { darkMode } = useTheme();

  return (
    <Box
      className={`min-h-screen ${darkMode ? 'dark:bg-background-dark' : 'bg-background-light'} flex flex-col items-center`}
    >
      <AppBar position="static" color="primary" elevation={4}>
        <Toolbar className="flex flex-col items-center py-4">
          {/* <img src="/logo.png" className="w-32 h-auto mb-4" alt="logo" /> */}
          <Typography variant="h4" component="h1" className="font-extrabold mb-2">
            Merci Cafe
          </Typography>
          <Typography variant="subtitle1" className="font-medium">
            Freshly Brewed Coffee & Delightful Pastries
          </Typography>
          <Box className="absolute right-4 top-4">
            <DarkModeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" component="main" className="flex-grow p-4">
        <Tab categories={menuItems} />
      </Container>
    </Box>
  );
}

export default App;
