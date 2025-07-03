import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <button onClick={() => changeLanguage('ko')}>🇰🇷 한국어</button>
      <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
      <button onClick={() => changeLanguage('he')}>🇮🇱 עברית</button>
    </div>
  );
};

export default LanguageSelector;
