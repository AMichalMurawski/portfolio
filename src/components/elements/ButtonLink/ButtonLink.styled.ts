import styled from 'styled-components';
import { LinkElement } from '../../../utils/styled';

export const Button = styled(LinkElement).attrs({ type: 'button' })`
  color: ${props => props.theme.txt.main};
`;
