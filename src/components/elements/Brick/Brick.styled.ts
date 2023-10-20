import styled from 'styled-components';

export const BrickElement = styled.div`
  width: ${props => props.theme.width.brick}px;
  height: ${props => props.theme.height.brick}px;
  background-color: ${props => props.theme.bg.brick};
  border-radius: 5px;
`;
