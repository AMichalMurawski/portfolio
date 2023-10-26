import styled from 'styled-components';

const SunMoonRotate = styled.div`
  position: absolute;
  top: 290px;
  left: 200px;
  width: 600px;
  height: 600px;
  transition: ${props => props.theme.transition('transform')};
`;

const SunMoon = styled.div`
  position: absolute;
  left: 25%;
  top: 5%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const SunRotate = styled(SunMoonRotate)`
  transform: translate(-50%, -50%)
    rotateZ(${props => props.theme.transform.sun}deg);
`;

export const Sun = styled(SunMoon)`
  background-color: rgb(255, 255, 230);
  box-shadow: 0px 0px 20px 7px rgb(255, 255, 230);
`;

export const MoonRotate = styled(SunMoonRotate)`
  transform: translate(-50%, -50%)
    rotateZ(${props => props.theme.transform.moon}deg);
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

  // &::after {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   border-radius: 50%;
  //   background-image: radial-gradient(
  //       circle at 30% 30%,
  //       #999 0%,
  //       #888 10%,
  //       transparent 10%,
  //       transparent 100%
  //     ),
  //     radial-gradient(
  //       circle at 30% 30%,
  //       #999 0%,
  //       #888 10%,
  //       transparent 10%,
  //       transparent 100%
  //     );
  // }
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
