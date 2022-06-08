import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material";

import theme from './assets'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        Hello!
      </div>
    </ThemeProvider>
  )
}

export default App;
