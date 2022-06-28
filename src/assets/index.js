import { createTheme } from "@mui/material";

import globals from "./base/global";
import typography from "./base/typography";
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import grid from "./components/grid";

export default createTheme({
  typography: { ...typography },
  palette: { ...colors },
  breakpoints: { ...breakpoints },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals
      }
    },
    MuiGrid: { ...grid }
  }
});
