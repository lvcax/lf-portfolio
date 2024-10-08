import { alpha, getContrastRatio } from '@mui/material/styles';
import createTheme from "@mui/material/styles/createTheme";

const darkGray = "#1C1C1C"
const ghost = "#F2F2F2"
const deepPurple = "#736EF5"

const theme = createTheme({
  palette: {
    primary: {
      main: darkGray,
      light: alpha(darkGray, 0.5),
      dark: alpha(darkGray, 0.9),
      contrastText: getContrastRatio(darkGray, "#fff") > 4.5 ? '#fff' : '#111'
    },
    secondary: {
      main: ghost,
      light: alpha(ghost, 0.5),
      dark: alpha(ghost, 0.9),
      contrastText: darkGray
    },
    info: {
      main: deepPurple,
      light: alpha(deepPurple, 0.5),
      dark: alpha(deepPurple, 0.9),
      contrastText: ghost
    }
  },
  typography: {
    fontFamily: "Roboto",
  }
});

export default theme
