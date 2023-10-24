import styled from 'styled-components';
import { bgImage } from '../../../images';

export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  filter: brightness(${props => props.theme.filter.brightness}%);
  transition: ${props => props.theme.transition('filter')};
  z-index: -10;
`;
