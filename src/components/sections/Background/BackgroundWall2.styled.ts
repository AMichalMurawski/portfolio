import styled from 'styled-components';
import wallImage from '../../../images/4295315650_e9f42321a0_o.jpg';

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
  background-image: url(${wallImage});
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
  background-color: rgb(0, 0, 0, ${props => props.theme.bg.wallAlpha});
  transition: background-color ease-out 300ms;
  z-index: -9;
`;
