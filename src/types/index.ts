// Type definitions for the Merci Menu application

// Menu item types
export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  priceHot?: string;
  priceIced?: string;
  image?: string;
}

export interface MenuCategories {
  [category: string]: MenuItem[];
}

// Theme types
export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Component prop types
export interface CardProps {
  image?: string;
  title: string;
  description: string;
  price?: string;
  priceHot?: string;
  priceIced?: string;
}

export interface TabProps {
  categories: MenuCategories;
}