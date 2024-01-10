import React from 'react';
import { ScrollBoard } from '../ScrollBoard';
import { ProjectItem, ProjectsConteiner } from './ProjectsList.styled';
import { Project } from '../Project/Project';
import { projects } from '../../../context';
import { useProjects } from '../../../providers';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const ProjectsList: React.FC = () => {
  const { controlledSwiper, setControlledSwiper } = useProjects();

  return (
    <ScrollBoard>
      <ProjectsConteiner
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={'auto'}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        scrollbar={{}}
        modules={[Autoplay, Controller, Navigation]}
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
  );
};
