import styled from 'styled-components';
import { H2Element } from '../../../utils/styles';

export const Sub = styled(H2Element)`
  ${props => props.theme.fontFamily.Nosifer400}
  color: ${props => props.theme.color.subtilte};
  text-shadow: 0 0 2px #a0ffff, 0 0 4px #90ffff;
`;
