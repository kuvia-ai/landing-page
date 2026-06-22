import React from 'react';
import './App.scss';
import { AppContextProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import Container from './components/Container';
import ApplicationRoutes from './routes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <LanguageProvider>
        <Container>
          <ApplicationRoutes />
          <Analytics /> {/* Analytics de Vercel */}
          <SpeedInsights /> {/* Speed Insights de Vercel */}
        </Container>
      </LanguageProvider>
    </AppContextProvider>
  );
};

export default App;
