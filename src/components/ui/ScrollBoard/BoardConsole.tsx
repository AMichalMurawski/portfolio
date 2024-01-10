import React from 'react';
import { Console, IconWrapper } from './BoardConsole.styled';
import { IconSvg } from '../../elements';

const consoleIcons = ['eject', 'previous', 'play', 'pause', 'next', 'enlarge'];

export const BoardConsole: React.FC = () => {
  return (
    <Console>
      {consoleIcons.map((icon, i) => (
        <IconWrapper>
          <IconSvg
            type="iconslides"
            name={icon}
            dimension="15px"
            fill="white"
          />
        </IconWrapper>
      ))}
    </Console>
  );
};
