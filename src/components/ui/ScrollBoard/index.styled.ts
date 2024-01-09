import styled, { keyframes } from 'styled-components';

export const ScrollBoardWrapper = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: black;
  }
`;

export const ScrollBoardConsole = styled.div`
  position: absolute;
  bottom: -40px;
  width: 100%;
  height: 40px;
  background-color: red;
`;

export const ScrollBoardPrev = styled.button`
  position: absolute;
`;
