import React from 'react';
import './App.scss';
import Container from './components/Container';
import ApplicationRoutes from './routes';

const App: React.FC = () => {
  return (
    <Container>
      <ApplicationRoutes/>
    </Container>
  );
}

export default App;
