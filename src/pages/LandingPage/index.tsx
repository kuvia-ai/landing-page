import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MainContent from "./MainContent";
import WhatWeDo from "./WhatWeDo";
import WhyKuvia from "./WhyKuvia";
import Product from './Product';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HamburgerMenu from '../../components/HamburgerMenu';

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

  return (
    <div className="kuvia-landing-page">
      <MainContent ref={main} />
      <div className='kuvia-landing-page-content'>
        <HamburgerMenu />
        <WhatWeDo />
        <WhyKuvia />
        <Product />
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  );
}

export default LandingPage;