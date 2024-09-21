import React, { useContext } from 'react';
import { ThemeContext } from './contexts';

export function ThemeDisplay() {
  const { theme } = useContext(ThemeContext);
  return <div>Tema actual: {theme === 'light' ? 'Claro' : 'Oscuro'}</div>;
}