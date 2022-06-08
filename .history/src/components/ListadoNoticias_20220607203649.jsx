import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../context/useNoticias';

const ListadoNoticias = () => {

  const { noticias } = useNoticias();

  return (
    <>
        <Typography
          textAlign='center'
          marginY={5}
          variant='h3'
          component='h2'
        >
          Últimas Noticias
        </Typography>

        <Grid>
          {noticias.map}
        </Grid>
    </>
  )
}

export default ListadoNoticias;
