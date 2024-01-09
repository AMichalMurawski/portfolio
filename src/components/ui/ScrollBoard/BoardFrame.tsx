import React, { PropsWithChildren } from 'react';
import {
  Frame,
  FrameHorizontal,
  FrameVertical,
  Hook,
} from './BoardFrame.styled';

export const BoardFrame: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Frame>
      <FrameVertical $side="left">
        <Hook $topPosition="10%" />
        <Hook $topPosition="80%" />
      </FrameVertical>
      <FrameVertical $side="right">
        <Hook $topPosition="10%" />
        <Hook $topPosition="80%" />
      </FrameVertical>
      <FrameHorizontal $side="top" />
      <FrameHorizontal $side="bottom" />
      {children}
    </Frame>
  );
};
