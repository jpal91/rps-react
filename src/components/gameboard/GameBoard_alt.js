import Image from "material-ui-image";
import Grid from "@mui/material/Grid";

const GameBoard = () => {
  return (
    <Grid container sx={{ width: 944 }}>
      <Image
        src="./images/icon-rock2.svg"
        imageStyle={{ width: 200, height: 200 }}
        style={{ position: "absolute", left: "45%", top: "489px", zIndex: 2 }}
      />
      <Image
        src="./images/icon-paper2.svg"
        imageStyle={{ width: 200, height: 200 }}
        style={{ position: "absolute", left: "52%", top: "262px", zIndex: 2 }}
      />
      <Image
        src="./images/icon-scissors2.svg"
        imageStyle={{ width: 200, height: 200 }}
        style={{ position: "absolute", left: "39%", top: "262px", zIndex: 2 }}
      />
      <Image
        src="./images/bg-triangle.svg"
        imageStyle={{ width: 250, height: 285 }}
      />
    </Grid>
  );
};

export default GameBoard;
