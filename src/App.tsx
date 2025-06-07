import React from 'react';
import './App.scss';
import { ScaleProvider } from './context/AppContext';
import Container from './components/Container';
import ApplicationRoutes from './routes';

const App: React.FC = () => {
  return (
    <ScaleProvider>
      <Container>
        <ApplicationRoutes />
      </Container>
    </ScaleProvider>
  );
};

export default App;
