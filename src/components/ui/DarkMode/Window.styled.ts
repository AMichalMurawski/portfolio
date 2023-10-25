import styled from 'styled-components';
import { DarkModeWindowBorders, darkModeElement } from './DarkMode.styled';

export const WindowWrapper = styled(DarkModeWindowBorders)`
  border: 2px solid black;
`;

type WindowFrameProps = {
  $side: 'left' | 'right';
  $mode: 'light' | 'dark';
};

export const Frame = styled.div<WindowFrameProps>`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  border: 2px solid black;
  background-color: rgba(250, 250, 250, 0.15);
  background-image: linear-gradient(
      to right,
      transparent 49%,
      #000 49%,
      #000 51%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      transparent 49%,
      #000 49%,
      #000 51%,
      transparent 51%
    );
  ${props => {
    const { $side, $mode, theme } = props;
    return `${$side}: 0;
            border-top-${$side}-radius: ${darkModeElement.border}px;
            transform: perspective(800px)
              rotateY(${
                $side === 'left' ? ($mode === 'light' ? 240 : 360) : ''
              }${$side === 'right' ? ($mode === 'light' ? 120 : 0) : ''}deg);
            transform-origin: ${$side};
            transition: ${theme.transition('transform')};`;
  }}
`;
