import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LiElement = styled.li`
  list-style-type: none;
`;

export const LinkElement = styled(Link)`
  text-decoration: none;
`;

export const ButtonElement = styled.button.attrs({ type: 'button' });

export const SubmitElement = styled.button.attrs({ type: 'submit' });

export const headingStyles = (props: any) => `
    color: ${props.theme.color.main};
    max-width: max-content;
    width: 100%;
`;
