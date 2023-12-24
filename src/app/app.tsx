import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Topbar from "../shared/topbar/topbar";
import { AppRoutes } from "./appRoutes";
import Footer from "../shared/footer/footer";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#ffe4c4",
    },
    secondary: {
      main: "#ffffff",
    },
    colorBlack: {
      main: "#000000",
    },
    colorRed: {
      main: "#5f0101",
    },
  },
  typography: {
    h1: {
      fontFamily: "Neucha, serif",
      fontSize: "10rem",
    },
    h2: {
      fontFamily: "Rubik Marker Hatch, serif",
      fontSize: "8rem",
    },
    h3: {
      fontFamily: "Marck Script , cursive",
    },
    h4: {
      fontFamily: "Kurale , cursive",

      // "@media (max-width:750px)": {
      //   fontSize: "0.7rem",
      // },
    },
    h5: {
      fontFamily: "Special Elite, cursive",
      // fontSize: "4rem",
    },
    h6: {
      fontFamily: "Special Elite, cursive",
      fontSize: "0.7rem",
    },
    body1: {
      fontFamily: "Kurale , cursive",
      fontSize: "0.5rem",
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
