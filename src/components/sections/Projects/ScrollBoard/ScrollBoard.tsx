import React, { PropsWithChildren, useState } from 'react';
import {
  ScrollBoardConsole,
  ScrollBoardCover,
  ScrollBoardCoverFrame,
  ScrollBoardCoverFront,
  ScrollBoardCoverGlass,
  ScrollBoardCoverSide,
  ScrollBoardFrame,
  ScrollBoardFrameHorizontal,
  ScrollBoardFrameVertical,
  ScrollBoardHook,
  ScrollBoardWrapper,
} from './ScrollBoard.styled';

export const ScrollBoard: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpen = () => {
    if (isOpen === true) setIsOpen(false);
    if (isOpen === false) setIsOpen(true);
  };

  return (
    <ScrollBoardWrapper>
      <ScrollBoardFrame>
        <ScrollBoardFrameVertical $side="left">
          <ScrollBoardHook $topPosition="10%" />
          <ScrollBoardHook $topPosition="80%" />
        </ScrollBoardFrameVertical>
        <ScrollBoardFrameVertical $side="right">
          <ScrollBoardHook $topPosition="10%" />
          <ScrollBoardHook $topPosition="80%" />
        </ScrollBoardFrameVertical>
        <ScrollBoardFrameHorizontal $side="top" />
        <ScrollBoardFrameHorizontal $side="bottom" />
        {children}
      </ScrollBoardFrame>
      <ScrollBoardCover $isOpen={isOpen}>
        <ScrollBoardCoverFront>
          <ScrollBoardCoverGlass />
          <ScrollBoardCoverFrame $adjacent="vertical" $side="left" />
          <ScrollBoardCoverFrame $adjacent="vertical" $side="right" />
          <ScrollBoardCoverFrame $adjacent="horizontal" $side="top" />
          <ScrollBoardCoverFrame $adjacent="horizontal" $side="bottom" />
          <ScrollBoardCoverSide $adjacent="vertical" $side="left" />
          <ScrollBoardCoverSide $adjacent="vertical" $side="right" />
          <ScrollBoardCoverSide $adjacent="horizontal" $side="top" />
          <ScrollBoardCoverSide $adjacent="horizontal" $side="bottom" />
        </ScrollBoardCoverFront>
      </ScrollBoardCover>
      <ScrollBoardConsole onClick={handleOpen}></ScrollBoardConsole>
    </ScrollBoardWrapper>
  );
};
