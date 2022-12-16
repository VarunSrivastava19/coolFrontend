import { green, deepOrange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: deepOrange[400],
    },
    secondary: green,
  },
});