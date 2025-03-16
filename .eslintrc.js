module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    // Enforce single quotes
    quotes: ['error', 'single'],
    
    // Enforce trailing commas in multiline objects and arrays
    'comma-dangle': ['error', 'always-multiline'],
    
    // Enforce 2 spaces for indentation
    indent: ['error', 2],
    
    // Enforce max line length
    'max-len': ['error', { code: 100, ignoreUrls: true, ignoreStrings: true }],
    
    // Enforce consistent naming
    camelcase: ['error', { properties: 'never' }],
    
    // React specific rules
    'react/prop-types': 'off', // We're using TypeScript for type checking
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    
    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    
    // Security rules
    'no-eval': 'error',
    'no-implied-eval': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};