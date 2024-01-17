import React from 'react';
import { HeaderBox, HeaderConst, HeaderWrapper } from './Header.styled';
import { HeaderBackground } from '../../ui';

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
        </HeaderWrapper>
      </HeaderBox>
    </>
  );
};
