import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Picks from './Picks'

const Winner = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
    
    const message = (
        <Grid
            item
            xs={12}
            lg={4}
            sx={{ flexDirection: "column", alignItems: "center" }}
        >
            <Typography variant="h3" sx={{ color: "white" }}>
                YOU WIN
            </Typography>
            <Button
                variant="contained"
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
        <Grid container sx={{ width: { xs: '100%', lg: 944 }, mt: 10 }}>
            {matches ? (
                <React.Fragment>
                    <Picks message={'YOU PICKED'}/>
                    <Picks message={'THE HOUSE PICKED'}/>
                    {message}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Picks message={'YOU PICKED'}/>
                    {message}
                    <Picks message={'THE HOUSE PICKED'}/>
                </React.Fragment>
            )}
        </Grid>
    );
};

export default Winner;

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
