import styled from 'styled-components';
import { Link } from 'react-scroll';

export const headingStyles = (props: any) => `
    color: ${props.theme.color.main};
    max-width: max-content;
    width: 100%;
    transition: ${({ theme }) => theme.transition('color')};
`;

export const H1Element = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  ${headingStyles}
`;

export const H2Element = styled.h2`
  font-size: ${props => props.theme.fontSize.subtitle};
  ${headingStyles}
`;

export const PElement = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontSize.main};
    color: ${theme.color.main};
  `}
  transition: ${({ theme }) => theme.transition('color')}
`;

export const AElement = styled.a`
  font-style: normal;
  text-decoration: none;
  color: ${props => props.theme.color.main};
`;

export const LiElement = styled.li`
  list-style-type: none;
`;

export const ImgElement = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const ButtonElement = styled.button.attrs({ type: 'button' });

export const SubmitElement = styled.button.attrs({ type: 'submit' });

export const HashLinkElement = styled(Link)`
  text-decoration: none;
`;

export const LinkElement = styled.a`
  text-decoration: none;
  color: inherit;
`;
