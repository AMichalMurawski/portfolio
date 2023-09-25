import React from 'react';
import {
  ButtonBox,
  ButtonsList,
  HeaderBox,
  HeaderWrapper,
} from './Header.styled';
import { ButtonLink } from '../../elements/ButtonLink/ButtonLink';
import { links } from '../../../context';

export const Header: React.FC = () => {
  return (
    <HeaderBox>
      <HeaderWrapper>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            lineHeight: 1,
          }}
        >
          Logo
        </div>
        <ButtonsList>
          {links.map(link => (
            <ButtonBox key={link.path}>
              <ButtonLink caption={link.name} linkTo={link.path} />
            </ButtonBox>
          ))}
        </ButtonsList>
      </HeaderWrapper>
    </HeaderBox>
  );
};
