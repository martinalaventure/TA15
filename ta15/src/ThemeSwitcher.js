import React, { useContext } from 'react';
import { ThemeContext } from './contexts';

export function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={switchTheme}>
      Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
}