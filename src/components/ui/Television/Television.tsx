import React, { PropsWithChildren } from 'react';
import {
  TVContainer,
  Screen,
  Controls,
  Button,
  Shine,
} from './Television.styled';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { projects } from '../../../context';
import { ProjectItem } from '../ProjectsList/ProjectsList.styled';
import { Project } from '../Project/Project';
import { useProjects } from '../../../providers';

// Komponent Television
export const Television: React.FC<PropsWithChildren> = ({ children }) => {
  const { setControlledSwiper } = useProjects();

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
