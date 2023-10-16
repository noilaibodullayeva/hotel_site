import { Facebook, GitHub, Instagram, LinkedIn, Pinterest, Twitter } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

function Footer() {
    return (
        <Box sx={styles.footer}>
            <Box sx={styles.insideBoxes}>
                <Box sx={styles.firstFooter}>
                    <Typography sx={styles.bolder}>Home</Typography>
                    <Typography sx={styles.list}>About us</Typography>
                    <Typography sx={styles.list}>Places</Typography>
                    <Typography sx={styles.list}>Services</Typography>
                    <Typography sx={styles.list}>Destination</Typography>
                    <Typography sx={styles.list}>Terms</Typography>
                    <Typography sx={styles.list}>Privicy</Typography>
                </Box>
                <Box sx={styles.firstFooter}>
                    <Typography sx={styles.bolder}>Practise Area</Typography>
                    <Typography sx={styles.list}>Travel</Typography>
                    <Typography sx={styles.list}>Popular places</Typography>
                    <Typography sx={styles.list}>Destination</Typography>
                    <Typography sx={styles.list}>Tour</Typography>
                    <Typography sx={styles.list}>Family vocation</Typography>
                </Box>
                <Box sx={styles.firstFooter}>
                    <Typography sx={styles.bolder}>Services</Typography>
                    <Typography sx={styles.list}>Tour</Typography>
                    <Typography sx={styles.list}>Swimming</Typography>
                    <Typography sx={styles.list}>Kayak</Typography>
                    <Typography sx={styles.list}>Surfing</Typography>
                </Box>
                <Box sx={styles.firstFooter}>
                    <Typography sx={styles.bolder}>Contact</Typography>
                    <Typography sx={styles.list}>43 Raymond, London</Typography>
                    <Typography sx={styles.list}>+1 456-345-123</Typography>
                    <Typography sx={styles.list}>+1 237-453-890</Typography>
                    <Typography sx={styles.list}>info@gmail.com</Typography>
                    <Typography sx={styles.bolder}>Connect</Typography>
                    <Box sx={styles.listIcons}>
                        <IconButton sx={styles.iconButton1}>
                            <Instagram />
                        </IconButton>
                        <IconButton sx={styles.iconButton1}>
                            <Twitter />
                        </IconButton>
                        <IconButton sx={styles.iconButton1}>
                            <Facebook />
                        </IconButton>
                        <IconButton sx={styles.iconButton1}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton sx={styles.iconButton1}>
                            <Pinterest />
                        </IconButton>
                        <IconButton sx={styles.iconButton1}>
                            <GitHub />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.lastwords}>
                This templete is Colorib ❤️||by noila
            </Box>
        </Box>
    )
}

export default Footer

const styles = {
    footer: {
        bgcolor: '#F8F9FA',
        height: {md:'440px', xs: '1200px'},
        width: '100%',
    },
    insideBoxes: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        gap: '40px',
        m: { md: '40px 150px 20px 150px', xs: '3% 30px' },
        pt: '60px'
    },
    firstFooter: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        textAlign: {xs: 'center', md: 'left'}
    },
    bolder: {
        fontWeight: 700,
        fontSize: '20px',
        fontFamily: 'roboto',
        color: '#000'
    },
    list: {
        fontWeight: 300,
        fontSize: '16px',
        fontFamily: 'roboto',
        color: '#B4B5B5',
        ':hover': {
            pl: '5px'
        },
        cursor: 'pointer'
    },
    listIcons: {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        width: '200px',
        ml: {xs: '20%', md: 0}
    },
    iconButton1: {
        bgcolor: '#1C917C',
        color: '#000',

    },
    lastwords: {
        mt: '5%',
        textAlign: 'center',
        fontWeight: 300,
        fontSize: '16px',
        fontFamily: 'roboto',
        color: '#B4B5B5'
    }
}