# Merci Cafe Menu

A modern, responsive web application for displaying the Merci Cafe menu with a clean and user-friendly interface.

## Features

- **Modern UI**: Built with React, Material UI, and TailwindCSS
- **Responsive Design**: Mobile-first approach that works on all device sizes
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support
- **Dark Mode**: Toggle between light and dark themes
- **Performance Optimized**: Lazy loading images and optimized components

## Technology Stack

- **Frontend Framework**: React 18
- **UI Libraries**: Material UI, TailwindCSS
- **Type Safety**: TypeScript
- **Testing**: Jest, React Testing Library
- **Code Quality**: ESLint, Prettier
- **Accessibility**: ARIA best practices, keyboard navigation

## Project Structure

```
merci-menu/
├── public/             # Static assets
│   ├── images/         # Menu item images
│   └── index.html      # HTML entry point
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── card/       # Menu item card component
│   │   ├── darkMode/   # Dark mode toggle component
│   │   └── tab/        # Tab navigation component
│   ├── theme/          # Theme configuration
│   ├── types/          # TypeScript type definitions
│   ├── __tests__/      # Application tests
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   ├── index.js        # JavaScript entry point
│   ├── index.css       # Global styles
│   └── Menu-Items.js   # Menu data
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── .clinerules         # Project technical standards
├── tailwind.config.js  # TailwindCSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Technical Standards

This project follows the technical standards defined in the `.clinerules` file, which includes:

- **Code Quality**: React best practices, TypeScript, ES6 modules, consistent naming
- **UI Styling**: TailwindCSS & Material UI design principles
- **Formatting**: Prettier, ESLint with specific rules for consistency
- **Performance**: Lazy loading, optimized images, limited re-renders
- **Security**: No hardcoded secrets, secure API communication
- **Accessibility**: WCAG 2.1 AA compliance, ARIA attributes, keyboard navigation
- **Testing**: Jest, React Testing Library with minimum coverage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/merci-menu.git
   cd merci-menu
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run lint:fix` - Fixes ESLint issues automatically
- `npm run format` - Formats code with Prettier

## Accessibility Features

- Semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- Skip to content link
- High contrast mode support
- Screen reader friendly content

## Performance Optimizations

- Lazy loading images
- Optimized component rendering
- Code splitting for better load times
- Efficient state management

## License

This project is licensed under the MIT License - see the LICENSE file for details.
