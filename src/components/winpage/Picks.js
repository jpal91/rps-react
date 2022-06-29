import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box'
import Image from "material-ui-image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keyframes } from "@emotion/react";

import { imageHelper } from "../../helpers/playgame";

//keyframes for the animations in component below
const glow = keyframes`
    from {
        box-shadow: none;
    }

    to {
        box-shadow: 0 0 40px 25px hsla(360, 100%, 100%, 0.5), 0 0 0 35px #1F3757, 0 0 40px 45px hsla(360, 100%, 100%, 0.5);
    }
`

const fade = keyframes`
    from {
        opacity: 0
    }
    
    to {
        opacity: 1
    }
`

//holds one pick (user or comp) from parent Winner component
//renders based on props provided and whether user or comp
const Picks = (props) => {
    const { message, picked, id, winner } = props
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));
    
    //logic to return the image src from helpers/playgame
    const imgStr = imageHelper(picked)

    //logic to control which Picks component should glow
    //will only trigger if this Picks comp is the same as the winner 
    const shouldGlow = id === winner

    //several animations playing in concert
    //user pick is immediatly rendered, followed by a slow fade in of 
    //the house/comp pick, once both a rendered, the glow effect kicks in
    //finally the 'play again' button section appears due to a delay set in Winner
    return (
        <Grid
            item
            xs={6}
            lg={4}
            sx={{
                flexDirection: { xs: "column-reverse", lg: "column" },
                alignItems: "center",
                animation: id === 'comp' && winner ? `${fade} 3s ease-in` : null
            }}
        >
            <Typography
                variant="body1"
                sx={{ color: "white", fontWeight: "bold", letterSpacing: 1, mb: 5, mt: { xs: 3, lg: 0 } }}
            >
                {message}
            </Typography>
            <Box sx={{ borderRadius: '50%', animation: shouldGlow ? `${glow} 2s ease-in-out infinite alternate` : null, animationDelay: '2s' }}>
            <Image
                src={imgStr}
                imageStyle={{
                    cover: true,
                    position: "relative",
                }}
                style={{
                    zIndex: 1,
                    padding: 0,
                    height: matches ? 150 : 200,
                    width: matches ? 150 : 200,
                    backgroundColor: "hsla(360, 100%, 100%, 0)",
                    borderRadius: '50%',
                }}
            />
            </Box>
        </Grid>
    );
};

export default Picks;