import React from 'react';
import { Description, Image, ProjectWrapper, Tool } from './Project.styled';

interface ProjectProps {
  tools: string[];
  image: string | string[];
  description: string;
}

export const Project: React.FC<ProjectProps> = ({
  tools,
  image,
  description,
}) => {
  return (
    <ProjectWrapper>
      {typeof image === 'string' ? <Image src={image} /> : null}
      <Tool>{tools.map(tool => tool).join(', ')}</Tool>
      <Description>{description}</Description>
    </ProjectWrapper>
  );
};
