import styled, { keyframes } from 'styled-components';
import { H1Element, H2Element } from '../../../utils/styles';

const flickeringStartTimes = [15, 30, 45, 50, 55, 80, 92, 98];

const flickeringStart = keyframes`
  0%, ${flickeringStartTimes.map(e => `${e - 2}%, ${e + 2}%`).join(', ')} {
    color: #a0ffff;
    text-shadow: 0 0 7px #00f7ff, 0 0 10px #00f7ff, 0 0 21px #00f7ff,
      0 0 42px #00f7ff, 0 0 82px #00f7ff, 0 0 92px #00f7ff, 0 0 102px #00f7ff,
      0 0 151px #00f7ff;
    box-shadow: 0 0 3px 1px #00f7ff, 0 0 5px 2px #00f7ff, 0 0 10px 3px #00f7ff,
      0 0 20px 4px #00f7ff, inset 0 0 3px 1px #00f7ff, inset 0 0 5px 2px #00f7ff,
      inset 0 0 10px 3px #00f7ff, inset 0 0 20px 4px #00f7ff;
  } 
  
  ${flickeringStartTimes.map(e => `${e - 1}%, ${e + 1}%`).join(', ')} {
    color: lightgray;
    text-shadow: 0 0 #00f7ff;
    box-shadow: 0 0 #00f7ff;
  }
`;

const flickering = keyframes`
  0%, 20.9%, 21.9%, 22.5%, 58.9%, 60.9%, 61.5% {
    color: #a0ffff;
    text-shadow: 0 0 7px #00f7ff, 0 0 10px #00f7ff, 0 0 21px #00f7ff,
      0 0 42px #00f7ff, 0 0 82px #00f7ff, 0 0 92px #00f7ff, 0 0 102px #00f7ff,
      0 0 151px #00f7ff;
    box-shadow: 0 0 3px 1px #00f7ff, 0 0 5px 2px #00f7ff, 0 0 10px 3px #00f7ff,
      0 0 20px 4px #00f7ff, inset 0 0 3px 1px #00f7ff, inset 0 0 5px 2px #00f7ff,
      inset 0 0 10px 3px #00f7ff, inset 0 0 20px 4px #00f7ff;
  }  

  21%, 22%, 59%, 61% {
    color: lightgray;
    text-shadow: 0 0 #00f7ff;
    box-shadow: 0 0 #00f7ff;
  }
`;

export const IntroductionWrapper = styled.div`
  padding: 30px;
  color: ${({ theme }) => theme.color.introduction};
  border: 0 solid #a0ffff;
  border-radius: 30px;
  height: min-content;
  width: auto;
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
  width: max-content;
  ${({ theme }) => theme.fontFamily.EduTASBeginner700}
  margin-bottom: 15px;
`;

export const Name = styled(H1Element)`
  color: inherit;
  ${({ theme }) => theme.fontFamily.DancingScript400}
`;

export const Sentence = styled.p`
  padding-top: 10px;
  ${({ theme }) => theme.fontFamily.EduTASBeginner700}
  font-size: 18px;
  letter-spacing: 0.2em;
  line-height: ${({ theme }) => theme.lineHeight.medium};
  color: ${({ theme }) => theme.color.introduction_sentence};
  transition: ${({ theme }) => theme.transition('color')};
`;
