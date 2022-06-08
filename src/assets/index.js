import { createTheme } from "@mui/material";

import typography from './base/typography'
import colors from './base/colors'
import breakpoints from "./base/breakpoints";

export default createTheme({
    typography: { ...typography },
    palette: { ...colors },
    breakpoints: { ...breakpoints }
})