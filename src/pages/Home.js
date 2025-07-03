import React from 'react';
import CTASection from '../components/CTASection';
import TestimonialSection from '../components/TestimonialSection';
import TeamSection from '../components/TeamSection';
import { useTranslation } from 'react-i18next';
import homeThumb from '../assets/home-thumb.jpg';

const Home = () => {
  const { t } = useTranslation();

  return (
    
    <div>
      <section className="section text-center" >
      {/* <img
        src={homeThumb}
    
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: '40%',
        }}
      /> */}

        {/* <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          borderRadius: '8px'
        }} */}
        
        {/* > */}
        <div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{t('home.heroTitle')}</h1>
        <p style={{ fontSize: '1.2rem' }}>{t('home.heroDescription')}</p>
      </div>
    

      
      </section>

      <section className="section container">
      <h2>{t('home.featuresTitle1')}</h2>
        <div className="card">{t('home.feature1')}</div>
        <h2>{t('home.featuresTitle2')}</h2>
        <div className="card">{t('home.feature2')}</div>
        <h2>{t('home.featuresTitle3')}</h2>
        <div className="card">{t('home.feature3')}</div>
      </section>

      <TeamSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Home;