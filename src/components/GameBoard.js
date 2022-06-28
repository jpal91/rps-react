import Image from "material-ui-image";
import Grid from "@mui/material/Grid";

const GameBoard2 = () => {
  return (
    <Grid container sx={{ width: 944, mt: 5 }}>
      <Grid container item xs={12}>
        <Grid
          item
          xs={6}
          sx={{ justifyContent: "flex-end", p: 3, height: "auto" }}
        >
          <Image
            src="./images/icon-scissors2.svg"
            imageStyle={{ width: 200, height: 200, position: "relative" }}
            style={{
              zIndex: 1,
              padding: 0,
              height: 200,
              backgroundColor: "hsla(360, 100%, 100%, 0)"
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ justifyContent: "flex-start", p: 3 }}>
          <Image
            src="./images/icon-paper2.svg"
            imageStyle={{ width: 200, height: 200, position: "relative" }}
            style={{
              zIndex: 1,
              padding: 0,
              height: 200,
              backgroundColor: "hsla(360, 100%, 100%, 0)"
            }}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} sx={{ p: 1 }}>
        <Image
          src="./images/icon-rock2.svg"
          imageStyle={{ width: 200, height: 200, position: "relative" }}
          style={{
            zIndex: 1,
            padding: 0,
            height: 200,
            backgroundColor: "hsla(360, 100%, 100%, 0)"
          }}
        />
        <Image
          src="./images/bg-triangle.svg"
          imageStyle={{ width: 250, height: 285 }}
          style={{
            zIndex: 0,
            position: "absolute",
            transform: "translateY(-7%)",
            left: "43.75%"
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GameBoard2;
