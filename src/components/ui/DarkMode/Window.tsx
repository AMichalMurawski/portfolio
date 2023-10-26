import React from 'react';
import { Frame, WindowWrapper } from './Window.styled';
import { useMode } from '../../../providers';

export const Window: React.FC = () => {
  const { mode } = useMode();
  return (
    <WindowWrapper>
      <Frame $mode={mode} $side="left" $translateZ={0} $glass={false} />
      <Frame $mode={mode} $side="left" $translateZ={1} $glass={true} />
      <Frame $mode={mode} $side="left" $translateZ={2} $glass={false} />
      <Frame $mode={mode} $side="right" $translateZ={0} $glass={false} />
      <Frame $mode={mode} $side="right" $translateZ={1} $glass={true} />
      <Frame $mode={mode} $side="right" $translateZ={2} $glass={false} />
    </WindowWrapper>
  );
};
