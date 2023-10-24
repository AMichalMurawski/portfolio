import { useState, useEffect } from 'react';

export const useWindowSize = (): number => {
  const [size, setSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const screenSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', screenSize);
    return () => {
      window.removeEventListener('resize', screenSize);
    };
  }, []);

  return size;
};
