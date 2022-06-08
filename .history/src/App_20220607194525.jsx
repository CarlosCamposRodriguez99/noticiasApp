import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';

function App() {

  return (
    <Container>
      <header>
        <Typography
          align="center"
          marginY={5}
          component='h1'
          variant='h3'
        >
          Daily Bugle
        </Typography>
      </header>

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          item md={6}
          
        >
        <Formulario />

        </Grid>
      </Grid>

    </Container>
  )
}

export default App
