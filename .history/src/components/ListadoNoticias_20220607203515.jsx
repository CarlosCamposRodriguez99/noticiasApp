import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNoticias from '../context/useNoticias';

const ListadoNoticias = () => {

  const {} = useNoticias();
  
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
    </>
  )
}

export default ListadoNoticias;
