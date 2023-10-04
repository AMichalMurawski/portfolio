import React from 'react';
import { Button } from './ButtonCV.styled';

interface ButtonProps {
  linkTo: string;
}

export const ButtonCV: React.FC<ButtonProps> = ({ linkTo }) => {
  return <Button to={linkTo}>CV</Button>;
};
