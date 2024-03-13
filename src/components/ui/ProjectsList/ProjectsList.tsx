import React from 'react';
import { ProjectItem, ProjectsConteiner } from './ProjectsList.styled';
import { Project } from '../Project/Project';
import { projects } from '../../../context';
import { useProjects } from '../../../providers';
import { Autoplay, Controller, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Television } from '../Television/Television';

export const ProjectsList: React.FC = () => {
  const { setControlledSwiper } = useProjects();

  return (
    <Television>
      <ProjectsConteiner
        onSwiper={setControlledSwiper}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        modules={[Autoplay, Controller, Navigation]}
      >
        {projects.map((project, i) => (
          <ProjectItem key={project.name}>
            <Project
              description={project.description}
              tools={project.tools}
              images={project.images}
              name={project.name}
            />
          </ProjectItem>
        ))}
      </ProjectsConteiner>
    </Television>
  );
};
