import styled, { keyframes } from 'styled-components';
import { H1Element, H2Element } from '../../../utils/styles';

const flickeringStartTimes = [15, 30, 45, 50, 55, 80, 92, 98];

const flickeringStart = keyframes`
  0%, ${flickeringStartTimes.map(e => `${e - 2}%, ${e + 2}%`).join(', ')} {
    text-shadow: 0 0 7px #00f7ff, 0 0 10px #00f7ff, 0 0 21px #00f7ff,
      0 0 42px #00f7ff, 0 0 82px #00f7ff, 0 0 92px #00f7ff, 0 0 102px #00f7ff,
      0 0 151px #00f7ff;
    box-shadow: 0 0 3px 1px #00f7ff, 0 0 5px 2px #00f7ff, 0 0 10px 3px #00f7ff,
      0 0 20px 4px #00f7ff, inset 0 0 3px 1px #00f7ff, inset 0 0 5px 2px #00f7ff,
      inset 0 0 10px 3px #00f7ff, inset 0 0 20px 4px #00f7ff;
  } 
  
  ${flickeringStartTimes.map(e => `${e - 1}%, ${e + 1}%`).join(', ')} {
    text-shadow: 0 0 #00f7ff;
    box-shadow: 0 0 #00f7ff;
  }
`;

const flickering = keyframes`
  0%, 20.9%, 21.9%, 22.5%, 58.9%, 60.9%, 61.5% {
    text-shadow: 0 0 7px #00f7ff, 0 0 10px #00f7ff, 0 0 21px #00f7ff,
      0 0 42px #00f7ff, 0 0 82px #00f7ff, 0 0 92px #00f7ff, 0 0 102px #00f7ff,
      0 0 151px #00f7ff;
    box-shadow: 0 0 3px 1px #00f7ff, 0 0 5px 2px #00f7ff, 0 0 10px 3px #00f7ff,
      0 0 20px 4px #00f7ff, inset 0 0 3px 1px #00f7ff, inset 0 0 5px 2px #00f7ff,
      inset 0 0 10px 3px #00f7ff, inset 0 0 20px 4px #00f7ff;
  }  

  21%, 22%, 59%, 61% {
    text-shadow: 0 0 #00f7ff;
    box-shadow: 0 0 #00f7ff;
  }

  
`;

export const IntroductionWrapper = styled.div`
  padding: 30px;
  color: ${props => props.theme.color.introduction};
  // background-color: ${props => props.theme.bg.introduction};
  border: 0 solid #a0ffff;
  border-radius: 30px;
  height: min-content;
  color: #a0ffff;
  font-weight: 400;
  letter-spacing: 0.4em;
  text-shadow: 0 0 7px #00f7ff, 0 0 10px #00f7ff, 0 0 21px #00f7ff,
    0 0 42px #00f7ff, 0 0 82px #00f7ff, 0 0 92px #00f7ff, 0 0 102px #00f7ff,
    0 0 151px #00f7ff;
  box-shadow: 0 0 3px 1px #00f7ff, 0 0 5px 2px #00f7ff, 0 0 10px 3px #00f7ff,
    0 0 20px 4px #00f7ff, inset 0 0 3px 1px #00f7ff, inset 0 0 5px 2px #00f7ff,
    inset 0 0 10px 3px #00f7ff, inset 0 0 20px 4px #00f7ff;
  animation: ${flickeringStart} 2s ease-in-out,
    ${flickering} 20s 5s ease-in-out infinite;
`;

export const Proffesion = styled(H2Element)`
  color: inherit;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const Name = styled(H1Element)`
  color: inherit;
  font-family: 'Sacramento', sans-serif;
  font-weight: 400;
`;

export const Sentence = styled.p`
  padding-top: 10px;
  font-family: 'Yellowtail', sans-serif;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.3em;
  line-height: ${props => props.theme.lineHeight.medium};
  color: #5050ff;
`;
