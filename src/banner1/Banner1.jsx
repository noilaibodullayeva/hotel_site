import { Box, Button, Input, InputAdornment, Typography } from "@mui/material";
import Img1 from "../images/about_1.webp"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

function Banner1() {
    return (
        <Box sx={styles.banner}>
            <Box sx={styles.words}>
                <Typography sx={styles.once}>
                    Once a year go somewhere you've never been before
                </Typography>
                <Button sx={styles.button1} href="https://youtu.be/zr4r3n5Smho?si=wi0bftK3FeK4w0AB">See video</Button>
            </Box>
            <Box sx={styles.inputsBox}>
                <Input 
                id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="end">
                            <CalendarMonthIcon />
                        </InputAdornment>
                    }
                    placeholder="Date Arrival"
sx={{
    border: '1px solid #D9D9DB',
    width: '370px',
    height: '50px',
    borderRadius: '15px',
    background: '#D9D9DB',
    padding: '5px',
    fontWeight: 500
}}
                />
                <Input
                 id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="end">
                            <CalendarMonthIcon />
                        </InputAdornment>
                    }
                    placeholder="Date Departure"
                    sx={{
                        border: '1px solid #D9D9DB',
                        width: '370px',
                        height: '50px',
                        borderRadius: '15px',
                        background: '#D9D9DB',
                        padding: '5px',
                        fontWeight: 500
                    }}
                />
                <Input id="input-with-icon-adornment"
                    endAdornment={
                        <InputAdornment position="end">
                            <PersonIcon />
                        </InputAdornment>
                    }
                    placeholder="# of person"
                    sx={{
                        border: '1px solid #D9D9DB',
                        width: '370px',
                        height: '50px',
                        borderRadius: '15px',
                        background: '#D9D9DB',
                        padding: '5px',
                        fontWeight: 500,
                        borderBottom : 'none'
                    }}
                />
                <Button sx={styles.button2}>Find now</Button>
            </Box>
        </Box>
    )
}
export default Banner1

const styles = {
    banner: {
        backgroundImage: `url(${Img1})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        height: '700px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1
    },
    words: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        mt: {md: '20%', xs: '50%'},
    },
    once: {
        fontSize: {md: '50px', xs: '30px'},
        fontFamily: 'Trebuchet MS',
        fontWeight: 900,
        color: '#fff',
        width: {md: '880px', xs: '350px'},
        textAlign: {xs: 'center', md: 'center'},
        ml: {xs: '15px'}
    },
    button1: {
        background: '#1C917C',
        width: '90px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '25%',
        border: '1px solid #1C917C',
        ':hover': {
            border: '1px solid #1C917C',
            backgroundColor: '#1C917C',
        },
        color: '#fff',
        fontSize: '10px',
        ml: {xs: '30px'}
    },
    inputsBox: {
        display: 'flex',
        flexDirection: {xs: 'column', md: 'row'},
        gap: 2,
        m: {md: '165px 90px 0 90px', xs: '150px 20px 30px 40px'},
        background:'#fff',
        width: {md: '1200px', xs: '380px'},
        height: '200px',
        padding: {md:'30px', xs: '30px'}
    },
    button2: {
        background: '#1C917C',
        width: '210px',
        height: '40px',
        textAlign: 'center',
        borderRadius: '22%',
        border: '1px solid #1C917C',
        ':hover': {
            border: '1px solid #1C917C',
            backgroundColor: '#1C917C',
        },
        color: '#fff'
    }
}