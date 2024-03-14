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
    colorOrange: {
      main: "#ff9d00",
    },
    colorGreen: {
      main: "#239705",
    },
    colorLightBlue: {
      main: "#5986BC",
    },
    colorBlue: {
      main: "#042D5E",
    },
  },
  typography: {
    h1: {
      // fontFamily: "Neucha, serif",
      // fontFamily: "Comforter, cursive";
      // fontFamily: "Cormorant Infant, serif";
      // fontFamily: "Rubik Marker Hatch, serif",
      // fontFamily: "Marck Script , cursive",
      fontFamily: "Kurale , cursive",
      fontSize: "10rem",
    },
    h2: {
      fontFamily: "Kurale , cursive",
      fontSize: "8rem",
    },
    h3: {
      fontFamily: "Cormorant Infant, serif",
      fontSize: "5rem",
      "@media (max-width:750px)": {
        fontSize: "3rem",
      },
      "@media (max-width:650px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:550px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontFamily: "Kurale , cursive",
    },
    h5: {
      fontFamily: "Kurale , cursive",
      // fontSize: "4rem",
    },
    h6: {
      fontFamily: "Kurale , cursive",
      fontSize: "1rem",
      "@media (max-width:960px)": {
        fontSize: "0.9rem",
      },
      "@media (max-width:860px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:760px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:660px)": {
        fontSize: "0.6rem",
      },
      "@media (max-width:560px)": {
        fontSize: "0.5rem",
      },
      "@media (max-width:460px)": {
        fontSize: "0.4rem",
      },
      "@media (max-width:360px)": {
        fontSize: "0.3rem",
      },
    },
    body1: {
      fontFamily: "Kurale , cursive",
      fontSize: "0.5rem",
    },
    body2: {
      fontFamily: "Special Elite, cursive",
      fontSize: "0.6rem",
    },
    subtitle1: {
      fontFamily: "Times New Roman, serif",
      fontSize: "8rem",
      "@media (max-width:750px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width:350px)": {
        fontSize: "2rem",
      },
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 568, md: 760, lg: 960, xl: 1200 },
  },
});

// theme = responsiveFontSizes(theme);

const App: React.FC = () => (
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <Topbar />
    <AppRoutes />
    <Footer />
  </ThemeProvider>
);

export default App;
