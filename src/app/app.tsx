import React from "react";
// import logo from './logo.svg';
import { Global as GlobalStyles, css } from "@emotion/react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

import * as S from "./app.styled";
import Topbar from "../shared/topbar/topbar";
import { AppRoutes } from "./appRoutes";
import Footer from "../shared/footer/footer";

declare module "@mui/material/styles" {
  interface Palette {
    colorDisabled: Palette["primary"];
  }

  interface PaletteOptions {
    colorDisabled?: PaletteOptions["primary"];
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: "#ffe4c4",
    },
    secondary: {
      main: "#ffffff",
    },
    colorDisabled: {
      main: "rgba(150, 149, 149, 0.9)",
    },
  },
  typography: {
    h1: {
      fontFamily: "Lavishly Yours, cursive",
      fontSize: "15rem",
    },
    h2: {
      fontFamily: "Fredericka the Great, serif",
      fontSize: "8rem",
    },
    h3: {
      fontFamily: "Special Elite, cursive",
    },
    h4: {
      fontFamily: "Special Elite, cursive",
      "@media (max-width:750px)": {
        fontSize: "0.7rem",
      },
    },
    h5: {
      fontFamily: "Special Elite, cursive",
      // fontSize: "4rem",
    },
    body1: {
      fontFamily: "Glass Antiqua, cursive",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 568, md: 760, lg: 960, xl: 1200 },
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
