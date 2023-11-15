import styled, { keyframes } from 'styled-components';

export const SkyWraper = styled.div`
  position: absolute:
  left: 0;
  top: 0;
  width: 100%;
  height: 160%;
  background-color: ${({ theme }) => theme.bg.sky};
  transform: perspective(100vw) translateY(-20%) rotateX(45deg);
  transition: ${({ theme }) => theme.transition('background-color')};
`;

const starShine = keyframes`
  0% {
    box-shadow: 0 0 5px 1px lightgray, 0 0 10px 2px lightgray;
  }

  100% {
    box-shadow: 0 0 5px 1px white, 0 0 10px 2px white;
  }
`;

interface StarProps {
  $left: number;
  $top: number;
  $scale: number;
  $duration: number;
  $mode: 'light' | 'dark';
}

export const Star = styled.div<StarProps>`
  position: absolute;
  left: ${props => props.$left}%;
  top: ${props => props.$top}%;
  width: 10px;
  height: 10px;
  opacity: ${props => (props.$mode === 'dark' ? 1 : 0)};
  visibility: ${props => (props.$mode === 'dark' ? 'visible' : 'hidden')};
  transition: ${({ theme }) => theme.transition(['visibility', 'opacity'])};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(${props => props.$scale});
    background-color: lightgray;
    border-radius: 50%;
    box-shadow: 0 0 5px 1px lightgray, 0 0 10px 2px lightgray;
    animation: ${starShine} ${props => props.$duration + 1000}ms
      alternate-reverse ease-in-out infinite;
  }

  &::before {
    width: 10%;
    height: 100%;
  }

  &::after {
    width: 100%;
    height: 10%;
  }
`;
