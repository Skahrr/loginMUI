import { Box, Button, Typography } from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h1' fontSize={'180px'} textAlign={'center'} mt={'150px'}>Hola</Typography>
      <Typography variant='h3' fontSize={'80px'} textAlign={'center'} m={'50px'}>Te doy 2 opciones, o te registras o te registro</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
        <Link to={'/signup'}>
          <Button variant="outlined" sx={{ maxWidth: 'fit-content', fontSize: '30px' }}>te registras</Button>
        </Link>
        <Link to={'/login'}>
          <Button variant="outlined" sx={{ maxWidth: 'fit-content', fontSize: '30px' }}>te registro</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
