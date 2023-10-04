import React from 'react';
import {
  ProjectItem,
  ProjectWrapper,
  ProjectsContener,
} from './Projects.styled';
import { Subtitle } from '../../elements/texts';
import { projects } from '../../../context';
import { Project } from '../../elements/ui';

export const Projects: React.FC = () => {
  return (
    <ProjectWrapper id="projects">
      <Subtitle>My Projects</Subtitle>
      <ProjectsContener>
        {projects.map(project => (
          <ProjectItem key={project.name}>
            <Project
              description={project.description}
              tools={project.tools}
              image={project.images[0]}
            />
          </ProjectItem>
        ))}
      </ProjectsContener>
    </ProjectWrapper>
  );
};
