import React, { useContext } from 'react';
import { LanguageContext } from './contexts';

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}