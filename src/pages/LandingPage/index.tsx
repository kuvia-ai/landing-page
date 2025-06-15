import React, { useEffect, useContext } from 'react';
import { useScale } from '../../context/AppContext';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MainContent from './MainContent';
import WhatWeDo from './WhatWeDo';
import WhyKuvia from './WhyKuvia';
import Product from './Product';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HamburgerMenu from '../../components/HamburgerMenu';
import Section from '../../components/Section';
import { AppContext } from '../../context/AppContext';

import './index.scss';

const LandingPage: React.FC = () => {
  const { isMobile } = useContext(AppContext);
  const location = useLocation();

  const { scrollY } = useScroll();
  const { scaleRatio } = useScale();

  const opacityBackToTopButton = useTransform(
    scrollY,
    [450 * scaleRatio, 700 * scaleRatio],
    [0, 1]
  );

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const pageSubsections = [
    {
      id: 'what-we-do',
      component: <WhatWeDo />,
      intersectionThreshold: 0.7,
    },
    {
      id: 'why-kuvia',
      component: <WhyKuvia />,
      intersectionThreshold: 0.6,
    },
    {
      id: 'product',
      component: <Product />,
      intersectionThreshold: 0.2,
    },
    {
      id: 'about-us',
      component: <AboutUs />,
      intersectionThreshold: 0.2,
    },
    {
      id: 'contact-us',
      component: <ContactUs />,
      intersectionThreshold: 0.2,
    },
  ];

  return (
    <div className="kuvia-landing-page">
      {isMobile && <HamburgerMenu />}
      <Section id="" intersectionThreshold={0.2}>
        <MainContent />
      </Section>
      <div className="kuvia-landing-page-content">
        {!isMobile && <HamburgerMenu />}
        {pageSubsections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            intersectionThreshold={section.intersectionThreshold}
          >
            {section.component}
          </Section>
        ))}
        <motion.button
          className="kuvia-back-to-top-button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ opacity: opacityBackToTopButton }}
        >
          <svg
            fill="#000000"
            height="16px"
            width="16px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-35.84 -35.84 583.69 583.69"
            xmlSpace="preserve"
            stroke="#000000"
            strokeWidth="19.45638"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M505.755,358.256L271.088,123.589c-8.341-8.341-21.824-8.341-30.165,0L6.256,358.256c-8.341,8.341-8.341,21.824,0,30.165
          s21.824,8.341,30.165,0l219.584-219.584l219.584,219.584c4.16,4.16,9.621,6.251,15.083,6.251
          c5.462,0,10.923-2.091,15.083-6.251C514.096,380.08,514.096,366.597,505.755,358.256z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
