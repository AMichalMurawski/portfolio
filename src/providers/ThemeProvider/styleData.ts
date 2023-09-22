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
    main: 'purple',
  },
  color: {
    main: 'darkgreen',
  },
};

const darkStyle = {
  bg: {
    main: 'black',
  },
  color: {
    main: 'lightgreen',
  },
};

export const style = (mode?: ModeType) => ({
  ...basicStyle,
  ...(mode === 'light' ? lightStyle : darkStyle),
});
