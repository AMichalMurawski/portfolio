import React from 'react';
import { DarkModeConteiner } from './DarkMode.styled';
import { Window } from './Window';
import { Landscape } from './Landscape';
import { useMode } from '../../../providers';

export const DarkMode: React.FC = () => {
  const { toggleMode } = useMode();

  return (
    <DarkModeConteiner onClick={toggleMode}>
      <Window />
      <Landscape />
    </DarkModeConteiner>
  );
};
