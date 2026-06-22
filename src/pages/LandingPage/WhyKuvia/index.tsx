import { useContext } from 'react';
import background from '../../../assets/images/6012c80a2e35a4a3dd4a0954cfdbb5309736ff59.png';
import { AppContext } from '../../../context/AppContext';
import { useLanguage } from '../../../context/LanguageContext';
import './index.scss';

const WhyKuvia: React.FC = () => {
  const { isMobile } = useContext(AppContext);
  const { t } = useLanguage();

  return (
    <div className="kuvia-why-kuvia">
      <div className="kuvia-why-kuvia-container">
        <div className="kuvia-why-kuvia-title">{t('whyKuvia.title')}</div>
        <p className="kuvia-why-kuvia-description">
          {t('whyKuvia.description')}
        </p>
      </div>
      <div className="kuvia-why-kuvia-content">
        <img
          src={background}
          alt="background"
          className="kuvia-why-kuvia-content-background"
        />
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            top: `${!isMobile ? '175px' : ''}`,
            left: `${!isMobile ? '-90px' : ''}`,
            order: `${isMobile ? '2' : ''}`,
          }}
        >
          {t('whyKuvia.item1')}
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            top: `${!isMobile ? '40px' : ''}`,
            left: `${!isMobile ? '-30px' : ''}`,
            order: `${isMobile ? '3' : ''}`,
          }}
        >
          {t('whyKuvia.item2')}
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            top: `${!isMobile ? '20px' : ''}`,
            right: `${!isMobile ? '65px' : ''}`,
            order: `${isMobile ? '1' : ''}`,
          }}
        >
          {t('whyKuvia.item3')}
        </div>
        <div
          className="kuvia-why-kuvia-content-item"
          style={{
            bottom: `${!isMobile ? '60px' : ''}`,
            right: `${!isMobile ? '-130px' : ''}`,
            order: `${isMobile ? '4' : ''}`,
          }}
        >
          {t('whyKuvia.item4')}
        </div>
      </div>
    </div>
  );
};

export default WhyKuvia;
