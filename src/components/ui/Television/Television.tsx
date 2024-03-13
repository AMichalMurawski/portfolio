import React, { PropsWithChildren } from 'react';
import { TVContainer, Screen, Shine, Console } from './Television.styled';
import { TvConsole } from './Console';

// Komponent Television
export const Television: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TVContainer>
      <Screen>
        <Shine />
        {children}
      </Screen>
      <Console>
        <TvConsole />
      </Console>
    </TVContainer>
  );
};
