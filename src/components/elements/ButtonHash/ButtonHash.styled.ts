import styled from 'styled-components';
import { HashLinkElement } from '../../../utils/styles/global';

const bsStyle = '1px 1px 1px black, 4px 4px 4px red';

export const Button = styled(HashLinkElement)`
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.btnLink.bg};
  box-shadow: ${({ theme }) => theme.btnLink.boxShadow};
  color: ${({ theme }) => theme.btnLink.txt};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.btnLink.boxShadowHover}, ${theme.btnLink.boxShadow}`};
    ${bsStyle};
  }

  &:active {
    box-shadow: ${({ theme }) =>
      `${theme.btnLink.boxShadowActive}, ${theme.btnLink.boxShadow}`};
  }
`;
