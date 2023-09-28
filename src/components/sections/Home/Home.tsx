import React from 'react';
import { HomeWrapper, Introduce, Sentence } from './Home.styled';
import { ButtonCV } from '../../elements/buttons';
import { Subtitle, Title } from '../../elements/texts';

export const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Introduce>
        <Subtitle>Web Developer</Subtitle>
        <Title>Michał Murawski</Title>
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
          }}
        >
          <ButtonCV linkTo="#" />
        </div>
      </div>
    </HomeWrapper>
  );
};
