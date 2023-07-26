import font from './theme.typography'

export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius1: '0.4rem',
    radius2: '0.8rem',
    radius3: '2rem'
  },
  font,
  colors: {
    primary: '#333B4A',
    redPrimary: '#EF293D',
    secondary: '#FFFFFF',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#000000',
    black2: '#282828',
    black3: '#171717',
    darkBlue: '#030517',
    veryLightGray: '#C9C9C9',
    lightGray: '#EAEAEA',
    lightGray2: '#EDEDED',
    mediumGray: '#E8E8E8',
    mediumDarkGray: '#949494',
    mediumDarkGray2: '#B2B1B1',
    mediumDarkGray3: '#8A8989',
    lightGrayDark: '#737B7D',
    gray: '#E6E6E6',
    locationsGray: '#ECECEC',
    bgLightGray: '#FAF9F9',
    borderLightGray: '#C8C6C4',
    gray2: '#4F4F4F',
    gray3: '#A6A6A6',
    gray4: '#DDE1EA',
    gray5: '#8a8989',
    darkGray: '#C4C4C4',
    red: '#FF6347',
    lightBlack: '#373F41',
    facebook: '#3b5998',
    twitter: '#2795e9',
    linkedin: '#1f88be',
    google: '#dd4b39',
    background: '#DEDEDE',
    osloGray: '#8B8F91',
    galleryGray: '#EFEEEE',
    whiteSmoke: '#F0F0F0',
    transparent: 'transparent',
    highlight: '#FFCD00',
    orangePrimary: "#F28705"
  },
  spacings: {
    xxxxsmall: '0.6rem',
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    normal: '2.0rem',
    small: '2.4rem',
    medium: '3.2rem',
    xmedium: '3.6rem',
    large: '4.0rem',
    xlarge: '4.2rem',
    xxlarge: '4.8rem',
    xxxlarge: '5.6rem',
    huge: '6rem',
    xhuge: '10.2rem'
  },
  spaces: {
    xxtiny: '4px',
    xtiny: '8px',
    tiny: '16px',
    xxsmall: '10px',
    xsmall: '20px',
    small: '30px',
    medium: '40px',
    large: '60px',
    xlarge: '100px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
