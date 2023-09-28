import React from 'react';
import { H1Element } from './Title.styled';

interface TitleProps {
  children: any;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <H1Element>{children}</H1Element>;
};
