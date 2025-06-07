import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProcessingPage from './pages/ProcessingPage';

const ApplicationRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/processing" element={<ProcessingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
