import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { ThemeProvider } from '../../../theme/ThemeProvider';

// Mock the theme provider context
jest.mock('../../../theme/ThemeProvider', () => ({
  useTheme: () => ({ darkMode: false, toggleDarkMode: jest.fn() }),
  ThemeProvider: ({ children }) => <div>{children}</div>,
}));

describe('Card Component', () => {
  const mockProps = {
    title: 'Test Coffee',
    description: 'A delicious test coffee',
    price: 'MYR 10.00',
    priceHot: 'MYR 12.00',
    priceIced: 'MYR 14.00',
    image: '/images/test.jpg',
  };

  test('renders card with all information', () => {
    render(
      <ThemeProvider>
        <Card {...mockProps} />
      </ThemeProvider>,
    );

    // Check if title is rendered
    expect(screen.getByText('Test Coffee')).toBeInTheDocument();

    // Check if description is rendered
    expect(screen.getByText('A delicious test coffee')).toBeInTheDocument();

    // Check if prices are rendered
    expect(screen.getByText('MYR 10.00')).toBeInTheDocument();
    expect(screen.getByText('MYR 12.00')).toBeInTheDocument();
    expect(screen.getByText('MYR 14.00')).toBeInTheDocument();

    // Check if image is rendered with correct alt text
    const image = screen.getByAltText('Test Coffee');
    expect(image).toBeInTheDocument();
  });

  test('renders card without image when not provided', () => {
    const propsWithoutImage = { ...mockProps, image: undefined };

    render(
      <ThemeProvider>
        <Card {...propsWithoutImage} />
      </ThemeProvider>,
    );

    // Check if title is still rendered
    expect(screen.getByText('Test Coffee')).toBeInTheDocument();

    // Check that no image is rendered
    expect(screen.queryByAltText('Test Coffee')).not.toBeInTheDocument();
  });

  test('renders card with only required props', () => {
    const minimalProps = {
      title: 'Minimal Card',
      description: 'Just the basics',
    };

    render(
      <ThemeProvider>
        <Card {...minimalProps} />
      </ThemeProvider>,
    );

    // Check if title and description are rendered
    expect(screen.getByText('Minimal Card')).toBeInTheDocument();
    expect(screen.getByText('Just the basics')).toBeInTheDocument();

    // Check that no prices are rendered
    expect(screen.queryByText(/MYR/)).not.toBeInTheDocument();
  });

  // Accessibility test
  test('has proper accessibility attributes', () => {
    render(
      <ThemeProvider>
        <Card {...mockProps} />
      </ThemeProvider>,
    );

    // Check for proper heading role
    const heading = screen.getByRole('heading', { name: 'Test Coffee' });
    expect(heading).toBeInTheDocument();

    // Check for proper image alt text
    const image = screen.getByAltText('Test Coffee');
    expect(image).toBeInTheDocument();
  });
});
