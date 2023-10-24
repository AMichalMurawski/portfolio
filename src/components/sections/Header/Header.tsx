import React from 'react';
import {
  ButtonsList,
  HeaderBox,
  HeaderConst,
  HeaderWrapper,
} from './Header.styled';
import { ButtonHash } from '../../elements';
import { links } from '../../../context';
import { useMode } from '../../../providers';
import { HeaderBackground, WindowDarkMode } from '../../ui';

export const Header: React.FC = () => {
  const { toggleMode } = useMode();

  return (
    <>
      <HeaderConst></HeaderConst>
      <HeaderBox>
        {/* <WindowDarkMode /> */}
        <HeaderWrapper>
          <HeaderBackground />
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
              zIndex: 1,
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
