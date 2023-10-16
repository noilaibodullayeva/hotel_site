import { Avatar, Box, Card, CardContent, CardHeader, Typography, IconButton, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function Testimonials() {


    return (
        <Box sx={styles.testimonials}>
            <Box sx={styles.testiFirst}>
                <Typography sx={{ fontSize: '30px', fontWeight: 900, fontFamily: 'roboto', color: '#1C917C' }}>TESTIMONIALS</Typography>
                <Typography sx={styles.lorem6}>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, nesciunt?  asperiores fugiat dolores voluptatibus ut fugit, quibusdam expedita eos illo.</Typography>
            </Box>
            <Box sx={styles.cardsTesti}>
                <Card sx={{ maxWidth: { md: 360, xs: '99%' }, borderRadius: 'none', boxShadow: '5px 5px 5px 5px #eee', border: '1px solid #EAEAEA' }}>
                    <IconButton sx={styles.iconButton}>
                        <EditIcon />
                    </IconButton>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#1C917C' }}>S</Avatar>
                        }
                        title="John Doe"
                        subheader="Creative Director"
                    />
                </Card>
                <Card sx={{ maxWidth: { md: 360, xs: '99%' }, borderRadius: 'none', boxShadow: '5px 5px 5px 5px #eee', border: '1px solid #EAEAEA' }}>
                    <IconButton sx={styles.iconButton}>
                        <EditIcon />
                    </IconButton>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#1C917C' }}>L</Avatar>
                        }
                        title="John Doe"
                        subheader="Creative Director"
                    />
                </Card>
                <Card sx={{ maxWidth: { md: 360, xs: '99%' }, borderRadius: 'none', boxShadow: '5px 5px 5px 5px #eee', border: '1px solid #EAEAEA' }}>
                    <IconButton sx={styles.iconButton}>
                        <EditIcon />
                    </IconButton>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: '#1C917C' }}>S</Avatar>
                        }
                        title="John Doe"
                        subheader="Creative Director"
                    />
                </Card>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', margin: { md: '30px 0 4% 43%', xs: '30px 0 4% 30px' } }}>
                <Button variant="contained" sx={styles.button1} disabled>
                    Prev
                </Button>
                <Button variant="contained" sx={styles.button1}>Next</Button>
            </Box>
        </Box>
    )
}

export default Testimonials

const styles = {
    testimonials: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        background: '#F8F9FA'
    },
    testiFirst: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        gap: '20px 40px',
        m: { md: '30px 20px 15px 150px', xs: '3% 3% 3% 30px' },
    },
    lorem6: {
        fontSize: '15px',
        fontFamily: 'roboto',
        color: '#000',
        width: { md: '550px', xs: '90%' },
        ml: { md: '110px' }
    },
    cardsTesti: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        gap: '40px',
        // m: { md: '20px 10%', xs: '3% 3% 3% 30px' },
        justifyContent:'center'
    },
    iconButton: {
        mt: { md: '10px', xs: '3px' },
        ml: { md: '17px', xs: '16px' },
        background: '#1C917C',
        mb: '2%',
        ':hover': {
            background: '#1C917C',
        },
        zIndex: 1000,
        color: '#fff'
    },
    button1: {
        width: '60px',
        height: '30px',
        border: '1px solid #eee',
        background: 'transparent',
        ':hover': {
            border: '1px solid #eee',
            background: 'transparent',
        },
        color: 'grey',
        borderRadius: '20px',
        fontSize: '10px'
    },
}