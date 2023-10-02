
import { Box } from '@mui/material';
import Header from './header/header';
import Banner1 from './banner1/Banner1';
import Services from './services/Services';
import AboutHotel from './aboutHotel/AboutHotel';
import Blogposts from './blog/Blogposts';
import Testimonials from './testimonials/Testimonials';

function App() {
  return (
    <Box sx={{ mt: 0 }} >
      <Header />
      <Banner1 />
      <Services />
      <AboutHotel />
      <Blogposts/>
      <Testimonials/>
    </Box>
  );
}

export default App;


