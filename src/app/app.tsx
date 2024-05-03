import React from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Topbar from '../shared/topbar/topbar';
import { AppRoutes } from './appRoutes';
import Footer from '../shared/footer/footer';

import '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: '#ffe4c4',
    },
    secondary: {
      main: '#ffffff',
    },
    colorBlack: {
      main: '#000000',
    },
    colorRed: {
      main: '#5f0101',
    },
    colorOrange: {
      main: '#ff9d00',
    },
    colorGreen: {
      main: '#239705',
    },
    colorLightBlue: {
      main: '#5986BC',
    },
    colorBlue: {
      main: '#042D5E',
    },
  },
  typography: {
    h1: {
      // fontFamily: "Neucha, serif",
      // fontFamily: "Comforter, cursive";
      // fontFamily: "Cormorant Infant, serif";
      // fontFamily: "Rubik Marker Hatch, serif",
      // fontFamily: "Marck Script , cursive",
      fontFamily: 'Kurale , cursive',
      fontDisplay: 'optional',
    },
    h2: {
      fontFamily: 'Kurale , cursive',
      fontDisplay: 'optional',
    },
    h3: {
      fontFamily: 'Cormorant Infant, serif',
      fontDisplay: 'optional',
    },
    h4: {
      fontFamily: 'Kurale , cursive',
      fontDisplay: 'optional',
    },
    h5: {
      fontFamily: 'Kurale , cursive',
      fontDisplay: 'optional',
    },
    h6: {
      fontFamily: 'Kurale , cursive',
      fontDisplay: 'optional',
    },
    body1: {
      fontFamily: 'Kurale , cursive',
      fontDisplay: 'optional',
    },
    body2: {
      fontFamily: 'Special Elite, cursive',
      fontDisplay: 'optional',
    },
    subtitle1: {
      fontFamily: 'Times New Roman, serif',
      fontDisplay: 'optional',
      // fontSize: "8rem",
      // "@media (max-width:750px)": {
      //   fontSize: "2.5rem",
      // },
      // "@media (max-width:350px)": {
      //   fontSize: "2rem",
      // },
    },
  },
  breakpoints: {
    keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: { xxs: 0, xs: 300, sm: 568, md: 760, lg: 960, xl: 1200, xxl: 1500 },
  },
});

theme = responsiveFontSizes(theme);

const App: React.FC = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Topbar />
    <AppRoutes />
    <Footer />
  </ThemeProvider>
);

export default App;
