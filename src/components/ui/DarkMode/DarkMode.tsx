import React from 'react';
import { DarkModeWrapper } from './DarkMode.styled';
import { Window } from './Window';
import { Landscape } from './Landscape';
import { useMode } from '../../../providers';

export const DarkMode: React.FC = () => {
  const { toggleMode } = useMode();

  return (
    <DarkModeWrapper onClick={toggleMode}>
      <Window />
      <Landscape />
    </DarkModeWrapper>
  );
};
