import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#369CEB",
      contrastText: "#000",
    },
    secondary: {
      main: "#EBA336",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Roboto Condensed, sans-serif",
  },
});

export default theme;
