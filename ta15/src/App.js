import React, { useState } from 'react';
import { LanguageContext, ThemeContext } from './contexts';
import { ThemeDisplay } from './ThemeDisplay';
import { LanguageDisplay } from './LanguageDisplay';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import './App.css';  

function App() {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('light');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`App ${theme}`}>
          <h1>Mi Aplicación</h1>
          <ThemeDisplay />
          <ThemeSwitcher />
          <LanguageDisplay />
          <LanguageSwitcher />
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;