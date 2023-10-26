import styled from 'styled-components';
import { DarkModeWindowBorders, darkModeElement } from './DarkMode.styled';

export const WindowWrapper = styled(DarkModeWindowBorders)`
  border: 3px solid #320b00;
`;

type WindowFrameProps = {
  $side: 'left' | 'right';
  $mode: 'light' | 'dark';
  $translateZ: number;
  $glass: boolean;
};

export const Frame = styled.div<WindowFrameProps>`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  border: 2px solid #320b00;
  background-image: linear-gradient(
      to right,
      transparent 48%,
      #320b00 48%,
      #320b00 52%,
      transparent 52%
    ),
    linear-gradient(
      to bottom,
      transparent 48%,
      #320b00 48%,
      #320b00 52%,
      transparent 52%
    );

  ${props => {
    const { $side, $mode, $translateZ, $glass, theme } = props;
    return `
      ${$side}: 0;
      ${$glass ? 'background-color: rgba(250, 250, 250, 0.3);' : ''}
      border-top-${$side}-radius: ${darkModeElement.border}px;
      transform: perspective(800px) rotateY(${
        $side === 'left' ? ($mode === 'light' ? 240 : 360) : ''
      }${
      $side === 'right' ? ($mode === 'light' ? 120 : 0) : ''
    }deg) translateZ(-${$translateZ}px);
      transform-origin: ${$side};
      transition: ${theme.transition('transform')};`;
  }}
`;
