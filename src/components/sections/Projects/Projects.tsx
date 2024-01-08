import React from 'react';
import {
  ProjectItem,
  ProjectWrapper,
  ProjectsConteiner,
} from './Projects.styled';
import { Subtitle } from '../../elements';
import { projects } from '../../../context';
import { Project } from '../../ui';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ScrollBoard } from './ScrollBoard/ScrollBoard';

export const Projects: React.FC = () => {
  return (
    <ProjectWrapper id="projects">
      <Subtitle>My Projects</Subtitle>
      <ScrollBoard>
        <ProjectsConteiner
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          slidesPerView={'auto'}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          scrollbar={{}}
          modules={[Autoplay, Navigation]}
        >
          {projects.map((project, i) => (
            <ProjectItem key={i}>
              <Project
                description={project.description}
                tools={project.tools}
                images={project.images}
                name={project.name}
              />
            </ProjectItem>
          ))}
        </ProjectsConteiner>
      </ScrollBoard>
    </ProjectWrapper>
  );
};
