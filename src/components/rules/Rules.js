import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button'


import RulesModal from "./RulesModal";

const Rules = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    return (
        <Grid
            container
            item
            sx={{
                width: "100%",
                justifyContent: { xs: "center", lg: "flex-end" },
                mt: { xs: 5 },
                pr: { xs: 0 },
                position: { xs: 'static', lg: 'absolute'},
                left: '-15%',
                bottom: '5%'
            }}
        >
            <Button variant='outlined' onClick={handleOpen} sx={{ px: 5, py: 1, letterSpacing: 2 }}>RULES</Button>
            <RulesModal open={open} close={handleClose} />
        </Grid>
    );
};

export default Rules;
