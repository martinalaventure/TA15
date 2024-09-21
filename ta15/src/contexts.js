import React from 'react';

export const LanguageContext = React.createContext({
  language: 'es',
  setLanguage: () => {},
});

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
});