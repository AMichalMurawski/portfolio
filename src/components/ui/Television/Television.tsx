import React, { PropsWithChildren } from 'react';
import {
  TVContainer,
  Screen,
  Controls,
  Button,
  Shine,
} from './Television.styled';

// Komponent Television
export const Television: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TVContainer>
      <Screen>
        <Shine />
        {children}
      </Screen>
      <Controls>
        <Button>Power</Button>
        <Button>Volume</Button>
        <Button>Channel</Button>
      </Controls>
    </TVContainer>
  );
};
