import { FormControl, InputLabel, Select, MenuItem, Button, Box} from '@mui/material';

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
  return (
    <form>
      <FormControl>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="categoria"
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

        <Box>
          
        </Box>

        <Button
          fullWidth
          variant='contained'
          color='secondary'
        >
          Buscar Noticias
        </Button>
      </FormControl>
    </form>
  )
}

export default Formulario
