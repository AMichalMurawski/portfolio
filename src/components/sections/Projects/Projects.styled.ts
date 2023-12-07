import styled from 'styled-components';
import { PageWrapper } from '../../../App.styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProjectWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ProjectsContener = styled(Swiper)`
  width: 100%;
  cursor: w-resize;
  background-color: white;
  border: 4px solid black;
  border-radius: 20px;
  box-shadow: inset 0 0 2px rgb(255, 255, 255), inset 0 0 4px rgb(220, 220, 220);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: inset 20px 0 10px rgba(250, 250, 250, 0.2),
      inset 15px 0 8px rgba(250, 250, 250, 0.3),
      inset 10px 0 6px rgba(250, 250, 250, 0.4),
      inset 6px 0 4px rgba(250, 250, 250, 0.6),
      inset 3px 0 2px rgba(250, 250, 250, 0.8),
      inset 0 20px 10px rgba(250, 250, 250, 0.2),
      inset 0 15px 8px rgba(250, 250, 250, 0.3),
      inset 0 10px 6px rgba(250, 250, 250, 0.4),
      inset 0 6px 4px rgba(250, 250, 250, 0.6),
      inset 0 3px 2px rgba(250, 250, 250, 0.8);
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: inset 0 0 2px rgb(255, 255, 255),
      inset 0 0 4px rgb(220, 220, 220), inset 0 0 2px rgb(0, 0, 0),
      inset -4px -2px 8px rgb(50, 50, 50),
      inset -8px -4px 16px rgb(150, 150, 150),
      inset -12px -6px 24px rgb(255, 255, 255);
    transform: translateZ(5px);
    z-index: 5;
  }
`;

export const ProjectItem = styled(SwiperSlide)`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
