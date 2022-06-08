import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Noticia = ({noticia}) => {

  const { urlToImage, url, title, source, description} = noticia;
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Imagen de la Noticia ${title}`}
            image={urlToImage}
            height={'250'} 
          />
        )}
        
        <CardContent>
          <Typography variant='body1' color='error'>
            {soure.name}
          </Typography>
          <Typography variant='h3' component='div'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Noticia
