import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="section container">
      <h1 className="text-center">{t('contact.title')}</h1>
      <p className="text-center">{t('contact.description')}</p>

      <form className="contact-form">
        <label>{t('contact.name')}<input type="text" name="name" required /></label>
        <label>{t('contact.email')}<input type="email" name="email" required /></label>
        <label>{t('contact.message')}<textarea name="message" rows="6" required></textarea></label>
        <button type="submit" className="btn">{t('contact.submit')}</button>
      </form>
    </div>
  );
};

export default Contact;