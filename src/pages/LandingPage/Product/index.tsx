import React, { useState, useEffect, useContext } from 'react';
import Button from '../../../components/Button';
import IconCard from '../../../components/IconCard';
import SliderControl from '../../../components/SliderControl';
import SwiperSliderControl from '../../../components/SwiperSliderControl';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import img1 from '../../../assets/images/8b4853150a4a459c5c95b89dcd5bfec767f533e4.png';
import img2 from '../../../assets/images/d13bba79fb798511a556e2707d87d3e8348f6afd.jpg';
import img3 from '../../../assets/images/b46389d234f9188270b2d15e49ed87c9bd1479ac.png';
import img4 from '../../../assets/images/524fcf1c3e0bd66f8f157db47552f93f8c477b3a.jpg';
import img5 from '../../../assets/images/334c8be3e0b1b66e94258d3aa5538b60a90ca373.png';
import img6 from '../../../assets/images/4a106794cb5068a86e57ab1796123d943532ef1f.png';
import img7 from '../../../assets/images/6012c80a2e35a4a3dd4a0954cfdbb5309736ff54.png';
import brafImg from '../../../assets/images/braf-histology.jpg';
import transformarSaludLogo from '../../../assets/images/transformar-salud-flyer.jpeg';
import { AppContext } from '../../../context/AppContext';
import { useLanguage } from '../../../context/LanguageContext';
import './index.scss';
import 'swiper/css';
import 'swiper/css/mousewheel';

const Product: React.FC = () => {
  const { isMobile } = useContext(AppContext);
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [resetInterval, setResetInterval] = useState<boolean>(false);

  const howItWorks = [
    {
      icon: img1,
      title: t('product.step1.title') as string,
      text: t('product.step1.text') as string,
    },
    {
      icon: img2,
      title: t('product.step2.title') as string,
      text: t('product.step2.text') as string,
    },
    {
      icon: img3,
      title: t('product.step3.title') as string,
      text: t('product.step3.text') as string,
    },
    {
      icon: img4,
      title: t('product.step4.title') as string,
      text: t('product.step4.text') as string,
    },
    {
      icon: img5,
      title: t('product.step5.title') as string,
      text: t('product.step5.text') as string,
    },
  ];

  const sliderItems = [t('product.slide1'), t('product.slide2')];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev += 1));
    }, 5000);

    return () => {
      clearInterval(slideInterval);
      setResetInterval(false);
    };
  }, [resetInterval]);

  return (
    <div className="kuvia-product">
      <div className="kuvia-how-it-works-container">
        <div className="kuvia-how-it-works-title">
          {t('product.howItWorks')}
        </div>
        {!isMobile ? (
          <div className="kuvia-how-it-works-cards-group">
            {howItWorks.map((item, index) => (
              <IconCard
                key={index}
                icon={item.icon}
                type="transparent"
                title={item.title}
                text={item.text}
                displayBadge={true}
                badgeCount={index + 1}
              />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Mousewheel]}
            className="kuvia-how-it-works-cards-group"
            slidesPerView={1}
            mousewheel={{
              forceToAxis: true,
              thresholdDelta: 5,
              sensitivity: 100,
            }}
          >
            {howItWorks.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <IconCard
                    icon={item.icon}
                    type="transparent"
                    title={item.title}
                    text={item.text}
                    displayBadge={true}
                    badgeCount={index + 1}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            ))}
            <SwiperSliderControl dimension={howItWorks.length} />
          </Swiper>
        )}
      </div>
      <div className="kuvia-our-product">
        <div className="kuvia-our-product-left-content">
          <div>
            <p className="kuvia-our-product-left-content-title">
              {t('product.ourProduct')}
            </p>
            <p className="kuvia-our-product-left-content-body">
              {sliderItems[activeSlide % sliderItems.length]}
            </p>
          </div>
          <div className="kuvia-our-product-left-content-footer">
            <SliderControl
              dimension={sliderItems.length}
              activeItem={activeSlide % sliderItems.length}
              onClick={() => {
                setActiveSlide((prev) => (prev += 1));
                setResetInterval(true);
              }}
            />
            <p className="kuvia-our-product-left-content-footer-text">
              {activeSlide % sliderItems.length === 0
                ? t('product.howItWorks')
                : t('product.footer.ourProduct')}
            </p>
          </div>
        </div>
        <div className="kuvia-our-product-right-content">
          <p className="kuvia-our-product-right-content-title">
            {t('product.clinicalContext')}
          </p>
          <div className="kuvia-our-product-right-content-body">
            <img src={img6} alt={img6} />
            <div className="kuvia-our-product-tags-container">
              <div
                className="kuvia-our-product-right-content-tag left-align"
                style={{ left: '-70px' }}
              >
                <h1>{t('product.tag1.title')}</h1>
                <p>{t('product.tag1.text')}</p>
              </div>
              <div
                className="kuvia-our-product-right-content-tag right-align"
                style={{ right: '-80px' }}
              >
                <h1>{t('product.tag2.title')}</h1>
                <p>{t('product.tag2.text')}</p>
              </div>
              <div
                className="kuvia-our-product-right-content-tag"
                style={{ left: '105px' }}
              >
                <h1>{t('product.tag3.title')}</h1>
                <p>{t('product.tag3.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kuvia-our-product reversed">
        <div className="kuvia-our-product-left-content">
          <div>
            <p className="kuvia-our-product-left-content-title">
              {t('product.braf.title')}
            </p>
            <p className="kuvia-our-product-left-content-body">
              {t('product.braf.body')}
            </p>
          </div>
          <div className="kuvia-our-product-partner-logo">
            <img src={transformarSaludLogo} alt="Transformar Salud" />
          </div>
        </div>
        <div className="kuvia-our-product-right-content">
          <p className="kuvia-our-product-right-content-title">&nbsp;</p>
          <div className="kuvia-our-product-right-content-body">
            <img src={brafImg} alt="BRAF detection" />
            <div className="kuvia-our-product-tags-container">
              <div className="kuvia-our-product-right-content-tag left-align">
                <h1>{t('product.braf.tag1.title')}</h1>
                <p>{t('product.braf.tag1.text')}</p>
              </div>
              <div className="kuvia-our-product-right-content-tag right-align">
                <h1>{t('product.braf.tag2.title')}</h1>
                <p>{t('product.braf.tag2.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kuvia-scalability">
        <div className="kuvia-scalability-content">
          <div className="kuvia-scalability-left-content">
            <h1 className="kuvia-scalability-title">
              {t('product.scalability.title')}
            </h1>
            <p className="kuvia-scalability-body">
              {t('product.scalability.body')}
            </p>
          </div>
          <div className="kuvia-scalability-right-content">
            <img src={img7} alt={img7} />
            <Link to="/#contact-us" className="kuvia-navbar-link">
              <Button
                type="tertiary"
                text={t('button.moreInfo') as string}
                style={{ fontWeight: '900', paddingInline: '60px' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
