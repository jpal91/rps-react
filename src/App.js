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

const App = (props) => {
    const vp = window.visualViewport;
    const { gameIsOn, score, userScore } = props;

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
