import React from 'react';
import {
  ButtonsList,
  HeaderBox,
  HeaderConst,
  HeaderWrapper,
} from './Header.styled';
import { ButtonHash, ButtonHashLamp } from '../../elements';
import { links } from '../../../context';
import { HeaderBackground, LedBoard } from '../../ui';

export const Header: React.FC = () => {
  return (
    <>
      <HeaderConst></HeaderConst>
      <HeaderBox>
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
          <LedBoard linkList={links} />
          {/* <ButtonsList>
            {links.map(link => (
              <ButtonHashLamp
                key={link.path}
                caption={link.name}
                linkTo={link.path}
              />
            ))}
          </ButtonsList> */}
        </HeaderWrapper>
      </HeaderBox>
    </>
  );
};
