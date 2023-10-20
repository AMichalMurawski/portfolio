import styled from 'styled-components';
import { bgImage } from '../../../images';

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  z-index: -10;
`;

export const BgDarkMode = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bg.wall2};
  transition: ${props => props.theme.transition('background-color')};
  z-index: -9;
`;
