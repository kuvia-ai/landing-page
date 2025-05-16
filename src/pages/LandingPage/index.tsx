import React from 'react';
import MainContent from "./MainContent";
import WhatWeDo from "./WhatWeDo";
import WhyKuvia from "./WhyKuvia";

import './index.scss';

const LandingPage: React.FC = () => {

  return (
    <div className="kuvia-landing-page">
      <MainContent />
      <WhatWeDo />
      <WhyKuvia />
    </div>

  );
}

export default LandingPage;