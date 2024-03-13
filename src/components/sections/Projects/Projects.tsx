import React from 'react';
import { ProjectWrapper } from './Projects.styled';
import { ProjectsProvider } from '../../../providers';
import { Subtitle } from '../../elements';
import { ProjectsList, Television } from '../../ui';

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
