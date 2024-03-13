import React from 'react';
import { Console, IconWrapper } from './Console.styled';
import { IconSvg } from '../../elements';
import { useProjects } from '../../../providers';

const consoleIcons = ['previous', 'play', 'pause', 'next', 'enlarge'];

export const TvConsole: React.FC = () => {
  const { autoplayOn, autoplayOff, prevSlide, nextSlide } = useProjects();

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case 'play':
        autoplayOn();
        break;
      case 'pause':
        autoplayOff();
        break;
      case 'previous':
        prevSlide();
        break;
      case 'next':
        nextSlide();
        break;
      default:
        break;
    }
  };

  return (
    <Console>
      {consoleIcons.map((icon, i) => (
        <IconWrapper key={icon} id={icon} onClick={handleClick}>
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
