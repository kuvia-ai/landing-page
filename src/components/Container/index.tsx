import React from 'react';
import './index.scss';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default Container;
