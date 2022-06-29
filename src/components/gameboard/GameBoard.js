import React from 'react'
import { connect } from "react-redux";
import Image from "material-ui-image";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'


import { gameOn, userScore, updateMessage, youPick, housePick } from '../../actions'
import { playAGame } from "../../helpers/playgame";


const GameBoard = (props) => {
    const { gameOn, userScore, updateMessage, youPick, housePick } = props
	
	const handlePG = (pick) => {
		let gameObj = playAGame(pick)

		youPick(pick)
		housePick(gameObj.hPick)
		updateMessage(gameObj.message)
		userScore(gameObj.score)
		gameOn(false)
	}

	return (
        <React.Fragment>
            <Grid item xs={12}>
                <Grid
                    item
                    xs={6}
                    sx={{ justifyContent: "flex-end", p: 3 }}
                >
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
							height: 200,
							width: 200,
                            backgroundColor: "hsla(360, 100%, 100%, 0)",
                        }}
						
                    />
					</IconButton>
                </Grid>
                <Grid item xs={6} sx={{ justifyContent: "flex-start", p: 3 }}>
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
							height: 200,
							width: 200,
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
						height: 200,
						width: 200,
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


export default connect(null, { gameOn, userScore, updateMessage, youPick, housePick })(GameBoard);

{/* <Image
src="./images/bg-triangle.svg"
imageStyle={{ width: 'auto', height: 285, maxHeight: 285 }}
style={{
	zIndex: 0,
	p: 0,
	width: 250,
	height: 285,
	maxHeight: 285,
	position: "relative",
	left: "41.5%",
	top: "35%",
	bottom: '0%',
	backgroundColor: "hsla(360, 100%, 100%, 0)"
}}
/> */}