import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface Palette {
    colorBlack: Palette["primary"];
    colorRed: Palette["primary"];
  }

  interface PaletteOptions {
    colorBlack?: PaletteOptions["primary"];
    colorRed?: PaletteOptions["primary"];
  }
}
