import styled from 'styled-components';
// import { PageWrapper } from '../../../App.styled';
import { woodImage } from '../../../images';

const headerHeight = 140;

const darkModeFilter = theme => `
  filter: brightness(${theme.filter.brightness}%);
  transition: ${theme.transition('filter')};
`;

export const HeaderWrapper = styled.div`
  height: ${headerHeight}px;
`;

export const HeaderConteiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  // background-color: white;
  z-index: 100;
  width: 100%;
  height: ${headerHeight}px;
  overflow: hidden;
`;

interface BoardBoxProps {
  $width: number;
}

export const PerspectiveConteiner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%) perspective(600px) rotateX(-45deg);
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: calc(50% - 157px);
  width: ${({ theme }) => theme.width.board * 1.2}px;
  height: ${({ theme }) => theme.width.board * 1.2}px;
  transform: translate(-50%, -50%);
  background-color: red;
  box-shadow: inset 0 0 2px white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DarkModeWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: calc(50% - 157px);
  transform: translate(-50%, -50%);
  ${({ theme }) => darkModeFilter(theme)}
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

export const BoardsWrapper = styled.div<BoardBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.$width}px;
  height: 250%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2px;
  background-color: black;
  ${({ theme }) => darkModeFilter(theme)}
`;

export const Board = styled.div<BoardProps>`
  width: ${({ theme }) => theme.width.board}px;
  height: 100%;
  background-color: brown;
  background-image: url(${woodImage});
  background-size: cover;
  background-position: ${props => props.$position}%;
`;
