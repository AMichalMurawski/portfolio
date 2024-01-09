import React, { PropsWithChildren } from 'react';
import { ScrollBoardConsole, ScrollBoardWrapper } from './index.styled';
import { BoardFrame } from './BoardFrame';
import { BoardCover } from './BoardCover';

export const ScrollBoard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollBoardWrapper>
      <BoardFrame>{children}</BoardFrame>
      <BoardCover />
      <ScrollBoardConsole></ScrollBoardConsole>
    </ScrollBoardWrapper>
  );
};
