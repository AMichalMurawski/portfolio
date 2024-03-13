import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const shine = keyframes`
  0% {
    left: -50%;
  }
  43%{
    left: -50%;
  }
  50% {
    left: 50%;
  }
  57% {
    left: 150%;
  }
  100% {
    left: 150%;
  }
`;

export const TVContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bg.tv};
  border: 10px solid #000;
  border-color: ${({ theme }) => theme.bg.tv};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) =>
    theme.transition(['background-color', 'border'])};
`;

export const Screen = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.bg.screen};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.transition('background-color')};
`;

export const Shine = styled.div`
  position: absolute;
  top: 50%;
  left: -50%;
  width: 50px;
  height: 200%;
  transform: translateY(-50%) rotate(30deg);
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 45%,
    rgba(255, 255, 255, 0.5) 55%,
    rgba(255, 255, 255, 0.2) 80%,
    rgba(255, 255, 255, 0.05) 100%
  );
  animation: ${shine} 8s infinite linear;
  z-index: 1;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
