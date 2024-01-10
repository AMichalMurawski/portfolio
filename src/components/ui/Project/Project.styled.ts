import styled from 'styled-components';
import { ImgElement, PElement } from '../../../utils/styles';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr 190px 10fr;
  grid-gap: 20px;
  width: 100%;
  height: 610px;
  padding: 15px;
  z-index: -10;

  @media screen and (min-width: 400px) {
    grid-template-rows: 1fr 1fr 240px 10fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 350px 1fr;
    grid-template-rows: 1fr 1fr 112fr;
    grid-gap: 30px;
    height: 400px;
  }
`;

export const Name = styled.h3`
  ${props => props.theme.fontFamily.title1}
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  text-align: center;
  grid-area: 1 / 1 / 2 / 2;

  @media screen and (min-width: 900px) {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const Tool = styled(PElement)`
  ${props => props.theme.fontFamily.title2}
  font-size: 20px;
  text-align: center;
  height: 100%;
  grid-area: 2 / 1 / 3 / 2;

  @media not screen and (min-width: 600px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: pre-wrap;
    overflow: hidden;
  }

  @media screen and (min-width: 900px) {
    grid-area: 2 / 2 / 3 / 3;
  }
`;

export const Description = styled(PElement)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 11;
  white-space: pre-wrap;
  grid-area: 4 / 1 / 5 / 2;

  @media screen and (min-width: 400px) {
    -webkit-line-clamp: 9;
  }

  @media screen and (min-width: 900px) {
    -webkit-line-clamp: 10;
    grid-area: 3 / 2 / 4 / 3;
  }
`;

export const Image = styled(ImgElement)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageSwiper = styled(Swiper)`
  position: relative;
  width: 180px;
  height: 190px;
  grid-area: 3 / 1 / 4 / 2;
  filter: drop-shadow(15px 10px 6px gray);

  @media screen and (min-width: 400px) {
    width: 230px;
    height: 240px;
  }

  @media screen and (min-width: 900px) {
    width: 100%;
    height: 100%;
    padding: 20px;
    grid-area: 1 / 1 / 4 / 2;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
  }
`;

export const ImageSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;
