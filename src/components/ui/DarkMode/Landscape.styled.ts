import styled from 'styled-components';
import { DarkModeWindowBorders } from './DarkMode.styled';

export const LandscapeWrapper = styled(DarkModeWindowBorders)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;
