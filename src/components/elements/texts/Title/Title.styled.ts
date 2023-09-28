import styled from 'styled-components';
import { headingStyles } from '../../../../utils/styled';

export const H1Element = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  ${headingStyles}
`;
