import styled from 'styled-components';
import { H2Element } from '../../../utils/styles';

export const Sub = styled(H2Element)`
  ${({ theme }) => theme.fontFamily.RubikWetPaint400};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.subtilte};
  // text-shadow: ${({ theme }) => theme.txtShadow.subtitle};
  transition: ${({ theme }) => theme.transition(['color', 'text-shadow'])};
`;
