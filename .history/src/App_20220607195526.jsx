import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';

function App() {

  return (
    <NoticiasProvider>
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
        <Grid item md={6} xs={12} lg={5}>
        <Formulario />

        </Grid>
      </Grid>

    </Container>

    </NoticiasProvider>
  )
}

export default App
