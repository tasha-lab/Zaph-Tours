import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: `#388e3c`,
    },
    secondary: {
      main: `#1b5e20`,
    },
    background: {
      default: `#c8e6c9`,
    },
    text: {
      primary: `#1a1a1a`,
      secondary: `#81c784`,
    },
  },
  typography: {
    body1: {
      fontFamily: `"Roboto", sans-serif`,
      fontSize: `.8rem`,
    },
    h2: {
      fontFamily: `"Fleur De Leah", cursive`,
    },
    h4: {
      fontFamily: `"IBM Plex Serif", serif`,
      fontSize: `1.5rem`,
    },
    h3: {
      fontFamily: `"IBM Plex Serif", serif`,
    },
  },
});

export default theme;
