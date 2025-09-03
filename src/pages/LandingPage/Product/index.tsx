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
import { AppContext } from '../../../context/AppContext';
import './index.scss';
import 'swiper/css';
import 'swiper/css/mousewheel';

const Product: React.FC = () => {
  const { isMobile } = useContext(AppContext);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [resetInterval, setResetInterval] = useState<boolean>(false);

  const howItWorks = [
    {
      icon: img1,
      title: 'Biopsy Collection',
      text: 'Histological tissue sample is obtained from biopsy.',
    },
    {
      icon: img2,
      title: 'Tissue Digitization',
      text: 'The tissue slide is digitized into a Whole Slide Image (WSI).',
    },
    {
      icon: img3,
      title: 'AI Analysis',
      text: 'Advanced AI technology instantly analyzes the image.',
    },
    {
      icon: img4,
      title: 'Instant Results',
      text: 'Immediate biomarker status prediction.',
    },
    {
      icon: img5,
      title: 'Targeted Therapy',
      text: 'Optimal treatment selection for patients.',
    },
  ];

  const sliderItems = [
    <span>
      <b>Kuvia-MSI</b> is an AI-powered software for detecting{' '}
      <b>Microsatellite Instability (MSI)</b> in colorectal and endometrial
      cancer.
    </span>,
    <span>
      MSI is a key biomarker across solid tumors, as its presence indicates that
      a patient is likely to benefit from immunotherapy. Detecting MSI can guide
      access to life-extending treatments that would otherwise be missed.
    </span>,
  ];

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
        <div className="kuvia-how-it-works-title">How it works</div>
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
              Our
              <br />
              Product
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
                ? 'How it works'
                : 'Our product'}
            </p>
          </div>
        </div>
        <div className="kuvia-our-product-right-content">
          <p className="kuvia-our-product-right-content-title">
            Clinical context for MSI
          </p>
          <div className="kuvia-our-product-right-content-body">
            <img src={img6} alt={img6} />
            <div className="kuvia-our-product-tags-container">
              <div
                className="kuvia-our-product-right-content-tag left-align"
                style={{ left: '-70px' }}
              >
                <h1>#2 & #3</h1>
                <p>
                  In 2023, colorectal cancer was the world’s second leading
                  cause of cancer-related deaths and the third most frequently
                  diagnosed cancer.
                </p>
              </div>
              <div
                className="kuvia-our-product-right-content-tag right-align"
                style={{ right: '-80px' }}
              >
                <h1>MSI Rates</h1>
                <p>
                  Approximately 10–15% of colorectal cancers, and 20% to 30% of
                  endometrial carcinomas exhibit high microsatellite instability
                  (MSI-H) or are mismatch repair deficient (dMMR), with higher
                  rates observed in early-stage tumors.
                </p>
              </div>
              <div
                className="kuvia-our-product-right-content-tag"
                style={{ left: '105px' }}
              >
                <h1>#6</h1>
                <p>
                  Endometrial cancer is the sixth most common cancer among women
                  worldwide, with over 420,000 new cases reported in 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kuvia-scalability">
        <div className="kuvia-scalability-content">
          <div className="kuvia-scalability-left-content">
            <h1 className="kuvia-scalability-title">Scalability</h1>
            <p className="kuvia-scalability-body">
              We have developed a <b>scalable AI architecture</b> with the
              potential to be applied across a wide range of biomarkers and
              cancer types. Our current efforts are focused on expanding the
              platform beyond MSI, aiming to enable broader applications in
              precision medicine and accelerate access to personalized
              treatments.
            </p>
          </div>
          <div className="kuvia-scalability-right-content">
            <img src={img7} alt={img7} />
            <Link to="/#contact-us" className="kuvia-navbar-link">
              <Button
                type="tertiary"
                text="More info"
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
