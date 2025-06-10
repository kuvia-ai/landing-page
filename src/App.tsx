import React from 'react';
import './App.scss';
import { AppContextProvider } from './context/AppContext';
import Container from './components/Container';
import ApplicationRoutes from './routes';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Container>
        <ApplicationRoutes />
      </Container>
    </AppContextProvider>
  );
};

export default App;
