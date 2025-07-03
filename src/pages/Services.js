import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = t('services.categories', { returnObjects: true });

  return (
    <div className="section container">
      <h1 className="text-center">{t('services.header')}</h1>
      {services.map((service, idx) => (
        <div className="card" key={idx} style={{ marginBottom: '32px' }}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <ul>
            {service.details.map((item, i) => (
              <li key={i}>✅ {item}</li>
            ))}
          </ul>
          <Link to={service.path} className="btn">
      {t('services.learnMore')}
    </Link>

          {/* 링크 추가 */}
          {service.link && (
            <div style={{ marginTop: '16px' }}>
              <Link to={service.link} className="btn">
                {t('services.learnMore')}
              </Link>
            </div>
          )}
        </div>
      ))}

      <h2>{t('services.reviewsTitle')}</h2>
      <div className="card">
        {t('services.reviews', { returnObjects: true }).map((review, i) => (
          <p key={i}><strong>{review.name}</strong>: "{review.comment}"</p>
        ))}
      </div>
    </div>
  );
};

export default Services;
