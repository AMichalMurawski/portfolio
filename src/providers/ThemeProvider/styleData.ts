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
  bg: {
    main: '#eee',
  },
  wall: {
    bg: '#666',
    brick: '#eee'
  },
  txt: {
    main: 'black',
  },
};

const darkStyle = {
  bg: {
    main: '#444',
  },
  wall: {
    bg: '#111',
    brick: '#444'
  },
  txt: {
    main: 'white',
  },
};

export const style = (mode?: ModeType) => ({
  ...basicStyle,
  ...(mode === 'light' ? lightStyle : darkStyle),
});
