import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "material-ui-image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Picks = (props) => {
    const { message } = props
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Grid
            item
            xs={6}
            lg={4}
            sx={{
                flexDirection: { xs: "column-reverse", lg: "column" },
                alignItems: "center",
            }}
        >
            <Typography
                variant="body1"
                sx={{ color: "white", fontWeight: "bold", letterSpacing: 1, mb: 5, mt: { xs: 3, lg: 0 } }}
            >
                {message}
            </Typography>
            <Image
                src="./images/icon-scissors2.svg"
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
                }}
            />
        </Grid>
    );
};

export default Picks;