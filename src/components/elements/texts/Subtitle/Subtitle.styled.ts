import styled from 'styled-components';
import { headingStyles } from '../../../../utils/styled';

export const H2Element = styled.h2`
  font-size: ${props => props.theme.fontSize.subtitle};
  ${headingStyles}
`;
