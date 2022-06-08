import { FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material';
import useNoticias from '../context/useNoticias';

const CATEGORIAS = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {

  const {categoria, handleChangeCategoria} = useNoticias();
  
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="categoria"
          onChange={handleChangeCategoria}
          value={categoria}
        >
          {CATEGORIAS.map(categoria => (
            <MenuItem
              key={categoria.value}
              value={categoria.value}
            >
              {categoria.label}
            </MenuItem>
          ))}

        </Select>

        <Box
          sx={{marginTop: 2}}
        >
          <Button
            fullWidth
            variant='contained'
            color='secondary'
          >
            Buscar Noticias
          </Button>
        </Box>

      </FormControl>
    </form>
  )
}

export default Formulario
