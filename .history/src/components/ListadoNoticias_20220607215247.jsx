import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../context/useNoticias';
import Noticia from './Noticia';

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
    </>
  )
}

export default ListadoNoticias;
