import React from 'react';
import {
  ButtonsList,
  HeaderBox,
  HeaderConst,
  HeaderWrapper,
} from '../../components/sections/Header/Header.styled';
import { ButtonHash } from '../../components/elements';
import { links } from '../../context';
import { useMode } from '../../providers';
import { DarkModeAnimation } from '../DarkModeAnimation/DarkModeAnimation';

export const Header: React.FC = () => {
  const { toggleMode } = useMode();

  return (
    <>
      <HeaderConst onClick={toggleMode}></HeaderConst>
      <HeaderBox onClick={toggleMode}>
        <DarkModeAnimation />
        <HeaderWrapper>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              color: 'white',
              backgroundColor: 'red',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              lineHeight: 1,
              boxShadow: 'inset 0 0 10px 4px gray',
            }}
          >
            Logo
          </div>
          <ButtonsList>
            {links.map(link => (
              <ButtonHash
                key={link.path}
                caption={link.name}
                linkTo={link.path}
              />
            ))}
          </ButtonsList>
        </HeaderWrapper>
      </HeaderBox>
    </>
  );
};