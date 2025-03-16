import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../theme/ThemeProvider';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Tooltip title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <IconButton
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        color="inherit"
        className="transition-transform duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;