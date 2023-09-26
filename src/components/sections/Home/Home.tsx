import React from 'react';
import { HoIAm, HomeWrapper, Introduce, Sentence } from './Home.styled';

export const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Introduce>
        <HoIAm>
          <span>Web Developer</span>
          <br />
          Michał Murawski
        </HoIAm>
        <Sentence>
          Anything that can be explained logically,
          <br />
          can be coded
        </Sentence>
      </Introduce>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '40vw',
            maxWidth: '480px',
            maxHeight: '480px',
            height: '40vw',
            borderRadius: '50%',
            backgroundColor: 'orange',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
          }}
        >
          My Pic
        </div>
        <div
          style={{
            position: 'absolute',
            left: '8%',
            top: '80%',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          CV
        </div>
      </div>
    </HomeWrapper>
  );
};
