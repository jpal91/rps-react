import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@emotion/react";

import Picks from './Picks'
import { gameOn } from "../../actions";

//keyframes for animations in component below
const fade = keyframes`
    from {
        opacity: 0
    }
    
    to {
        opacity: 1
    }
`
//The alternate to the GameBoard page, triggered when an option is clicked
const Winner = (props) => {
    const { message, userPick, compPick, gameOn, winner } = props
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
    
    //resets game to GameBoard page
    const handleReset = () => {
        gameOn(true)
    }

    //since the formatting is slightly different on mobile, I separated this section out
    //so I can reorganize below based on screensize
    const winOrLose = (
        <Grid
            item
            xs={12}
            lg={4}
            sx={{ flexDirection: "column", alignItems: "center", opacity: 0, animation: winner ? `${fade} 3s ease-in 3s 1 normal forwards` : `${fade} 0.5s ease-in 0.5s 1 normal forwards` }}
        >
            <Typography variant="h3" sx={{ color: "white" }}>
                {message}
            </Typography>
            <Button
                variant="contained"
                onClick={handleReset}
                sx={{
                    backgroundColor: "white",
                    color: "text.score",
                    letterSpacing: 1,
                    px: 5,
                    py: 1,
                }}
            >
                Play Again
            </Button>
        </Grid>
    );

    return (
        <React.Fragment>
            {matches ? (
                <React.Fragment>
                    <Picks message={'YOU PICKED'} picked={userPick} id={'user'} winner={winner}/>
                    <Picks message={'THE HOUSE PICKED'} picked={compPick} id={'comp'} winner={winner}/>
                    {winOrLose}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Picks message={'YOU PICKED'} picked={userPick} id={'user'} winner={winner}/>
                    {winOrLose}
                    <Picks message={'THE HOUSE PICKED'} picked={compPick} id={'comp'} winner={winner}/>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        message: state.message,
        userPick: state.userPick,
        compPick: state.compPick,
        winner: state.winner
    }
}

export default connect(mapStateToProps, { gameOn })(Winner);

