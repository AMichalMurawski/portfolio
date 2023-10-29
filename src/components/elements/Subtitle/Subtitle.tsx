import React, { PropsWithChildren } from 'react';
import { Sub } from './Subtitle.styled';

export const Subtitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <Sub>{children}</Sub>;
};
