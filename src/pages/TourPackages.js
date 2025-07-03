import React from 'react';
import { useTranslation } from 'react-i18next';

const TourPackages = () => {
  const { t } = useTranslation();
  const packages = t('tourPackages.packages', { returnObjects: true });

  if (!Array.isArray(packages)) {
    return <div className="container">{t('tourPackages.error')}</div>;
  }

  return (
    <div className="section container">
      <h1 className="text-center">{t('tourPackages.title')}</h1>
      <p className="text-center">{t('tourPackages.description')}</p>

      {packages.map((pkg, idx) => (
        <div key={idx} className="card" style={{ marginBottom: '32px' }}>
          <h2>{pkg.title}</h2>
          <img src={pkg.image} alt={pkg.title} style={{ width: '100%', borderRadius: '6px' }} />
          <p>{pkg.details}</p>
          <ul>
            {Array.isArray(pkg.highlights) && pkg.highlights.map((point, i) => (
              <li key={i}>⭐ {point}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="text-center">
        <a href="/contact" className="btn">{t('tourPackages.cta')}</a>
      </div>
    </div>
  );
};

export default TourPackages;