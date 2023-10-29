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
    DancingScript400: `font-family: 'Dancing Script', cursive;
                        font-weight: 400;`,
    DancingScript700: `font-family: 'Dancing Script', cursive;
                        font-weight: 700;`,
    EduTASBeginner400: `font-family: 'Edu TAS Beginner', cursive;
                        font-weight: 400;`,
    EduTASBeginner700: `font-family: 'Edu TAS Beginner', cursive;
                        font-weight: 700;`,
    Vibur400: `font-family: 'Vibur', cursive;
                font-weight: 400;`,
    Vibur700: `font-family: 'Vibur', cursive;
                font-weight: 700;`,
    Sacramento400: `font-family: 'Sacramento', cursive;
                    font-weight: 400;`,
    Sacramento700: `font-family: 'Sacramento', cursive;
                    font-weight: 700;`,
    Yellowtail400: `font-family: 'Yellowtail', cursive;
                    font-weight: 400;`,
    Yellowtail700: `font-family: 'Yellowtail', cursive;
                    font-weight: 700;`,
    Agbalumo400: `font-family: 'Agbalumo', cursive;
                  font-weight: 400;`,
    Agbalumo700: `font-family: 'Agbalumo', cursive;
                  font-weight: 700;`,
    Nosifer400: `font-family: 'Nosifer', sans-serif;
                  font-weight: 400;`,
    Nosifer700: `font-family: 'Nosifer', sans-serif;
                  font-weight: 700;`,
    RubikBurned400: `font-family: 'Rubik Burned', sans-serif;
                      font-weight: 400;`,
    RubikBurned700: `font-family: 'Rubik Burned', sans-serif;
                      font-weight: 700;`,
    RubikDirt400: `font-family: 'Rubik Dirt', sans-serif;
                  font-weight: 400;`,
    RubikDirt700: `font-family: 'Rubik Dirt', sans-serif;
                  font-weight: 700;`,
    RubikDistressed400: `font-family: 'Rubik Distressed', sans-serif;
                  font-weight: 400;`,
    RubikDistressed700: `font-family: 'Rubik Distressed', sans-serif;
                  font-weight: 700;`,
    RubikWetPaint400: `font-family: 'Rubik Wet Paint', sans-serif;
                  font-weight: 400;`,
    RubikWetPaint700: `font-family: 'Rubik Wet Paint', sans-serif;
                  font-weight: 700;`,
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
    introduction_sentence: '#509fef',
    subtilte: '#509fefcc',
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
    introduction_sentence: '#50dfef',
    // subtilte: '#50dfef80',
    subtilte: '#509fef',
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
