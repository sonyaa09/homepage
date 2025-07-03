import React from 'react';
import { useTranslation } from 'react-i18next';

const CustomTravel = () => {
  const { t } = useTranslation();
  const features = t('customTravel.features', { returnObjects: true });
  const benefits = t('customTravel.benefits', { returnObjects: true });

  return (
    <div className="section container">
      <h1 className="text-center">{t('customTravel.title')}</h1>
      <p className="text-center">{t('customTravel.description')}</p>

      <h2>{t('customTravel.featuresTitle')}</h2>
      <ul>
        {features.map((item, idx) => (
          <li key={idx}>✅ {item}</li>
        ))}
      </ul>

      <h2>{t('customTravel.benefitsTitle')}</h2>
      <ul>
        {benefits.map((item, idx) => (
          <li key={idx}>💡 {item}</li>
        ))}
      </ul>

      <div className="text-center">
        <a href="/contact" className="btn">{t('customTravel.cta')}</a>
      </div>
    </div>
  );
};

export default CustomTravel;