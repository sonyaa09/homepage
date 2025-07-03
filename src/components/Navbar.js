import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Net Tour</Link></div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/about">{t('nav.about')}</Link>
        <Link to="/services">{t('nav.services')}</Link>
        <Link to="/blog">{t('nav.blog')}</Link>
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;
