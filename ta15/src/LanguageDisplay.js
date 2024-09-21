import React, { useContext } from 'react';
import { LanguageContext } from './contexts';

const translations = {
  es: {
    currentLanguage: 'Idioma actual',
    hello: 'Hola'
  },
  en: {
    currentLanguage: 'Current language',
    hello: 'Hello'
  },
  fr: {
    currentLanguage: 'Langue actuelle',
    hello: 'Bonjour'
  }
};

export function LanguageDisplay() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div>
      <p>{t.currentLanguage}: {language}</p>
      <p>{t.hello}!</p>
    </div>
  );
}