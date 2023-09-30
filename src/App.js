
import { Box } from '@mui/material';
import Header from './header/header';
import Banner1 from './banner1/Banner1';
import Services from './services/Services';

function App() {
  return (
    <Box >
     <Header sx={{mt: 0}} />
      <Banner1/>
       <Services/>
    </Box>
  );
}

export default App;


