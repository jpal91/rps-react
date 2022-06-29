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

const fade = keyframes`
    from {
        opacity: 0
    }
    
    to {
        opacity: 1
    }
`

const Winner = (props) => {
    const { message, userPick, compPick, gameOn } = props
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
    let winner = message === 'YOU WIN!' ? 'user' : 'comp'
    message === "IT'S A TIE!" ? winner = null : winner = winner
    
    const handleReset = () => {
        gameOn(true)
    }

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
        compPick: state.compPick
    }
}

export default connect(mapStateToProps, { gameOn })(Winner);

{
    /* <Grid item xs={6} lg={4} sx={{ flexDirection: 'column', alignItems: 'center' }}>
<Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', mb: 5 }}>YOU PICKED</Typography>
<Image
    src="./images/icon-paper2.svg"
    imageStyle={{
        width: 200,
        height: 200,
        position: "relative",
    }}
    style={{
        zIndex: 1,
        padding: 0,
        height: 200,
        backgroundColor: "hsla(360, 100%, 100%, 0)",
    }}
/>
</Grid>
<Grid item xs={12} lg={4} sx={{ flexDirection: 'column', alignItems: 'center' }}>
<Typography variant='h3' sx={{ color: 'white' }}>YOU WIN</Typography>
<Button variant='contained' sx={{ backgroundColor: 'white', color: 'text.score', letterSpacing: 1, px: 5, py: 1 }}>Play Again</Button>
</Grid>
<Grid item xs={6} lg={4} sx={{ flexDirection: 'column', alignItems: 'center', p: 2 }}>
<Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', mb: 5 }}>THE HOUSE PICKED</Typography>
<Image
    src="./images/icon-scissors2.svg"
    imageStyle={{
        width: 200,
        height: 200,
        position: "relative",
    }}
    style={{
        zIndex: 1,
        padding: 0,
        height: 200,
        backgroundColor: "hsla(360, 100%, 100%, 0)",
    }}
/>
</Grid> */
}
