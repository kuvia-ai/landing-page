import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScaleContextType {
  scaleRatio: number;
}

const ScaleContext = createContext<ScaleContextType>({ scaleRatio: 1 });

export const ScaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scaleRatio, setScaleRatio] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScaleRatio(width < 1440 ? 0.8 : 1);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScaleContext.Provider value={{ scaleRatio }}>
      {children}
    </ScaleContext.Provider>
  );
};

export const useScale = () => useContext(ScaleContext);