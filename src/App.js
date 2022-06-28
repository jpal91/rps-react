import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Image from "material-ui-image";

import GameBoard from "./components/GameBoard";

import theme from "./assets";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        fluid
        sx={{
          maxWidth: 1440,
          backgroundColor: "background.default",
          display: "flex"
        }}
      >
        <GameBoard />
      </Container>
    </ThemeProvider>
  );
};

export default App;

{
  /* <Container
fixed
sx={{
  display: "flex",
  width: 1440,
  height: 500,
  justifyContent: "center"
}}
>
<Box sx={{ display: "flex", alignItems: "center" }}>
  <Image
    src="./images/bg-triangle.svg"
    imageStyle={{ width: 500, height: 500, position: "static" }}
  />
</Box>
<Box
  sx={{
    position: "absolute",
    transform: "translate(-150%, 125%)",
    borderRadius: "100%",
    backgroundColor: "none"
  }}
>
  <Image
    src="./images/icon-rock2.svg"
    imageStyle={{ width: 200, height: 200 }}
  />
</Box>
</Container> */
}
