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
      main: "#161619",
    },
    secondary: {
      main: "#ffffff",
    },
    colorDisabled: {
      main: "rgba(150, 149, 149, 0.9)",
    },
  },
  typography: {
    fontFamily: ["Helvetica", "Arial", "sans-serif"].join(","),
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
