import React from 'react';
import { Sub } from './Subtitle.styled';
import { TextsProps } from '../types';

export const Subtitle: React.FC<TextsProps> = ({ children }) => {
  return <Sub>{children}</Sub>;
};
