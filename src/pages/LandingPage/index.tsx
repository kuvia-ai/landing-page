import React from 'react';
import MainContent from "./MainContent";
import MoreContent from "./MoreContent";

import './index.scss';

const LandingPage: React.FC = () => {

  return (
    <div className="kuvia-landing-page">
      <MainContent />
      <MoreContent />
    </div>

  );
}

export default LandingPage;