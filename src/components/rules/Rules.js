import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button'


import RulesModal from "./RulesModal";

//holds the rules button as well as the modal
const Rules = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    //fairly standard setup but decided to fix the position of the button
    //to stop the "jumping" that would happen switching from GameBoard to Winner
    return (
        <Grid
            container
            item
            sx={{
                width: "100%",
                justifyContent: { xs: "center", lg: "flex-end" },
                mt: { xs: 5 },
                pr: { xs: 0 },
                position: 'absolute',
                left: { xs: '0%', lg: '-15%'},
                bottom: { xs: '15%', lg: '5%' }
            }}
        >
            <Button variant='outlined' onClick={handleOpen} sx={{ px: 5, py: 1, letterSpacing: 2 }}>RULES</Button>
            <RulesModal open={open} close={handleClose} />
        </Grid>
    );
};

export default Rules;
