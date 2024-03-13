export const darkStyle = {
  color: {
    main: 'white',
    introduction_sentence: '#50dfef',
    // subtilte: '#50dfef80',
    subtilte: '#a0ffff',
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
    tv: '#000',
    screen: 'rgba(255, 255, 255, 0.1)',
    shine: `linear-gradient(to right, 
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.05) 20%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.1) 55%,
      rgba(255, 255, 255, 0.05) 80%,
      rgba(255, 255, 255, 0.02) 100%)`,
  },
  txtShadow: {
    subtitle: '0 0 2px #a0ffff, 0 0 4px #90ffff',
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
