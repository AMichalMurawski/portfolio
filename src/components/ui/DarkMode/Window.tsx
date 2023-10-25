import React from 'react';
import { Frame, WindowWrapper } from './Window.styled';
import { useMode } from '../../../providers';

export const Window: React.FC = () => {
  const { mode } = useMode();
  return (
    <WindowWrapper>
      <Frame $mode={mode} $side="left" />
      <Frame $mode={mode} $side="right" />
    </WindowWrapper>
  );
};
