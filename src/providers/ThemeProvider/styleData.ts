import { ModeType } from './types';

const basicStyle = {
  title: {
    font: 'Roboto',
    size: 36,
  },
  sectionTitle: {
    font: 'Roboto',
    size: 24,
  },
};

const lightStyle = {
  color: {
    introduce: 'black',
  },
  bg: {
    main: '#eee',
    introduce: 'orange',
  },
  wall: {
    bg: '#666',
    brick: '#eee',
  },
  txt: {
    main: 'black',
  },
  btnLink: {
    bg: 'red',
    txt: 'white',
    boxShadow: '1px 1px 1px black, 4px 4px 4px red',
    boxShadowActive: 'inset 0 0 4px 2px black',
    boxShadowHover: 'inset 0 0 4px black',
  },
  introduce: {
    color: 'black',
    bg: 'orange',
    fontSize: '40px',
    spanSize: '26px',
    sentenceSize: '18px',
    lineHeight: 1.2,
    sentenceHeight: 1.5,
  },
};

const darkStyle = {
  color: {
    introduce: 'black',
  },
  bg: {
    main: '#444',
  },
  wall: {
    bg: '#111',
    brick: '#444',
  },
  txt: {
    main: 'white',
  },
  btnLink: {
    bg: 'red',
    txt: 'white',
    boxShadow: '1px 1px 1px black, 4px 4px 4px red',
    boxShadowActive: 'inset 0 0 4px 2px black',
    boxShadowHover: 'inset 0 0 4px black',
  },
  introduce: {
    color: 'black',
    bg: 'orange',
    fontSize: '60px',
    spanSize: '26px',
    sentenceSize: '20px',
    fontWeight: 700,
    sentenceHeight: 1.5,
  },
};

export const style = (mode?: ModeType) => ({
  ...basicStyle,
  ...(mode === 'light' ? lightStyle : darkStyle),
});
