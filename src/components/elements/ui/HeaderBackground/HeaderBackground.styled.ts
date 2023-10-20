import styled from 'styled-components';
import { woodImage } from '../../../../images';

interface BoardBoxProps {
  $width: number;
}

export const BgWrapper = styled.div<BoardBoxProps>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${props => props.$width}px;
  height: 100%;
  z-index: -10;
  overflow: hidden;
`;

export const BoardsBox = styled.div<BoardBoxProps>`
  min-width: 100%;
  width: ${props => props.$width}px;
  height: 250%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.2vw;
  background-color: black;
  transform: translateY(-10%) perspective(50vw) rotateX(-45deg);
`;

interface BoardProps {
  $position: number;
}

export const Board = styled.div<BoardProps>`
  width: ${props => props.theme.width.board}px;
  height: 100%;
  background-color: brown;
  background-image: url(${woodImage});
  background-size: cover;
  background-position: ${props => props.$position}%;
`;
