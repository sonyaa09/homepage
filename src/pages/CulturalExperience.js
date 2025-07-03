import React from 'react';
import { useTranslation } from 'react-i18next';

const CulturalExperience = () => {
  const { t } = useTranslation();
  const programs = t('culturalExperience.programs', { returnObjects: true });

  return (
    <div className="section container">
      <h1 className="text-center">{t('culturalExperience.title')}</h1>
      <p className="text-center">{t('culturalExperience.description')}</p>

      {programs.map((item, idx) => (
        <div key={idx} className="card" style={{ marginBottom: '32px' }}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '6px' }} />
          <p>{item.details}</p>
          <ul>
            {item.highlights.map((h, i) => (
              <li key={i}>🎯 {h}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="text-center">
        <a href="/contact" className="btn">{t('culturalExperience.cta')}</a>
      </div>
    </div>
  );
};

export default CulturalExperience;