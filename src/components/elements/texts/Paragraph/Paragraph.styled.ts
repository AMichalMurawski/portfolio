import styled from 'styled-components';

export const PElement = styled.p`
  text-indent: 45px;
  text-align: justify;
  ${({ theme }) => `
    font-size: ${theme.fontSize.main};
    color: ${theme.color.main};
  `}
`;
