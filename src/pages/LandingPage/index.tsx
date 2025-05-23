import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainContent from "./MainContent";
import WhatWeDo from "./WhatWeDo";
import WhyKuvia from "./WhyKuvia";
import Product from './Product';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HamburgerMenu from '../../components/HamburgerMenu';
import Section from '../../components/Section';

import './index.scss';

const LandingPage: React.FC = () => {
  const location = useLocation();
  

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
    },
    {
      id: 'why-kuvia',
      component: <WhyKuvia />,
    },
    {
      id: 'product',
      component: <Product />,
    },
    {
      id: 'about-us',
      component: <AboutUs />,
    },
    {
      id: 'contact-us',
      component: <ContactUs />,
    },
  ];

  return (
    <div className="kuvia-landing-page">
      <Section
        id=''
      >
        <MainContent />
      </Section>
      <div className='kuvia-landing-page-content'>
        <HamburgerMenu />
        {pageSubsections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
          >
            {section.component}
          </Section>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;