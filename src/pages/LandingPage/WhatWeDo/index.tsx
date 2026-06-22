import React, { useContext } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import ContentSwitch from '../../../components/ContentSwitch';
import background from '../../../assets/images/8bdcd33d1e3faa0a0a26b63cc70e594ac8f472b0.png';
import { AppContext } from '../../../context/AppContext';
import { useLanguage } from '../../../context/LanguageContext';
import './index.scss';

const WhatWeDo: React.FC = () => {
  const { isMobile } = useContext(AppContext);
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  const yWhatWeDoContent = useTransform(scrollY, [20, 400], [500, 0]);
  const opacityWhatWeDoContent = useTransform(scrollY, [300, 500], [0, 1]);

  const items = [
    {
      title: t('whatWeDo.item1.title') as string,
      description: t('whatWeDo.item1.desc'),
    },
    {
      title: t('whatWeDo.item2.title') as string,
      description: t('whatWeDo.item2.desc'),
    },
    {
      title: t('whatWeDo.item3.title') as string,
      description: t('whatWeDo.item3.desc'),
    },
  ];

  return (
    <div className="kuvia-what-we-do-container">
      <motion.div
        className="kuvia-what-we-do-content"
        style={{ y: yWhatWeDoContent }}
      >
        <motion.div
          className="kuvia-what-we-do-title-container"
          style={{ opacity: opacityWhatWeDoContent }}
        >
          <div className="kuvia-what-we-do-title">{t('whatWeDo.title')}</div>
          <p className="kuvia-what-we-do-description">
            {t('whatWeDo.description')}
          </p>
        </motion.div>
        <motion.div
          className="kuvia-what-we-do-content-switch-container"
          style={{ opacity: opacityWhatWeDoContent }}
        >
          <ContentSwitch items={items} style={{ marginLeft: 'auto' }} />
        </motion.div>
      </motion.div>
      {!isMobile && (
        <motion.img
          src={background}
          alt="background"
          className="kuvia-what-we-do-content-switch-background"
          style={{ opacity: opacityWhatWeDoContent }}
        />
      )}
    </div>
  );
};

export default WhatWeDo;
