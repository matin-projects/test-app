import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { ThemeProvider } from '../theme/ThemeProvider';

// Mock the theme provider
jest.mock('../theme/ThemeProvider', () => ({
  useTheme: () => ({ darkMode: false }),
  ThemeProvider: ({ children }) => <div>{children}</div>,
}));

// Mock the Tab component
jest.mock('../components/tab/Tab', () => {
  return {
    __esModule: true,
    default: ({ categories }) => (
      <div data-testid="mock-tab">
        <span>Mock Tab Component</span>
        <span>Categories: {Object.keys(categories).join(', ')}</span>
      </div>
    ),
  };
});

// Mock the DarkModeToggle component
jest.mock('../components/darkMode/DarkModeToggle', () => {
  return {
    __esModule: true,
    default: () => <button data-testid="mock-dark-mode-toggle">Toggle Dark Mode</button>,
  };
});

describe('App Component', () => {
  test('renders header with cafe name', () => {
    render(<App />);
    
    // Check if the cafe name is rendered
    expect(screen.getByText('Merci Cafe')).toBeInTheDocument();
    
    // Check if the tagline is rendered
    expect(screen.getByText('Freshly Brewed Coffee & Delightful Pastries')).toBeInTheDocument();
  });

  test('renders the Tab component with menu categories', () => {
    render(<App />);
    
    // Check if the Tab component is rendered
    expect(screen.getByTestId('mock-tab')).toBeInTheDocument();
    
    // Check if categories are passed to the Tab component
    // This assumes menuItems has these categories
    expect(screen.getByText(/Categories:/)).toBeInTheDocument();
  });

  test('renders the DarkModeToggle component', () => {
    render(<App />);
    
    // Check if the DarkModeToggle component is rendered
    expect(screen.getByTestId('mock-dark-mode-toggle')).toBeInTheDocument();
  });

  test('has proper accessibility structure', () => {
    render(<App />);
    
    // Check for proper heading role
    const heading = screen.getByRole('heading', { name: 'Merci Cafe' });
    expect(heading).toBeInTheDocument();
    
    // Check for proper main content role
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});