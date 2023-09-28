import React from 'react';
import { Button } from './ButtonLink.styled';

interface ButtonProps {
  caption: string;
  linkTo: string;
}

export const ButtonLink: React.FC<ButtonProps> = ({ caption, linkTo }) => {
  return <Button to={linkTo}>{caption}</Button>;
};
