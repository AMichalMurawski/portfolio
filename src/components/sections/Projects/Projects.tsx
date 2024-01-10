import React from 'react';
import { ProjectWrapper } from './Projects.styled';
import { ProjectsProvider } from '../../../providers';
import { Subtitle } from '../../elements';
import { ProjectsList } from '../../ui';

export const Projects: React.FC = () => {
  return (
    <ProjectWrapper id="projects">
      <Subtitle>My Projects</Subtitle>
      <ProjectsProvider>
        <ProjectsList />
      </ProjectsProvider>
    </ProjectWrapper>
  );
};
