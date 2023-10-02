import { Edit, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import Img3 from '../images/img_2.webp'
import Img4 from '../images/img_3.webp'
import Img5 from '../images/img_4.webp'

function Blogposts() {
    return (
        <Box display='flex' flexDirection='column'>
            <Box sx={styles.blogPosts}>
                <Typography sx={styles.blogWord}>
                    BLOG POSTS
                </Typography>
                <Box sx={styles.cardsPosts}>
                    <Card sx={styles.cardss}>
                        <CardMedia
                            component='img'
                            sx={{ height: 300 }}
                            image={Img3}
                            title="green iguana"
                        />
                        <CardContent>
                            <IconButton sx={styles.iconButton}>
                                <Edit sx={styles.edit} />
                            </IconButton>
                            <Typography variant="body2" sx={styles.loremblog}>
                                Far far away, behind the word mountains, far from countries
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={styles.read}>READ MORE </Button>
                        </CardActions>
                    </Card>
                    <Card sx={styles.cardss}>
                        <CardMedia
                            component='img'
                            sx={{ height: 300 }}
                            image={Img4}
                            title="green iguana"
                        />
                        <CardContent>
                            <IconButton sx={styles.iconButton}>
                                <Edit sx={styles.edit} />
                            </IconButton>
                            <Typography variant="body2" sx={styles.loremblog}>
                                Far far away, behind the word mountains, far from countries
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={styles.read}>READ MORE </Button>
                        </CardActions>
                    </Card>
                    <Card sx={styles.cardss}>
                        <CardMedia
                            component='img'
                            sx={{ height: 300 }}
                            image={Img5}
                            title="green iguana"
                        />
                        <CardContent>
                            <IconButton sx={styles.iconButton}>
                                <Edit sx={styles.edit} />
                            </IconButton>
                            <Typography variant="body2" sx={styles.loremblog}>
                                Far far away, behind the word mountains, far from countries
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" sx={styles.read}>READ MORE </Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', margin: {md:'30px 0 0 45%', xs: '30px 0 0 30px' }}}>
                    <Button variant="contained" sx={styles.button1} disabled>
                        Prev
                    </Button>
                    <Button variant="contained" sx={styles.button1}>Next</Button>
                </Box>

            </Box>
            <Box sx={styles.seconBoxBlog}>
                <Box sx={styles.dropdownBox}>
                    <Typography sx={styles.frequent}>FREQUENTLY ASKED QUESTIONS</Typography>
                    <Box>
                        <Accordion sx={styles.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Is it free</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={styles.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>How to install this template?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={styles.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>Where can I get help?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Blogposts

const styles = {
    blogPosts: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
        mt: {xs: '200px'}
    },
    blogWord: {
        fontSize: '25px',
        fontFamily: 'monoscape',
        fontWeight: 700,
        color: '#1C917C',
        margin: { md: '40px 0 10px 150px', xs: '30px 0 10px 30px' },
    },
    cardsPosts: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        gap: '10px',
        m: { md: '25px 150px 20px 150px', xs: '25px 0 20px 30px' },
        zIndex: 1000
    },
    cardss: {
        border: 'none',
        borderRadius: 'none'
    },
    iconButton: {
        mt: { md: '-35px', xs: '-10px' },
        ml: '30px',
        background: '#1C917C',
        mb: '5%',
        ':hover': {
            background: '#1C917C',
        },
    },
    edit: {
        color: '#fff'
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
        color: '#000',
        borderRadius: '10px',
        fontSize: '10px'
    },
    loremblog: {
        fontSize: '20px',
        fontWeight: 900,
        fontfamily: 'monoscape',
        width: '400px'
    },
    read: {
        color: '#070707',
        fontWeight: 700,
    },
    seconBoxBlog: {
        background: '#1C917C',
        mt: {md: '-180px', xs: '30px'},
        width: '100%',
        height: {md:'500px', xs:'400px'},
        position: 'static'
    },
    dropdownBox: {
        display: 'flex',
        flexDirection: {md: 'row', xs: 'column'},
        justifyContent: 'space-between',
        gap: '20px',
        m: {md: '16% 150px 40px 150px', xs: '3% 3% 3% 30px'},
    },
    frequent:{
        fontFamily: 'roboto',
        fontSize: '30px',
        fontWeight: 900,
        width:'450px',
        color: '#000'

    },
    accordion: {
        color: '#000',
        fontFamily: 'monoscape',
        background: 'transparent',
        borderBottom: '#000',
        fontWeight: 300
    }
}