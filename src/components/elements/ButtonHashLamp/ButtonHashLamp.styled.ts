import { Link } from 'react-scroll';
import styled from 'styled-components';

export const LampWrapper = styled.div`
  padding: 4px;
  height: 100%;
  background-color: black;
`;

export const LampSide = styled.div``;

export const LampOuterLight = styled.div`
  padding: 3px;
  background-color: white;
  box-shadow: 0 0 6px white;
`;

export const LampFrame = styled.div`
  padding: 4px;
  background-color: black;
  box-shadow: inset 0 0 6px white;
`;

export const LampInnerLight = styled.div`
  padding: 3px 6px;
  background-color: white;
  box-shadow: 0 0 6px white;
`;

export const Bulb = styled(Link)`
  color: rgba(0, 0, 255, 0.3);
  filter: blur(0.5px);
  text-decoration: none;
  text-shadow: 0 0 2px white;
  ${({ theme }) => theme.fontFamily.navbar}
`;
