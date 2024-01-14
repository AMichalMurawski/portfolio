export const basicStyle = {
  fontSize: {
    main: '18px',
    title: '54px',
    subtitle: '36px',
    sentence: '24px',
  },
  fontFamily: {
    main: `font-family: 'Dancing Script', cursive;
            font-weight: 400;`,
    title1: `font-family: 'Dancing Script', cursive;
                        font-weight: 400;`,
    title2: `font-family: 'Edu TAS Beginner', cursive;
                        font-weight: 700;`,
    sectionTitle: `font-family: 'Rubik Wet Paint', sans-serif;
                  font-weight: 400;`,
    paragraph: `font-family: 'Roboto', sans-serif;
                  font-weight: 400;`,
    navbar: `font-family: 'Basicdots', sans-serif;
                  font-weight: 400;`,
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
