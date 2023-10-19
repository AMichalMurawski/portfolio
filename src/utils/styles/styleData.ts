import { ModeType } from '../../providers/ThemeProvider/types';

const basicStyle = {
  fontSize: {
    main: '18px',
    title: '54px',
    subtitle: '36px',
    sentence: '24px',
  },
  fontFamily: {
    main: 'Roboto',
  },
  lineHeight: {
    main: 1.2,
    small: 1,
    medium: 1.5,
    big: 1.8,
  },
  height: {
    header: 150,
    brick: 40,
  },
  width: {
    brick: 120,
  },
  gap: {
    mortar: 4,
  },
};

const lightStyle = {
  color: {
    main: 'black',
    introduction: 'rgb(230, 230, 230)',
  },
  bg: {
    main: '#eee',
    introduction: 'rgba(80, 80, 250, 1)',
    introduction2: 'rgba(80, 80, 250, 1)',
    wall: '#ddd',
    brick: '#eee',
    wallAlpha: 0,
  },
  transform: {
    sky: 'translate(-10%, -60%)',
    sun: 'rotate(0)',
  },
  wall: {
    bg: '#666',
    brick: '#eee',
  },
  btnLink: {
    bg: 'red',
    txt: 'white',
    boxShadow: '1px 1px 1px black, 4px 4px 4px red',
    boxShadowActive: 'inset 0 0 4px 2px black',
    boxShadowHover: 'inset 0 0 4px black',
  },
};

const darkStyle = {
  color: {
    main: 'white',
    introduction: 'black',
  },
  bg: {
    main: '#444',
    introduction: 'orange',
    wall: '#111',
    brick: '#444',
    wallAlpha: 0.6,
  },
  transform: {
    sky: 'translate(0, 0)',
    sun: 'rotate(90deg)',
  },
  wall: {
    bg: '#111',
    brick: '#444',
  },
  btnLink: {
    bg: 'red',
    txt: 'white',
    boxShadow: '1px 1px 1px black, 4px 4px 4px red',
    boxShadowActive: 'inset 0 0 4px 2px black',
    boxShadowHover: 'inset 0 0 4px black',
  },
};

export const styleData: any = (mode?: ModeType) => ({
  ...basicStyle,
  ...(mode === 'light' ? lightStyle : darkStyle),
});
