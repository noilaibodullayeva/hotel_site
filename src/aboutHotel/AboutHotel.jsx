import { Box, Typography } from "@mui/material";
import Img2 from '../images/about_1.webp'
function AboutHotel() {
    return (
        <Box sx={styles.boxesAbout}>
            <Box sx={styles.first}>
                <Box sx={styles.firstImage}></Box>
            </Box>
            <Box sx={styles.second}>
                <Typography sx={styles.aboutHotel}>ABOUT HOTEL</Typography>
                <Typography sx={styles.lorem1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minima tenetur aliquid veniam ipsum, fugit modi dignissimos repellat ratione. Aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque nobis maiores eius tempore ab possimus eum delectus beatae facere?</Typography>
                <br />
                <Typography sx={styles.lorem1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a libero animi, rerum commodi vitae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, aspernatur?</Typography>
            </Box>
        </Box>
    )
}

export default AboutHotel

const styles = {
    boxesAbout: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        gap: '10px',
        m: { md: '0 0 20px 0', xs: '480px 0 20px 0' },
        backgroundColor: '#fff',
        height: '400px',
        width: '100%'
    },
    first: {
        width: {md:'30%', xs: '100%'},
        backgroundColor: '#1C917C',
        backgroundSize: '400px',
    },
    firstImage: {
        backgroundImage: `url(${Img2})`,
        position: 'absolute',
        ml: { md: ' 15%', xs: '2%' },
        width: { md: '450px', xs: '95%' },
        height: '300px',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: '3%'
    },
    second: {
        width: { md: '50%', xs: '100%' },
        backgroundColor: '#FFF',
        mt: {md: '0', xs: '300px' }
    },
    aboutHotel: {
        fontSize: '25px',
        fontFamily: 'monoscape',
        fontWeight: 700,
        color: '#1C917C',
        margin: { md: '40px 0 10px 150px', xs: '30px 0 10px 30px' },
    },
    lorem1: {
        width: {md:'65%', xs: '90%'},
        ml: { md: '150px', xs: '30px' },
        fontFamily: 'sen-serif',
        mb: {xs: '20px'}
    }
}