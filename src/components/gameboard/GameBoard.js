import React from 'react'
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "material-ui-image";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'


import { gameOn, userScore, updateMessage, youPick, housePick, setWinner } from '../../actions'
import { playAGame } from "../../helpers/playgame";

//holds the actual play area 
const GameBoard = (props) => {
    const { gameOn, userScore, updateMessage, youPick, housePick, setWinner } = props
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
	
    //handles clicking on one option in the play area
    //first it will run the pick through logic which also chooses a comp pick (see helpers/playgame)
    //next it sends both the computer and player pick to redux along with the message (ie You won!) and winner
    //finally updates the play area to show the Winner component instead
    //the setTimeout sends the score, but updates a little slower than the animations on the Winner/Picks comps
	const handlePG = (pick) => {
		let gameObj = playAGame(pick)

		youPick(pick)
		housePick(gameObj.hPick)
		updateMessage(gameObj.message)
        setWinner(gameObj.winner)
		setTimeout(() => userScore(gameObj.score), 4000)
		gameOn(false)
	}

    //had some difficulty figuring out how to style the images properly
    //ultimately used flexbox which turned out quite well but had to
    //set the middle triangle with an absolute position
    //there could be some slight variance in the position of triangle, but reasonable
	return (
        <React.Fragment>
            <Grid item xs={12}>
                <Grid
                    item
                    xs={6}
                    sx={{ justifyContent: "flex-end", p: 3 }}
                >
					<IconButton onClick={() => handlePG('paper')}>
                    <Image
                        src="./images/icon-paper2.svg"
                        imageStyle={{
							cover: true,
                            position: "relative",
                        }}
                        style={{
                            zIndex: 1,
                            padding: 0,
							height: matches ? 150: 200,
							width: matches ? 150: 200,
                            backgroundColor: "hsla(360, 100%, 100%, 0)",
                        }}
						
                    />
					</IconButton>
                </Grid>
                <Grid item xs={6} sx={{ justifyContent: "flex-start", p: 3 }}>
                    <IconButton onClick={() => handlePG('scissors')}>
					<Image
                        src="./images/icon-scissors2.svg"
                        imageStyle={{
                            cover: true,
                            position: "relative",
                        }}
                        style={{
                            zIndex: 1,
                            padding: 0,
							height: matches ? 150: 200,
							width: matches ? 150: 200,
                            backgroundColor: "hsla(360, 100%, 100%, 0)",
                        }}
						
                    />
					</IconButton>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ p: 1 }}>
                <IconButton onClick={() => handlePG('rock')}>
				<Image
                    src="./images/icon-rock2.svg"
                    imageStyle={{
						cover: true,
                        position: "relative",
                    }}
                    style={{
                        zIndex: 1,
                        padding: 0,
						height: matches ? 150: 200,
						width: matches ? 150: 200,
                        backgroundColor: "hsla(360, 100%, 100%, 0)",
                    }}
					
                />
				</IconButton>
				<Box sx={{ position: 'absolute', top: '35%' }}>
					<Image 
						src='./images/bg-triangle.svg'
						imageStyle={{ cover: true }}
						style={{ width: 250, height: 285, backgroundColor: "hsla(360, 100%, 100%, 0)" }}
					/>
				</Box>
            </Grid>
		</React.Fragment>
    );
};


export default connect(null, { gameOn, userScore, updateMessage, youPick, housePick, setWinner })(GameBoard);
