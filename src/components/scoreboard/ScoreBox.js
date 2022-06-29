import { connect } from "react-redux";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

//holds the actual score container, updated with redux
const ScoreBox = (props) => {
    const { score } = props
	
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
                p: 2,
            }}
        >
            <Typography
                variant="body2"
                sx={{ color: "text.score", letterSpacing: 1 }}
            >
                SCORE
            </Typography>
            <Typography variant="h4" sx={{ color: "text.score", fontSize: 50 }}>
                {score}
            </Typography>
        </Paper>
    );
};

const mapStateToProps = (state) => {
	return {
		score: state.score
	}
}

export default connect(mapStateToProps)(ScoreBox);
