import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#dd4141",
    },
  },
  typography: {
    fontFamily: "sans-serif"
  }
});

export default theme