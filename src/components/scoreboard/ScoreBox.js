import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ScoreBox = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: 125,
        backgroundColor: "white",
        p: 2
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "text.score", letterSpacing: 1 }}
      >
        SCORE
      </Typography>
      <Typography variant="h4" sx={{ color: "text.score", fontSize: 50 }}>
        12
      </Typography>
    </Paper>
  );
};

export default ScoreBox;
