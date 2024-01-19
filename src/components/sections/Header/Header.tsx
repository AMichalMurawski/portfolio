import React, { useEffect, useState } from 'react';
import {
  HeaderConteiner,
  HeaderWrapper,
  PerspectiveConteiner,
  BoardsWrapper,
  DarkModeWrapper,
  LedBoardWrapper,
  Board,
  LogoWrapper,
} from './Header.styled';
import { DarkMode, LedBoard } from '../../ui';
import { links } from '../../../context';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useStyle } from '../../../providers';

type BoardsCount = number[];

const updateBoardsCount = (
  boardsCount: BoardsCount,
  windowSize: number,
  boardWidth: number
): number[] => {
  const count = Math.ceil(windowSize / (boardWidth * 2)) + 2;
  const boardsArray = boardsCount;
  let updateArray = boardsArray;
  if (boardsArray.length < count * 2) {
    for (let i = boardsArray.length / 2; i < count; i++) {
      updateArray.unshift(Math.round(Math.random() * 5) * 20);
      updateArray.push(Math.round(Math.random() * 5) * 20);
    }
  }
  return updateArray;
};

export const Header: React.FC = () => {
  const windowSize = useWindowSize();
  const styles = useStyle();
  const [boardsCount, setBoardsCount] = useState<BoardsCount>(
    updateBoardsCount([], windowSize, styles.width.board)
  );
  const [widthBox, setWidthBox] = useState(0);

  useEffect(() => {
    const updateArray = updateBoardsCount(
      boardsCount,
      windowSize,
      styles.width.board
    );
    setBoardsCount(updateArray);
  }, [windowSize, boardsCount, styles.width.board]);

  useEffect(() => {
    const width =
      boardsCount.length * styles.width.board + (boardsCount.length - 1) * 2;
    setWidthBox(width);
  }, [boardsCount, styles.width.board]);

  return (
    <>
      <HeaderWrapper>
        <HeaderConteiner>
          <PerspectiveConteiner>
            <BoardsWrapper $width={widthBox}>
              {boardsCount.map((pos, i) => {
                return <Board key={i} $position={pos} />;
              })}
            </BoardsWrapper>
            <DarkModeWrapper>
              <DarkMode />
            </DarkModeWrapper>
            <LedBoardWrapper>
              <LedBoard linkList={links} />
            </LedBoardWrapper>
            <LogoWrapper>Logo</LogoWrapper>
          </PerspectiveConteiner>
        </HeaderConteiner>
      </HeaderWrapper>
    </>
  );
};
