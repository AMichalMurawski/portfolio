import { ModeType } from './types';

const basicStyle = {
  fontSize: {
    main: '18px',
    title: '36px',
    subtitle: '24px',
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
  },
};

const lightStyle = {
  color: {
    main: 'black',
    introduction: 'black',
  },
  bg: {
    main: '#eee',
    introduction: 'orange',
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

export const style = (mode?: ModeType) => ({
  ...basicStyle,
  ...(mode === 'light' ? lightStyle : darkStyle),
});
