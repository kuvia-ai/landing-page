import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  scaleRatio: number;
  section: string;
  isMobile: boolean;
  setSection: (section: string) => void;
}

export const AppContext = createContext<AppContextType>({
  scaleRatio: 1,
  section: '',
  isMobile: false,
  setSection: () => {},
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scaleRatio, setScaleRatio] = useState<number>(1);
  const [section, setSection] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log('width', width)
      setScaleRatio(width <= 1440 ? 0.8 : 1);
      setIsMobile(width <= 768 ? true : false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={{ scaleRatio, section, isMobile, setSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useScale = () => useContext(AppContext);
