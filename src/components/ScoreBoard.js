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
      >
        <Grid container item xs={12} sx={{ width: "100%", height: "100%" }}>
          <Grid item xs={6} sx={{ flexDirection: "column", p: 2 }}>
            <Typography variant="h3" sx={{ lineHeight: 0.75 }}>
              ROCK
            </Typography>
            <Typography variant="h3" sx={{ lineHeight: 0.75 }}>
              PAPER
            </Typography>
            <Typography variant="h3" sx={{ lineHeight: 0.75 }}>
              SCISSORS
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ScoreBoard;
