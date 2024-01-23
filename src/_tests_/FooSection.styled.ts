import styled, { keyframes } from 'styled-components';

export const Section = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background-color: white;
`;

const filterAnimation = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50%{
        opacity:0;
    }
`;

const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #dfe2e3ff;
  opacity: 1;
  animation: ${filterAnimation} 900ms infinite;
`;

export const Filter1 = styled(Filter)`
  filter: url(#m);
  animation-delay: 0ms;
`;

export const Filter2 = styled(Filter)`
  filter: url(#n);
  animation-delay: -300ms;
`;

export const Filter3 = styled(Filter)`
  filter: url(#o);
  animation-delay: -600ms;
`;
