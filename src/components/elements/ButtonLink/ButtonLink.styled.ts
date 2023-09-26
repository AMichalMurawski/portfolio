import styled from 'styled-components';
import { LinkElement } from '../../../utils/styled';

const bsStyle = '1px 1px 1px black, 4px 4px 4px red';

export const Button = styled(LinkElement).attrs({ type: 'button' })`
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.theme.btnLink.bg};
  box-shadow: ${props => props.theme.btnLink.boxShadow};
  cursor: pointer;
  color: ${props => props.theme.btnLink.txt};

  &:hover {
    box-shadow: ${props =>
      `${props.theme.btnLink.boxShadowHover}, ${props.theme.btnLink.boxShadow}`};
    ${bsStyle};
  }

  &:active {
    box-shadow: ${props =>
      `${props.theme.btnLink.boxShadowActive}, ${props.theme.btnLink.boxShadow}`};
  }
`;