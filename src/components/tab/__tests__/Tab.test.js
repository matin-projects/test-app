import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabComponent from '../Tab';
import { ThemeProvider } from '../../../theme/ThemeProvider';

// Mock the Material UI components and theme providers
jest.mock('@mui/material/styles', () => ({
  useTheme: () => ({
    palette: {
      primary: { main: '#203732', light: '#4a7d76' },
    },
    breakpoints: {
      down: () => false,
    },
  }),
}));

jest.mock('../../../theme/ThemeProvider', () => ({
  useTheme: () => ({ darkMode: false }),
  ThemeProvider: ({ children }) => <div>{children}</div>,
}));

// Mock the Card component
jest.mock('../../card/card', () => {
  return {
    __esModule: true,
    default: ({ title, description }) => (
      <div data-testid="mock-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    ),
  };
});

describe('Tab Component', () => {
  const mockCategories = {
    Coffee: [
      {
        name: 'Espresso',
        description: 'Strong coffee',
        priceHot: 'MYR 7.00',
      },
      {
        name: 'Latte',
        description: 'Coffee with milk',
        priceHot: 'MYR 12.00',
        priceIced: 'MYR 13.00',
      },
    ],
    Tea: [
      {
        name: 'Green Tea',
        description: 'Healthy tea',
        priceHot: 'MYR 10.00',
      },
    ],
  };

  test('renders all category tabs', () => {
    render(
      <ThemeProvider>
        <TabComponent categories={mockCategories} />
      </ThemeProvider>,
    );

    // Check if all category tabs are rendered
    expect(screen.getByText('Coffee')).toBeInTheDocument();
    expect(screen.getByText('Tea')).toBeInTheDocument();
  });

  test('displays items from the first category by default', () => {
    render(
      <ThemeProvider>
        <TabComponent categories={mockCategories} />
      </ThemeProvider>,
    );

    // Check if items from the first category (Coffee) are displayed
    expect(screen.getByText('Espresso')).toBeInTheDocument();
    expect(screen.getByText('Strong coffee')).toBeInTheDocument();
    expect(screen.getByText('Latte')).toBeInTheDocument();
    expect(screen.getByText('Coffee with milk')).toBeInTheDocument();
    
    // Check that items from other categories are not displayed
    expect(screen.queryByText('Green Tea')).not.toBeInTheDocument();
  });

  test('switches to display items from selected category when tab is clicked', () => {
    render(
      <ThemeProvider>
        <TabComponent categories={mockCategories} />
      </ThemeProvider>,
    );

    // Click on the Tea tab
    fireEvent.click(screen.getByText('Tea'));

    // Check if items from the Tea category are now displayed
    expect(screen.getByText('Green Tea')).toBeInTheDocument();
    expect(screen.getByText('Healthy tea')).toBeInTheDocument();
    
    // Check that items from other categories are not displayed
    expect(screen.queryByText('Espresso')).not.toBeInTheDocument();
    expect(screen.queryByText('Latte')).not.toBeInTheDocument();
  });

  test('has proper accessibility attributes', () => {
    render(
      <ThemeProvider>
        <TabComponent categories={mockCategories} />
      </ThemeProvider>,
    );

    // Check for proper tab role
    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBe(2); // Coffee and Tea tabs
    
    // Check for proper tabpanel role
    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toBeInTheDocument();
  });
});