import { Box, Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';
import MapIcon from '@mui/icons-material/Map';
import WorkIcon from '@mui/icons-material/Work';


function Services() {
    return (
        <Box sx={styles.services}>
            <Typography sx={styles.serviceword}>
                OUR SERVICES
            </Typography>
            <Box sx={styles.boxCards}>
                <Card sx={{ maxWidth: 420, boxShadow: '10px 5px 5px 5px #eee '}}>
                    <CardActionArea>
                        <NordicWalkingIcon  sx={styles.icon} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" fontWeight='900'>
                                Trekking
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam hic est, sint nesciunt modi ea delectus accusantium quidem nobis?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" sx={{color: "#B4B4B4"}}>
                            Learn more
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 420, boxShadow: '10px 5px 5px 5px #eee ' }}>
                    <CardActionArea>
                        <MapIcon   sx={styles.icon}  />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" fontWeight='900'>
                                The map
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam hic est, sint nesciunt modi ea delectus accusantium quidem nobis?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" sx={{color: "#B4B4B4"}}>
                            Learn more
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 420, boxShadow: '10px 5px 5px 5px #eee ' }}>
                    <CardActionArea>
                        <WorkIcon  sx={styles.icon} />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" fontWeight='900'>
                                Suitcase
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam hic est, sint nesciunt modi ea delectus accusantium quidem nobis?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" sx={{color: "#B4B4B4"}}>
                            Learn more
                        </Button>
                    </CardActions>
                </Card>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', margin: '30px 0 30px 150px' }}>
                <Button variant="contained" sx={styles.button1} disabled>
                    Prev
                </Button>
                <Button variant="contained" sx={styles.button1}>Next</Button>
            </Box>


        </Box>
    )
}

export default Services

const styles = {
    services: {
        width: '100%',
        height: '700px',
        background: '#fff',
        display: 'flex',
        flexDirection: {
            md: 'column', xs: 'column',

        },
        m: {md: '40px 0 20px 0', xs: '200px 20px 20px 0'}
    },
    serviceword: {
        fontSize: '25px',
        fontFamily: 'monoscape',
        fontWeight: 900,
        color: '#1C917C',
        margin: { md: '40px 0 40px 150px', xs: '30px 0 10px 30px' },
    },
    button1: {
        width: '60px',
        height: '30px',
        border: '1px solid #8C8C8C',
        background: 'transparent',
        ':hover': {
            border: '1px solid #8C8C8C',
            background: 'transparent',
        },
        color: 'grey',
        borderRadius: '10px',
        fontSize: '10px'
    },
    icon: {
        color: '#1C917C',
        fontSize: '90px',
        textAlign: 'center',
        m: '3% 0 3% 35%'
    },
    boxCards: {
        display: 'flex', 
        flexDirection: {md: 'row', xs: 'column'}, 
        gap: '20px', 
        ml: {md: '90px', xs: '12%'}
    }
}