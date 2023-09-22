import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from './ThemeProvider';

export const MainProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
