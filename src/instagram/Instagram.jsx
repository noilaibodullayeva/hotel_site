import { Box, Typography } from "@mui/material";
import imgInsta from '../images/img_2.webp'
import imgInsta1 from '../images/img_3.webp'
import imgInsta2 from '../images/img_4.webp'

function Instagram() {
    return (
        <Box sx={{ mb: '5%' }}>
            <Box sx={styles.instaFirst}>
                <Typography sx={{ fontSize: '30px', fontWeight: 900, fontFamily: 'roboto', color: '#1C917C' }}>INSTAGRAM</Typography>
                <Typography sx={styles.lorem6}>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, nesciunt?  asperiores fugiat dolores voluptatibus ut fugit, quibusdam expedita eos illo.</Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: { md: 'row', xs: 'column' }, gap: 0, mt: '30px' }}>
                <Box sx={styles.box1} />
                <Box sx={styles.box2} />
                <Box sx={styles.box3} />
                <Box sx={styles.box4} />
                <Box sx={styles.box5} />
            </Box>
        </Box>
    )
}

export default Instagram

const styles = {
    testimonials: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        background: '#fff'
    },
    instaFirst: {
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
    box1: {
        backgroundImage: `url(${imgInsta})`,
        width: { md: '20%', xs: '100%' },
        height: { md: '200px', xs: '400px' },
        backgroundSize: "cover",

    },
    box2: {
        backgroundImage: `url(${imgInsta1})`,
        width: { md: '20%', xs: '100%' },
        height: { md: '200px', xs: '400px' },
        backgroundSize: "cover",

    },
    box3: {
        backgroundImage: `url(${imgInsta2})`,
        width: { md: '20%', xs: '100%' },
        height: { md: '200px', xs: '400px' },
        backgroundSize: "cover",

    },
    box4: {
        backgroundImage: `url(${imgInsta})`,
        width: { md: '20%', xs: '100%' },
        height: { md: '200px', xs: '400px' },
        backgroundSize: "cover",

    },
    box5: {
        backgroundImage: `url(${imgInsta1})`,
        width: { md: '20%', xs: '100%' },
        height: { md: '200px', xs: '400px' },
        backgroundSize: "cover",

    }
}