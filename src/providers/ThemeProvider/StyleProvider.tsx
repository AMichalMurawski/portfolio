import React, { createContext, PropsWithChildren } from 'react';
import {} from './types';
import { styleData } from '../../utils/styles';
import { useMode } from '../useContext';

export const StyleContext = createContext(styleData);

export const StyleProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { mode } = useMode();
  const styled: any = styleData(mode);

  return (
    <StyleContext.Provider value={{ ...styled }}>
      {children}
    </StyleContext.Provider>
  );
};
