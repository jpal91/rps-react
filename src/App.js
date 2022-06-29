import { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import GameBoard from "./components/gameboard/GameBoard";
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import Winner from "./components/winpage/Winner";
import Rules from './components/rules/Rules'
import { userScore } from "./actions";

import theme from "./assets";

//main app, all components flow through here
const App = (props) => {
    //tested this out and it appeared to work, had issues setting the background properly
	//ended up just setting the height of the Box component (below) equal to the viewport
	//Box holds the entire application and also is the origin of the background
	const vp = window.visualViewport;

    const { gameIsOn, score, userScore } = props;

	//two useEffects control the localStorage setup to track score between refreshes
	//decided against full stack as it was a lot of uncessary work to track one item
	useEffect(() => {
		if (!localStorage.getItem('score') || localStorage.getItem('score') === '0') {
			return
		}
		let num = Number(localStorage.getItem('score'))

		userScore(num)
	}, [])

	useEffect(() => {
		localStorage.setItem('score', score)
	}, [score])

	//below Box holds the entire application and the background gradient
	//Container holds the small piece in the middle of the viewport where the app can
	//be interacted with

	//gameIsOn is a piece of state passed through Redux to determine whether to show the actual game (GameBoard)
	//or the results page (Winner). Is toggled through both
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    width: "100%",
                    height: vp.height,
                    zIndex: 0,
                    backgroundSize: "contain",
                    backgroundImage:
                        "radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)",
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
                    }}
                >
                    <ScoreBoard />
					<Grid container sx={{ width: '100%', mt: 10 }}>
                    	{gameIsOn ? <GameBoard /> : <Winner />}
					</Grid>
					<Rules />
                </Container>
            </Box>
        </ThemeProvider>
    );
};

const mapStateToProps = (state) => {
    return {
        gameIsOn: state.gameIsOn,
		score: state.score
    };
};

export default connect(mapStateToProps, { userScore })(App);
