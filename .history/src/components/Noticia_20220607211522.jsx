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
    <Card>
      <CardMedia
        component="img"
        alt={} 
      
      />
    </Card>
  )
}

export default Noticia
