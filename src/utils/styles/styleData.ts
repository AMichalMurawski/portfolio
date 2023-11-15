import { ModeType } from '../../providers/ThemeProvider/types';
import { basicStyle } from './basicStyle';
import { lightStyle } from './lightStyle';
import { darkStyle } from './darkStyle';

export const styleData: any = (mode?: ModeType) => ({
  ...basicStyle,
  ...(mode === 'light' ? lightStyle : darkStyle),
});
