import Card from '@mui/material/Card'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Close from '@material-ui/icons/Close'
import Image from 'material-ui-image'

const RulesModal = (props) => {
    const { open, close } = props

    return (
        <Modal
            open={open}
            onClose={close}
        >
            <Card sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  maxWidth: 400,
                  height: '100%',
                  maxHeight: 400,
                  p: 1
            }}>
                <Grid container xs={12}>
                    <Grid item xs={6} sx={{ justifyContent: 'flex-start', pl: 1 }}>
                        <Typography variant='h4'>RULES</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ justifyContent: 'flex-end', pr: 1 }}>
                        <IconButton onClick={close}>
                            <Close />
                        </IconButton>
                        
                    </Grid>
                </Grid>
                <Box
                    sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}
                >
                    <Image 
                        src='./images/rules.svg'
                        imageStyle={{ cover: true }}
                        style={{ width: 300, height: 200 }}
                    />

                    
                </Box>

                
            </Card>
        </Modal>
    )
}

export default RulesModal