import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Image from "material-ui-image";

import GameBoard from "./components/gameboard/GameBoard";
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import Winner from "./components/winpage/Winner";

import theme from "./assets";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          height: 2000,
          zIndex: 0,
          backgroundSize: "contain",
          backgroundImage:
            "radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)"
        }}
      >
        <Container
          fluid
          sx={{
            maxWidth: 1440,
            backgroundColor: "hsla(360, 100%, 100%, 0)",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            m: 0,
            p: 0
          }}
        >
          <ScoreBoard />
          <Winner />
        </Container>
      </Box>
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
