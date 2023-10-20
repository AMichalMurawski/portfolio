import React, { useState, useEffect } from 'react';
import { BgWrapper, Board, BoardsBox } from './HeaderBackground.styled';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useStyle } from '../../../providers';

type BoardsCount = number[];

const updateBoardsCount = (
  boardsCount: BoardsCount,
  windowSize: number,
  boardWidth: number
): number[] => {
  const count = Math.ceil(windowSize / (boardWidth * 2));
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

export const HeaderBackground: React.FC = () => {
  const size = useWindowSize();
  const styles = useStyle();
  const [boardsCount, setBoardsCount] = useState<BoardsCount>(
    updateBoardsCount([], size, styles.width.board)
  );

  useEffect(() => {
    const updateArray = updateBoardsCount(
      boardsCount,
      size,
      styles.width.board
    );
    setBoardsCount(updateArray);
  }, [size]);

  return (
    <BgWrapper
      $width={
        (boardsCount.length - 1) * (styles.width.board + 0.002 * size) +
        styles.width.board
      }
    >
      <BoardsBox
        $width={
          (boardsCount.length - 1) * (styles.width.board + 0.002 * size) +
          styles.width.board
        }
      >
        {boardsCount.map((pos, i) => {
          return <Board key={i} $position={pos} />;
        })}
      </BoardsBox>
    </BgWrapper>
  );
};
