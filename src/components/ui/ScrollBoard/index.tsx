import React, { PropsWithChildren } from 'react';
import { ScrollBoardWrapper } from './index.styled';
import { BoardFrame } from './BoardFrame';
import { BoardCover } from './BoardCover';
import { BoardConsole } from './BoardConsole';

export const ScrollBoard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ScrollBoardWrapper>
      <BoardFrame>{children}</BoardFrame>
      <BoardCover />
      <BoardConsole />
    </ScrollBoardWrapper>
  );
};
