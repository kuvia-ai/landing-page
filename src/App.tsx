import React from 'react';
import './App.scss';
import { AppContextProvider } from './context/AppContext';
import Container from './components/Container';
import ApplicationRoutes from './routes';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Container>
        <ApplicationRoutes />
        <Analytics /> {/* Analytics de Vercel */}
      </Container>
    </AppContextProvider>
  );
};

export default App;
