import React, { createContext, PropsWithChildren, useState } from 'react';
import { useMediaQuery } from '../useContext';
import { MediaState } from './types';

const defaultMedia: MediaState = {
  mobile: false,
  tablet: false,
  desktop: false,
};
export const MediaContext = createContext(defaultMedia);

export const MediaProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const mobile = useMediaQuery(480);
  const tablet = useMediaQuery(768);
  const desktop = useMediaQuery(1200);

  return (
    <MediaContext.Provider value={{ mobile, tablet, desktop }}>
      {children}
    </MediaContext.Provider>
  );
};
