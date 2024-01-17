import styled from 'styled-components';
import { woodImage } from '../../../images';

interface BoardBoxProps {
  $width: number;
}

export const BgWrapper = styled.div<BoardBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.$width}px;
  height: 100%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`;

export const BoardsBox = styled.div<BoardBoxProps>`
  position: absolute;
  top: 50%;
  min-width: 100%;
  width: ${props => props.$width}px;
  height: 250%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.2vw;
  background-color: black;
  transform: translateY(-50%) perspective(600px) rotateX(-45deg);
  filter: brightness(${({ theme }) => theme.filter.brightness}%);
  transition: ${({ theme }) => theme.transition('filter')};
`;

export const DarkModeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 157px);
  transform: translate(-50%, -50%);
`;

export const LedBoardWrapper = styled.div`
  position: absolute;
  max-width: min(500px, 35vw, 40%);
  top: calc(50% + 10px);
  left: calc(50% + 50px);
  transform: translate(0, -50%);
`;

interface BoardProps {
  $position: number;
}

export const Board = styled.div<BoardProps>`
  width: ${({ theme }) => theme.width.board}px;
  height: 100%;
  background-color: brown;
  background-image: url(${woodImage});
  background-size: cover;
  background-position: ${props => props.$position}%;
`;
