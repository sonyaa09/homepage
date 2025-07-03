import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="section container">
      <h1 className="text-center">{t('about.title')}</h1>
      <p>{t('about.introduction')}</p>

      <h2>{t('about.missionTitle')}</h2>
      <p>{t('about.mission')}</p>

      <h2>{t('about.visionTitle')}</h2>
      <p>{t('about.vision')}</p>

      <h2>{t('about.timelineTitle')}</h2>
      <ul>
        {t('about.timeline', { returnObjects: true }).map((item, idx) => (
          <li key={idx}><strong>{item.year}</strong>: {item.event}</li>
        ))}
      </ul>

      <h2>{t('about.teamTitle')}</h2>
      <div className="card">
        {t('about.team', { returnObjects: true }).map((member, idx) => (
          <div key={idx} style={{ marginBottom: '16px' }}>
            <strong>{member.name}</strong> - {member.role}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
