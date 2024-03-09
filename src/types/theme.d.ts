import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    colorBlack: Palette["primary"];
    colorRed: Palette["primary"];
    colorOrange: Palette["primary"];
    colorGreen: Palette["primary"];
    colorLightBlue: Palette["primary"];
    colorBlue: Palette["primary"];
  }

  interface PaletteOptions {
    colorBlack?: PaletteOptions["primary"];
    colorRed?: PaletteOptions["primary"];
    colorOrange?: PaletteOptions["primary"];
    colorGreen?: PaletteOptions["primary"];
    colorLightBlue?: PaletteOptions["primary"];
    colorBlue?: PaletteOptions["primary"];
  }
}
