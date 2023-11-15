import styled from 'styled-components';

export const BrickElement = styled.div`
  width: ${({ theme }) => theme.width.brick}px;
  height: ${({ theme }) => theme.height.brick}px;
  background-color: ${({ theme }) => theme.bg.brick};
  border-radius: 5px;
`;
