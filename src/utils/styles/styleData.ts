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
    board: 50,
  },
  gap: {
    mortar: 4,
  },
  transition: (props: string | string[]) => {
    if (typeof props === 'string') {
      return `${props} ease-in 300ms`;
    }
    const trans = props.map(prop => `${prop} ease-in 300ms`).join(', ');
    return trans;
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
    wall: '#ddd',
    brick: '#eee',
    wallAlpha: 0,
    cloud:
      'linear-gradient(180deg, rgba(242, 249, 254, 0.8) 5%, rgba(214, 240, 253, 0.8) 100%)',
    cloud2: 'rgba(242, 249, 254, 0.8)',
    sky: 'lightblue',
  },
  filter: {
    brightness: 100,
  },
  transform: {
    sun: 0,
    moon: -30,
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
    cloud:
      'linear-gradient(180deg, rgb(182, 189, 194) 5%, rgb(154, 180, 193) 100%)',
    cloud2: 'rgb(182, 189, 194)',
    sky: 'darkblue',
  },
  filter: {
    brightness: 50,
  },
  transform: {
    sun: -30,
    moon: 0,
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
