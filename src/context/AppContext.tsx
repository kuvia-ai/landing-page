import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  scaleRatio: number;
  section: string;
  setSection: (section: string) => void;
}

export const AppContext = createContext<AppContextType>({
  scaleRatio: 1,
  section: '',
  setSection: () => {},
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scaleRatio, setScaleRatio] = useState<number>(1);
  const [section, setSection] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScaleRatio(width <= 1440 ? 0.8 : 1);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ scaleRatio, section, setSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useScale = () => useContext(AppContext);
