import React from 'react';
import {
  Description,
  Image,
  ImageSwiper,
  ImageSlide,
  Name,
  ProjectWrapper,
  Tool,
} from './Project.styled';
import { Autoplay, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

interface ProjectProps {
  tools: string[];
  images: string[];
  description: string;
  name: string;
}

export const Project: React.FC<ProjectProps> = ({
  tools,
  images,
  description,
  name,
}) => {
  return (
    <ProjectWrapper>
      <ImageSwiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        scrollbar={{}}
        modules={[Autoplay, EffectCube]}
      >
        {images.length > 0 &&
          images.map((image, i) => (
            <ImageSlide key={i}>
              <Image src={image} />
            </ImageSlide>
          ))}
      </ImageSwiper>
      <Tool>{tools.map(tool => tool).join(', ')}</Tool>
      <Description>{description}</Description>
      <Name>{name}</Name>
    </ProjectWrapper>
  );
};
