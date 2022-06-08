import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from '../context/useNoticias';
import Noticia from './Noticia';

const ListadoNoticias = () => {

  const { noticias, totalNoticias } = useNoticias();

  const to

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

        <Grid
          container
          spacing={2}
        >
          {noticias.map(noticia => (
            <Noticia 
              noticia={noticia}
              key={noticia.url}
            />
          ))}
        </Grid>

        <Stack
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{
            marginY: 5
          }}
        >
          <Pagination count={10} color='secondary' />
        </Stack>
    </>
  )
}

export default ListadoNoticias;
