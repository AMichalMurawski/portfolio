import styled from 'styled-components';

interface SunMoonRotateProps {
  $rotate: number;
}

export const SunMoonRotate = styled.div<SunMoonRotateProps>`
  position: absolute;
  top: 200%;
  left: 50%;
  width: 600px;
  height: 600px;
  transition: ${({ theme }) => theme.transition('transform')};
  transform: translate(-50%, -50%) rotateZ(${props => props.$rotate}deg);
`;

export const SunMoonBox = styled.div<SunMoonRotateProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: rotateZ(${props => props.$rotate}deg);
  transition: ${({ theme }) => theme.transition('transform')};
`;

const SunMoon = styled.div`
  position: absolute;
  left: 46%;
  top: 22%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

export const Sun = styled(SunMoon)`
  background-color: rgb(255, 255, 230);
  box-shadow: 0px 0px 20px 7px rgb(255, 255, 230);
`;

export const Moon = styled(SunMoon)`
  background-color: #eef0f5;
  // background: linear-gradient(-45deg, #eef0f5, rgb(0, 0, 255));
  // box-shadow: 2px 0 5px 2px rgba(229, 229, 229, 0.3),
  //   0 0 5px 1px rgba(229, 229, 229, 0.3), 2px 0 5px 2px rgba(229, 229, 229, 0.3),
  //   0 0 1px 1px rgba(229, 229, 229, 0.3);
  box-shadow: inset -5px 4px 3px -2px rgb(250, 250, 250),
    inset 10px -10px 25px 22px rgba(100, 100, 100, 0.5),
    4px -3px 14px 8px rgba(255, 255, 255, 0.3215686275);
`;

interface CraterProps {
  $top: number;
  $left: number;
  $scale: number;
}

export const Crater = styled.div<CraterProps>`
  position: absolute;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #888;
  box-shadow: 1px 1px 2px 1px #333;
  transform: translate(-50%, -50%) scale(${props => props.$scale});
`;
