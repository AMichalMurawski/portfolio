import styled from 'styled-components';
import { H2Element } from '../../../utils/styles';

export const Sub = styled(H2Element)`
  ${props => props.theme.fontFamily.Nosifer700}
  color: ${props => props.theme.color.subtilte};
  font-weight: 400;
`;
