import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ScoreBoard = () => {
  return (
    <Grid container sx={{ width: "100%", mt: 2 }}>
      <Paper
        sx={{
          backgroundColor: "hsla(360, 100%, 100%, 0)",
          width: "100%",
          border: "2px solid",
          borderColor: "text.header",
          height: 150
        }}
      ></Paper>
    </Grid>
  );
};

export default ScoreBoard;
