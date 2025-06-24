import React from 'react';
import './App.scss';
import { AppContextProvider } from './context/AppContext';
import Container from './components/Container';
import ApplicationRoutes from './routes';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Container>
        <ApplicationRoutes />
        <Analytics /> {/* Analytics de Vercel */}
        <SpeedInsights /> {/* Speed Insights de Vercel */}
      </Container>
    </AppContextProvider>
  );
};

export default App;
