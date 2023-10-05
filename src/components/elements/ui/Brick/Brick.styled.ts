import styled from 'styled-components';

export const BrickElement = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${props => props.theme.bg.brick};
  border-radius: 5px;
  margin-top: 2px;
`;
